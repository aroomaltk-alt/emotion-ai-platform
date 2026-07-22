from fastapi import (
    FastAPI,
    UploadFile,
    File,
    Form
)
from history import (
    save_history,
    get_history,
    clear_history
)
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from auth.database import SessionLocal
from auth.schemas import UserRegister
from auth.auth import create_user
from auth.schemas import UserLogin
from auth.auth import authenticate_user
from auth.security import create_access_token
from fastapi import HTTPException
from face_emotion import detect_face_emotion
from fusion import weighted_fusion
from fastapi import FastAPI, UploadFile, File, Form
from voice_emotion import predict_voice_emotion
from auth.database import Base, engine
from auth.models import User
Base.metadata.create_all(bind=engine)
from companion import generate_response
from emotion_text import detect_emotion
from db_utils import save_emotion
from db_utils import save_emotion, get_history
import base64
import io
import numpy as np
import cv2
import os
from explanation import generate_explanation

from PIL import Image
from pydantic import BaseModel
def get_db():

    db = SessionLocal()

    try:

        yield db

    finally:

        db.close()

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class TextInput(BaseModel):
    text: str
class FaceRequest(BaseModel):
    image: str

@app.get("/")
def home():
    return {"message": "Emotion AI API Running"}

@app.post("/face-emotion")
def face_emotion(request: FaceRequest):

    image_data = request.image.split(",")[1]

    image_bytes = base64.b64decode(image_data)

    image = Image.open(io.BytesIO(image_bytes))

    frame = np.array(image)

    frame = cv2.cvtColor(frame, cv2.COLOR_RGB2BGR)

    result = detect_face_emotion(frame)

    save_history(
        "Face",
        result["emotion"],
        result["confidence"]
    )

    return result

@app.post("/emotion")
def emotion(data: TextInput):

    result = detect_emotion(data.text)

    save_emotion(
        data.text,
        result["emotion"],
        result["confidence"]
    )
    save_history(
    "Text",
    result["emotion"],
    result["confidence"]
)
    

    return result
@app.get("/stats")
def stats():
    import sqlite3

    conn = sqlite3.connect("emotions.db")

    cursor = conn.cursor()

    cursor.execute("""
        SELECT emotion, COUNT(*)
        FROM emotions
        GROUP BY emotion
    """)

    rows = cursor.fetchall()

    conn.close()

    return rows
@app.post("/multimodal")
async def multimodal(
    text: str = Form(...),
    file: UploadFile = File(...)
):

    # Save uploaded voice
    file_path = "temp.wav"

    with open(file_path, "wb") as buffer:
        buffer.write(await file.read())

    # -------------------------
    # Text AI
    # -------------------------
    text_result = detect_emotion(text)

    # -------------------------
    # Face AI
    # -------------------------
    cap = cv2.VideoCapture(0)

    ret, frame = cap.read()

    cap.release()

    if not ret:
        face_result = {
            "emotion": "No face detected",
            "confidence": 0.0
        }
    else:
        face_result = detect_face_emotion(frame)

    # -------------------------
    # Voice AI
    # -------------------------
    voice_result = predict_voice_emotion(file_path)

    # Delete temp file
    if os.path.exists(file_path):
        os.remove(file_path)

    # -------------------------
    # Weighted Fusion
    # -------------------------
    fusion = weighted_fusion(
        text_result,
        face_result,
        voice_result
    )

    # -------------------------
    # AI Explanation
    # -------------------------
    explanation = generate_explanation(
        text_result,
        face_result,
        voice_result,
        fusion
    )
    save_history(
    "Multimodal",
    fusion["final_emotion"],
    fusion["confidence"]
)

    return {
        "text": text_result,
        "face": face_result,
        "voice": voice_result,
        "fusion": fusion,
        "explanation": explanation
    }
@app.post("/voice-emotion")
async def voice_emotion(
    file: UploadFile = File(...)
):

    file_path = "temp.wav"

    with open(file_path, "wb") as buffer:
        buffer.write(await file.read())

    result = predict_voice_emotion(file_path)

    save_history(
        "Voice",
        result["emotion"],
        1.0
    )

    return result
@app.post("/companion")
def companion(data: TextInput):

    result = detect_emotion(
        data.text
    )

    reply = generate_response(
        result["emotion"]
    )

    return {
        "emotion": result["emotion"],
        "response": reply
    }
from fastapi import Depends
from sqlalchemy.orm import Session


@app.post("/register")
def register(
    user: UserRegister,
    db: Session = Depends(get_db)
):
    try:
        return create_user(
            db,
            user
        )

    except ValueError as e:
        raise HTTPException(
            status_code=400,
            detail=str(e)
        )
@app.post("/login")
def login(
    user: UserLogin,
    db: Session = Depends(get_db)
):

    db_user = authenticate_user(
        db,
        user.email,
        user.password
    )

    if not db_user:
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password"
        )

    token = create_access_token(
        {
            "sub": db_user.email
        }
    )

    return {
    "access_token": token,
    "token_type": "bearer",
    "username": db_user.username,
    "email": db_user.email
}
@app.get("/history")
def history():
    return get_history()


@app.delete("/history")
def delete_history():
    clear_history()
    return {
        "message": "History cleared"
    }