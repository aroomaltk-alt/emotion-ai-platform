from typing import Dict


def weighted_fusion(text: Dict, face: Dict, voice: Dict):
    """
    Weighted Multimodal Fusion

    Text  = 50%
    Face  = 30%
    Voice = 20%
    """

    weights = {
        "text": 0.5,
        "face": 0.3,
        "voice": 0.2,
    }

    scores = {}

    # Text
    emotion = text["emotion"]
    confidence = float(text.get("confidence", 1.0))

    scores[emotion] = scores.get(emotion, 0) + (
        confidence * weights["text"]
    )

    # Face
    emotion = face["emotion"]
    confidence = float(face.get("confidence", 1.0))

    scores[emotion] = scores.get(emotion, 0) + (
        confidence * weights["face"]
    )

    # Voice
    emotion = voice["emotion"]
    confidence = float(voice.get("confidence", 1.0))

    scores[emotion] = scores.get(emotion, 0) + (
        confidence * weights["voice"]
    )

    final_emotion = max(
        scores,
        key=scores.get
    )

    final_confidence = round(
        scores[final_emotion] * 100,
        2
    )

    return {
        "final_emotion": final_emotion,
        "confidence": final_confidence,
        "scores": scores
    }