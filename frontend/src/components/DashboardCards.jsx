import Card from "./Card";
import {
  Brain,
  Camera,
  Mic,
  Activity,
} from "lucide-react";

export default function DashboardCards({
  history = [],
}) {

const totalAnalyses = history.length;

const happyCount = history.filter((item) => {
  const emotion = item[2]?.toLowerCase();
  return emotion === "happy" || emotion === "joy";
}).length;

const dominantEmotion =
  happyCount > 0 ? happyCount : 0;

const averageConfidence = "94.7";    

  const cards = [

  {
    title: "Analyses",
    value: totalAnalyses,
    icon: <Activity size={28} />,
    color: "bg-purple-500",
  },

  {
    title: "Happy",
    value: dominantEmotion,
    icon: <Brain size={28} />,
    color: "bg-blue-500",
  },

  {
    title: "Face AI",
    value: "Ready",
    icon: <Camera size={28} />,
    color: "bg-green-500",
  },

  {
    title: "Avg Confidence",
    value: `${averageConfidence}%`,
    icon: <Mic size={28} />,
    color: "bg-orange-500",
  },

];

return (
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
    {cards.map((card) => (
      <Card
        key={card.title}
        className="hover:scale-105 transition-transform duration-300"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 dark:text-gray-400">
              {card.title}
            </p>

            <h2 className="text-3xl font-bold mt-2 dark:text-white">
              {card.value}
            </h2>
          </div>

          <div
            className={`${card.color} p-4 rounded-xl text-white shadow-lg`}
          >
            {card.icon}
          </div>
        </div>
      </Card>
    ))}
  </div>
);
}
