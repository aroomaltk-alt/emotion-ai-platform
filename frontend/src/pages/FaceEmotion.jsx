import { useEmotion } from "../context/EmotionContext";
import WebcamPanel from "../components/WebcamPanel";
import ResultPanel from "../components/ResultPanel";
import { detectFaceEmotion } from "../services/api";

export default function FaceEmotion() {

  const {
    faceResult,
    setFaceResult,
  } = useEmotion();

  const analyzeFace = async (image) => {

    try {

      const data = await detectFaceEmotion(image);

      setFaceResult(data);

    } catch (err) {

      console.error(err);

    }

  };

  return (

    <div>

      <h1 className="text-3xl font-bold mb-6">

        Face Emotion Analysis

      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <WebcamPanel
          onCapture={analyzeFace}
        />

        <ResultPanel
          result={null}
          faceResult={faceResult}
          multiResult={null}
        />

      </div>

    </div>

  );

}