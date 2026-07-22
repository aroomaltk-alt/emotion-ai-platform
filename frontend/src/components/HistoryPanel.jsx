import Card from "./Card";
const emotionConfig = {
  joy: {
    color: "bg-green-100 text-green-700",
    emoji: "😊",
  },
  happy: {
    color: "bg-green-100 text-green-700",
    emoji: "😊",
  },
  sadness: {
    color: "bg-blue-100 text-blue-700",
    emoji: "😔",
  },
  sad: {
    color: "bg-blue-100 text-blue-700",
    emoji: "😔",
  },
  angry: {
    color: "bg-red-100 text-red-700",
    emoji: "😠",
  },
  fear: {
    color: "bg-yellow-100 text-yellow-700",
    emoji: "😨",
  },
  neutral: {
    color: "bg-gray-100 text-gray-700",
    emoji: "😐",
  },
};

export default function HistoryPanel({ history }) {
  return (
    <Card title="History">

      <div className="flex justify-between items-center mb-5">

      

        <span className="text-gray-500">
          {history.length} Records
        </span>

      </div>

      {history.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          No history available.
        </div>
      ) : (
        <div className="space-y-3">

          {history.map((item) => {

            const emotion =
              item[2]?.toLowerCase() || "neutral";

            const style =
              emotionConfig[emotion] || emotionConfig.neutral;

            return (

              <div
                key={item[0]}
                className="
                  flex
                  justify-between
                  items-center
                  border
                  rounded-lg
                  p-4
                  hover:bg-slate-50
                  transition
                "
              >

                <div className="w-2/3">

                  <p className="font-medium truncate">

                    {item[1]}

                  </p>

                </div>

                <span
                  className={`
                    px-3
                    py-1
                    rounded-full
                    font-semibold
                    ${style.color}
                  `}
                >
                  {style.emoji} {item[2]}
                </span>

              </div>

            );
          })}

        </div>
      )}
    </Card>
  );
}