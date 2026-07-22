import { useState } from "react";
import { detectMultimodal } from "../services/api";
import Card from "../components/Card";
import VoiceRecorder from "../components/VoiceRecorder";
import { generateReport } from "../utils/reportGenerator";

export default function Multimodal() {

  const [text, setText] = useState("");
  const [audioBlob, setAudioBlob] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleAudioReady = (blob) => {
    setAudioBlob(blob);
  };

  const analyze = async () => {

    if (!text.trim()) {
      alert("Please enter some text.");
      return;
    }

    if (!audioBlob) {
      alert("Please record your voice.");
      return;
    }

    try {

      setLoading(true);

      const data = await detectMultimodal(
        text,
        audioBlob
      );

      setResult(data);

    } catch (err) {

      console.error(err);
      alert("Analysis failed.");

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="space-y-6">

      <h1 className="text-4xl font-bold">
        🧠 Multimodal Emotion Analysis
      </h1>

      <Card title="Input">

        <textarea
          rows={5}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your message..."
          className="w-full border rounded-lg p-4"
        />

        <div className="mt-6">
          <VoiceRecorder
            onAudioReady={handleAudioReady}
          />
        </div>

        <button
          onClick={analyze}
          disabled={loading}
          className="mt-6 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg disabled:opacity-50"
        >
          {loading ? "Analyzing..." : "Analyze Emotion"}
        </button>

      </Card>

      {result && (

        <Card title="AI Results">

          <div className="grid md:grid-cols-3 gap-6">

            <div className="border rounded-lg p-4">

              <h3 className="text-xl font-bold">
                📝 Text
              </h3>

              <p>{result.text.emotion}</p>

              <p>
                {(result.text.confidence * 100).toFixed(1)}%
              </p>

            </div>

            <div className="border rounded-lg p-4">

              <h3 className="text-xl font-bold">
                📷 Face
              </h3>

              <p>{result.face.emotion}</p>

              <p>
                {(result.face.confidence * 100).toFixed(1)}%
              </p>

            </div>

            <div className="border rounded-lg p-4">

              <h3 className="text-xl font-bold">
                🎤 Voice
              </h3>

              <p>{result.voice.emotion}</p>

              <p>
                {(result.voice.confidence * 100).toFixed(1)}%
              </p>

            </div>

          </div>

          <hr className="my-6" />

          <div className="text-center">

            <h2 className="text-5xl font-bold text-purple-600">
              {result.fusion.final_emotion}
            </h2>

            <p className="mt-4 text-2xl">
              Confidence
            </p>

            <p className="text-3xl font-bold">
              {result.fusion.confidence}%
            </p>

          </div>
          {result?.explanation && (
  <Card title="🧠 AI Explanation">
    <ul className="space-y-2">
      {result.explanation.map((item, index) => (
        <li
          key={index}
          className="border-l-4 border-blue-500 pl-3 py-1 dark:text-white"
        >
          {item}
        </li>
      ))}
    </ul>
  </Card>
)}
<button
  onClick={() => generateReport(result)}
  className="mt-6 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg"
>
  📄 Download PDF Report
</button>
        </Card>
        

      )}

    </div>

  );

}
