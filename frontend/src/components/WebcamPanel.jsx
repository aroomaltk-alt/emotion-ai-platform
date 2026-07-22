import Webcam from "react-webcam";
import { useRef } from "react";

export default function WebcamPanel({ onCapture }) {

  const webcamRef = useRef(null);

  const capture = () => {

    const imageSrc = webcamRef.current.getScreenshot();

    if (imageSrc) {
      onCapture(imageSrc);
    }

  };

  return (

    <div className="bg-white rounded-xl shadow-lg p-6">

      <h2 className="text-xl font-bold mb-4">
        📷 Live Camera
      </h2>

      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        className="rounded-xl w-full border"
      />

      <button
        onClick={capture}
        className="mt-5 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition"
      >
        📸 Capture & Analyze
      </button>

    </div>

  );

}