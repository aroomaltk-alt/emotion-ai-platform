from fer import FER
import cv2
import numpy as np

detector = FER()


def detect_face_emotion(frame):

    emotions = detector.detect_emotions(frame)

    if len(emotions) == 0:
        return {
            "emotion": "No face detected",
            "confidence": 0.0
        }

    emotion_scores = emotions[0]["emotions"]

    best_emotion = max(
        emotion_scores,
        key=emotion_scores.get
    )

    return {
        "emotion": best_emotion,
        "confidence": round(
            emotion_scores[best_emotion],
            4
        )
    }