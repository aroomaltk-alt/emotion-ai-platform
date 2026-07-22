import axios from "axios";


const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

// ---------- Text Emotion ----------
export const detectEmotion = async (text) => {
  const response = await API.post("/emotion", {
    text,
  });

  return response.data;
};

// ---------- Face Emotion ----------
export const detectFaceEmotion = async (image) => {

    const response = await API.post("/face-emotion", {

        image,

    });

    return response.data;

};

// ---------- Multimodal ----------
export const detectMultimodal = async (text, audioBlob) => {

  const formData = new FormData();

  formData.append("text", text);

  formData.append(
    "file",
    audioBlob,
    "voice.wav"
  );

  const response = await API.post(
    "/multimodal",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;

};
// ---------- History ----------
export const loadHistory = async () => {
  const response = await API.get("/history");

  return response.data;
};

// ---------- Voice Emotion ----------
export const detectVoiceEmotion = async (audioBlob) => {
  const formData = new FormData();

  formData.append("file", audioBlob, "recording.wav");

  const response = await API.post(
    "/voice-emotion",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};

API.interceptors.request.use((config) => {

  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export const loginUser = async (credentials) => {
  const response = await API.post(
    "/login",
    credentials
  );

  return response.data;
};