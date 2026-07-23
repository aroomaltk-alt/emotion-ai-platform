from deepface import DeepFace
import cv2
import numpy as np


def detect_face_emotion(frame):
    try:
        result = DeepFace.analyze(
            img_path=frame,
            actions=["emotion"],
            enforce_detection=False
        )

        # Handle list or dict response
        if isinstance(result, list):
            result = result[0]

        return {
            "emotion": result["dominant_emotion"],
            "confidence": round(
                max(result["emotion"].values()) / 100,
                4
            )
        }

    except Exception as e:
        return {
            "emotion": "Unknown",
            "confidence": 0.0,
            "error": str(e)
        }