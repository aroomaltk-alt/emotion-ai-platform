import {
  Brain,
  FileText,
  BarChart3,
  Sparkles,
} from "lucide-react";

const stats = [
  {
    title: "Total Analyses",
    value: 152,
    icon: Brain,
    color: "text-blue-600",
  },
  {
    title: "Reports",
    value: 28,
    icon: FileText,
    color: "text-green-600",
  },
  {
    title: "Accuracy",
    value: "94.6%",
    icon: BarChart3,
    color: "text-orange-500",
  },
  {
    title: "AI Models",
    value: 3,
    icon: Sparkles,
    color: "text-purple-600",
  },
];

export default function ProfileStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">

      {stats.map((stat, index) => {
        const Icon = stat.icon;

        return (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex justify-between items-center">

              <div>
                <p className="text-gray-500 text-sm">
                  {stat.title}
                </p>

                <h2 className="text-3xl font-bold mt-2">
                  {stat.value}
                </h2>
              </div>

              <div
                className={`p-4 rounded-xl bg-gray-100 ${stat.color}`}
              >
                <Icon size={30} />
              </div>

            </div>
          </div>
        );
      })}

    </div>
  );
}