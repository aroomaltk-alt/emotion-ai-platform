import { useState } from "react";
import axios from "axios";
import Sidebar from "./components/Sidebar";
import AnalyticsPanel from "./components/AnalyticsPanel";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import TextEmotion from "./pages/TextEmotion";
import FaceEmotion from "./pages/FaceEmotion";
import VoiceEmotion from "./pages/VoiceEmotion";
import Multimodal from "./pages/Multimodal";
import Analytics from "./pages/Analytics";
import Login from "./pages/Login";
import History from "./pages/History";
import Landing from "./pages/Landing";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);
  const [faceResult, setFaceResult] = useState(null);
  const [multiResult, setMultiResult] = useState(null);
  const [voiceResult, setVoiceResult] = useState(null);
const [voiceFile, setVoiceFile] = useState(null);

  const detectEmotion = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/emotion",
        {
          text: text,
        }
      );

      setResult(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const detectFaceEmotion = async () => {
  try {
    const response = await axios.get(
      "http://127.0.0.1:8000/face-emotion"
    );

    setFaceResult(response.data);
  } catch (error) {
    console.error(error);
  }
};

  const loadHistory = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/history"
      );

      setHistory(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const detectMultimodal = async () => {

  try {

    const response =
      await axios.post(
        "http://127.0.0.1:8000/multimodal",
        {
          text: text
        }
      );

    setMultiResult(response.data);

  } catch(error) {
    console.error(error);
  }
};
const detectVoiceEmotion = async () => {

  if (!voiceFile) {
    alert("Please select a WAV file.");
    return;
  }

  const formData = new FormData();

  formData.append("file", voiceFile);

  try {

    const response = await axios.post(
      "http://127.0.0.1:8000/voice-emotion",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    setVoiceResult(response.data);

  } catch (error) {
    console.error(error);
  }

};
return (
<div className="flex bg-slate-100">
  <Sidebar />

<div className="flex-1 p-8">

    <Routes>
   
<Route path="/login" element={<Login />} />
<Route path="/" element={<Landing />} />

<Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
  

  <Route
  path="/text"
  element={
    <ProtectedRoute>
      <TextEmotion />
    </ProtectedRoute>
  }
/>

  <Route
    path="/face"
    element={
      <ProtectedRoute>
    <FaceEmotion />
    </ProtectedRoute>
    }
  />

  <Route
    path="/voice"
    element={
    <ProtectedRoute>
      <VoiceEmotion />
      </ProtectedRoute>
      }
  />

  <Route
    path="/multimodal"
    element={
    <ProtectedRoute>
    <Multimodal />
     </ProtectedRoute>}
  />

  <Route
    path="/analytics"
    element={
    <ProtectedRoute>
      <Analytics />
      </ProtectedRoute>
      }
  />

  <Route
    path="/history"
    element={
    <ProtectedRoute>
      <History />
      </ProtectedRoute>
      }
  />

  <Route
    path="/profile"
    element={
    <ProtectedRoute>
      <Profile />
      </ProtectedRoute>
      }
  />

  <Route
    path="/settings"
    element={
    <ProtectedRoute>
      <Settings />
    </ProtectedRoute>}
  />

</Routes>
</div>
</div>

);
}
export default App;