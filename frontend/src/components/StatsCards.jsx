export default function StatsCards({
  result,
  faceResult,
  multiResult,
  history,
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">

      <div className="bg-white rounded-xl shadow-md p-4">
        <p className="text-gray-500">Text Analysis</p>
        <h2 className="text-2xl font-bold">
          {result ? "✓" : "0"}
        </h2>
      </div>

      <div className="bg-white rounded-xl shadow-md p-4">
        <p className="text-gray-500">Face Analysis</p>
        <h2 className="text-2xl font-bold">
          {faceResult ? "✓" : "0"}
        </h2>
      </div>

      <div className="bg-white rounded-xl shadow-md p-4">
        <p className="text-gray-500">Multimodal</p>
        <h2 className="text-2xl font-bold">
          {multiResult ? "✓" : "0"}
        </h2>
      </div>

      <div className="bg-white rounded-xl shadow-md p-4">
        <p className="text-gray-500">History Records</p>
        <h2 className="text-2xl font-bold">
          {history.length}
        </h2>
      </div>

    </div>
  );
}