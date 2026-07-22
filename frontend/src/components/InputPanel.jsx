import Card from "./Card";
export default function InputPanel({
  mode = "text",
  text,
  setText,
  detectEmotion,
  loadHistory,
  detectFaceEmotion,
  detectMultimodal,
}) {
  return (
    <Card title="Text Analysis" className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-bold mb-4">
        Input Analysis
      </h2>

      {/* Text Area */}
      {(mode === "text" || mode === "multimodal") && (
        <textarea
          rows="6"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type your thoughts or feelings here..."
          className="
            w-full
            border
            rounded-lg
            p-4
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
            resize-none
          "
        />
      )}

      {/* Voice Upload */}
      {mode === "voice" && (
        <div className="mt-4">
          <label className="font-medium">
            Upload Voice (.wav)
          </label>

          <input
            type="file"
            accept=".wav"
            className="mt-2 w-full"
          />
        </div>
      )}

      {/* Buttons */}
      <div className="grid grid-cols-2 gap-3 mt-4">

        {mode === "text" && (
          <button
            onClick={detectEmotion}
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition"
          >
            Detect Emotion
          </button>
        )}

        {mode === "face" && (
          <button
            onClick={detectFaceEmotion}
            className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition"
          >
            Detect Face
          </button>
        )}

        {mode === "voice" && (
          <button
            className="bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg transition"
          >
            Analyze Voice
          </button>
        )}

        {mode === "multimodal" && (
          <>
            <button
              onClick={detectEmotion}
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition"
            >
              Analyze Text
            </button>

            <button
              onClick={detectFaceEmotion}
              className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition"
            >
              Analyze Face
            </button>

            <button
              className="bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg transition"
            >
              Analyze Voice
            </button>

            <button
              onClick={detectMultimodal}
              className="bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg transition"
            >
              Final AI Analysis
            </button>
          </>
        )}

        {mode === "history" && (
          <button
            onClick={loadHistory}
            className="bg-slate-600 hover:bg-slate-700 text-white py-3 rounded-lg transition"
          >
            Load History
          </button>
        )}

      </div>
    </Card>
  );
}