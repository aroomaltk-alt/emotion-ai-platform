import { useState } from "react";
import VoiceRecorder from "../components/VoiceRecorder";
import { detectVoiceEmotion } from "../services/api";
import Card from "../components/Card";

export default function VoiceEmotion() {

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const audioReady = async (blob) => {

    try {

      setLoading(true);

      const data =
        await detectVoiceEmotion(blob);

      setResult(data);

    } catch (err) {

      console.error(err);

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="space-y-6">

      <h1 className="text-4xl font-bold">

        🎤 Voice Emotion Recognition

      </h1>

      <VoiceRecorder
        onAudioReady={audioReady}
      />

      <Card title="Prediction">

        {loading ? (

          <p>Analyzing voice...</p>

        ) : result ? (

          <div className="space-y-3">

            <h2 className="text-3xl font-bold text-blue-600">

              {result.emotion}

            </h2>

          </div>

        ) : (

          <p>No prediction yet.</p>

        )}

      </Card>

    </div>

  );

}