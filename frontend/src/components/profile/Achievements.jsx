import {
  Trophy,
  Brain,
  FileText,
  Mic,
} from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "AI Explorer",
    description: "Completed 100 AI analyses",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    icon: FileText,
    title: "Report Master",
    description: "Generated 25 PDF reports",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Mic,
    title: "Voice Expert",
    description: "Completed voice emotion analysis",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Brain,
    title: "Emotion Master",
    description: "Used all AI models",
    color: "bg-purple-100 text-purple-600",
  },
];

export default function Achievements() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">
      <h2 className="text-2xl font-bold mb-6">
        🏆 Achievements
      </h2>

      <div className="grid md:grid-cols-2 gap-5">
        {achievements.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="border rounded-xl p-5 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className={`p-4 rounded-full ${item.color}`}>
                  <Icon size={28} />
                </div>

                <div>
                  <h3 className="font-bold text-lg">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}