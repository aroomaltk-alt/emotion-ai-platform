import os
import librosa
import numpy as np
import joblib

from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

# Emotion mapping for RAVDESS
emotion_map = {
    "01": "neutral",
    "02": "calm",
    "03": "happy",
    "04": "sad",
    "05": "angry",
    "06": "fear",
    "07": "disgust",
    "08": "surprise"
}


def extract_features(file_path):
    y, sr = librosa.load(file_path, sr=None)

    mfcc = librosa.feature.mfcc(
        y=y,
        sr=sr,
        n_mfcc=40
    )

    return np.mean(mfcc.T, axis=0)


# Dataset path
dataset_path = "../datasets/ravdess"

X = []
y = []

# Load dataset
for actor in os.listdir(dataset_path):

    actor_path = os.path.join(
        dataset_path,
        actor
    )

    if not os.path.isdir(actor_path):
        continue

    for file in os.listdir(actor_path):

        if file.endswith(".wav"):

            parts = file.split("-")

            emotion_code = parts[2]

            emotion = emotion_map[emotion_code]

            file_path = os.path.join(
                actor_path,
                file
            )

            features = extract_features(
                file_path
            )

            X.append(features)
            y.append(emotion)

# IMPORTANT:
# Convert to NumPy arrays ONLY AFTER loading all files
X = np.array(X)
y = np.array(y)

print("Feature Shape:", X.shape)
print("Label Shape:", y.shape)

# Train/Test Split
X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)

# Train Model
model = RandomForestClassifier(
    n_estimators=100,
    random_state=42
)

model.fit(X_train, y_train)

# Predict
predictions = model.predict(X_test)

accuracy = accuracy_score(
    y_test,
    predictions
)

print("Accuracy:", accuracy)

# Save Model
joblib.dump(
    model,
    "voice_model.pkl"
)

print("Model saved as voice_model.pkl")