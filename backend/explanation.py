def generate_explanation(text, face, voice, fusion):
    explanations = []

    # Text
    explanations.append(
        f"📝 Text analysis detected '{text['emotion']}' "
        f"with {round(text['confidence'] * 100, 1)}% confidence."
    )

    # Face
    explanations.append(
        f"📷 Face analysis detected '{face['emotion']}' "
        f"with {round(face['confidence'] * 100, 1)}% confidence."
    )

    # Voice
    explanations.append(
        f"🎤 Voice analysis detected '{voice['emotion']}' "
        f"with {round(voice['confidence'] * 100, 1)}% confidence."
    )

    explanations.append(
        f"🧠 Weighted fusion selected '{fusion['final_emotion']}' "
        f"as the final emotion."
    )

    return explanations