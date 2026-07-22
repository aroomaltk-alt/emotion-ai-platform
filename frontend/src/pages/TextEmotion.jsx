import { useEmotion } from "../context/EmotionContext";
import InputPanel from "../components/InputPanel";
import ResultPanel from "../components/ResultPanel";
import { detectEmotion } from "../services/api";

export default function TextEmotion() {
  const {
    text,
    setText,
    result,
    setResult,
  } = useEmotion();

  const analyzeEmotion = async () => {
    try {
      const data = await detectEmotion(text);
      setResult(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">
        Text Emotion Analysis
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <InputPanel
  mode="text"
  text={text}
  setText={setText}
  detectEmotion={analyzeEmotion}
/>

        <ResultPanel
          result={result}
          faceResult={null}
          multiResult={null}
        />

      </div>

    </div>
  );
}