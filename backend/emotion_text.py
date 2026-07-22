from transformers import pipeline

# Load emotion classification model
classifier = pipeline(
    "text-classification",
    model="j-hartmann/emotion-english-distilroberta-base",
    top_k=None
)

def detect_emotion(text):
    results = classifier(text)

    # Get emotion with highest score
    emotions = results[0]
    best_emotion = max(emotions, key=lambda x: x['score'])

    return {
        "emotion": best_emotion["label"],
        "confidence": round(best_emotion["score"], 4)
    }