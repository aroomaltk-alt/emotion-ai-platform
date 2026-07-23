import os
import librosa
import numpy as np
import joblib
# Load trained model once
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_PATH = os.path.join(BASE_DIR, "voice_model.pkl")

model = joblib.load(MODEL_PATH)

def extract_features(audio_path):
    y, sr = librosa.load(audio_path, sr=None)

    mfcc = librosa.feature.mfcc(
        y=y,
        sr=sr,
        n_mfcc=40
    )

    return np.mean(mfcc.T, axis=0)


def predict_voice_emotion(audio_path):

    features = extract_features(audio_path)

    features = features.reshape(1, -1)

    prediction = model.predict(features)[0]

    confidence = 1.0

    if hasattr(model, "predict_proba"):
        confidence = float(
            max(model.predict_proba(features)[0])
        )

    return {
        "emotion": prediction,
        "confidence": round(confidence, 4)
    }