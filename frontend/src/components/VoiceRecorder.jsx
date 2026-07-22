import { useRef, useState } from "react";

export default function VoiceRecorder({ onAudioReady }) {
  const mediaRecorder = useRef(null);
  const audioChunks = useRef([]);

  const [recording, setRecording] = useState(false);
  const [audioURL, setAudioURL] = useState("");

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });

      mediaRecorder.current = new MediaRecorder(stream);

      audioChunks.current = [];

      mediaRecorder.current.ondataavailable = (event) => {
        audioChunks.current.push(event.data);
      };

      mediaRecorder.current.onstop = () => {
        const blob = new Blob(audioChunks.current, {
          type: "audio/wav",
        });

        const url = URL.createObjectURL(blob);

        setAudioURL(url);

        onAudioReady(blob);
      };

      mediaRecorder.current.start();

      setRecording(true);

    } catch (err) {

      console.error(err);

    }
  };

  const stopRecording = () => {

    mediaRecorder.current.stop();

    setRecording(false);

  };

  return (

    <div className="bg-white rounded-xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-5">

        🎤 Voice Recorder

      </h2>

      {!recording ? (

        <button
          onClick={startRecording}
          className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg"
        >
          🎙 Start Recording
        </button>

      ) : (

        <button
          onClick={stopRecording}
          className="w-full bg-gray-700 hover:bg-gray-800 text-white py-3 rounded-lg"
        >
          ⏹ Stop Recording
        </button>

      )}

      {audioURL && (

        <div className="mt-6">

          <audio controls src={audioURL} className="w-full" />

        </div>

      )}

    </div>

  );
}