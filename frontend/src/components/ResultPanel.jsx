import Card from "./Card";
export default function ResultPanel({
  result,
  faceResult,
  voiceResult,
  multiResult,
}) {

  const getEmotionColor = (emotion) => {

    if (!emotion) return "bg-gray-100 text-gray-700";

    emotion = emotion.toLowerCase();

    switch (emotion) {
      case "happy":
      case "joy":
        return "bg-green-100 text-green-700";

      case "sad":
      case "sadness":
        return "bg-blue-100 text-blue-700";

      case "angry":
        return "bg-red-100 text-red-700";

      case "fear":
        return "bg-yellow-100 text-yellow-700";

      case "neutral":
        return "bg-gray-100 text-gray-700";

      default:
        return "bg-purple-100 text-purple-700";
    }
  };

  const getEmoji = (emotion) => {

    if (!emotion) return "❔";

    emotion = emotion.toLowerCase();

    switch (emotion) {
      case "happy":
      case "joy":
        return "😊";

      case "sad":
      case "sadness":
        return "😔";

      case "angry":
        return "😠";

      case "fear":
        return "😨";

      case "neutral":
        return "😐";

      default:
        return "🧠";
    }
  };

  return (

    <Card title="Analysis Results">



      {/* Text Emotion */}

      {result && (

        <div className="mb-5 border rounded-lg p-4">

          <h3 className="font-semibold text-lg mb-3">
            📝 Text Emotion
          </h3>

          <span
            className={`px-3 py-2 rounded-full font-semibold ${getEmotionColor(result.emotion)}`}
          >
            {getEmoji(result.emotion)} {result.emotion}
          </span>

          <p className="mt-3">
            Confidence:
            <strong> {result.confidence}</strong>
          </p>

        </div>

      )}

      {/* Face */}

      {faceResult && (

        <div className="mb-5 border rounded-lg p-4">

          <h3 className="font-semibold text-lg mb-3">
            📷 Face Emotion
          </h3>

          <span
            className={`px-3 py-2 rounded-full font-semibold ${getEmotionColor(faceResult.emotion)}`}
          >
            {getEmoji(faceResult.emotion)} {faceResult.emotion}
          </span>

          <p className="mt-3">
            Confidence:
            <strong> {faceResult.confidence}</strong>
          </p>

        </div>

      )}
      {voiceResult && (

<div className="mb-5 border rounded-lg p-4">

<h3 className="font-semibold text-lg mb-3">

🎤 Voice Emotion

</h3>

<span
className={`px-3 py-2 rounded-full font-semibold ${getEmotionColor(voiceResult.emotion)}`}
>

{getEmoji(voiceResult.emotion)}

{" "}

{voiceResult.emotion}

</span>

</div>

)}

      {/* Final */}

      {multiResult && (

        <div className="border rounded-lg p-4 bg-slate-50">

          <h3 className="font-semibold text-lg mb-3">
            🧠 Final AI Decision
          </h3>

          <span
            className={`px-4 py-2 rounded-full text-lg font-bold ${getEmotionColor(multiResult.final.final_emotion)}`}
          >
            {getEmoji(multiResult.final.final_emotion)}
            {" "}
            {multiResult.final.final_emotion}
          </span>

          <div className="mt-4 space-y-2">

            <p>

              <strong>Text:</strong>

              {" "}

              {multiResult.text.emotion}

            </p>

            <p>

              <strong>Face:</strong>

              {" "}

              {multiResult.face.emotion}

            </p>

            <p>

              <strong>Confidence:</strong>

              {" "}

              {multiResult.final.confidence}

            </p>

            <p>

              <strong>Source:</strong>

              {" "}

              {multiResult.final.source}

            </p>

          </div>

        </div>

      )}

      {!result && !faceResult && !multiResult && (

        <div className="text-center text-gray-500 py-10">

          No analysis performed yet.

        </div>

      )}

    </Card>

  );
}