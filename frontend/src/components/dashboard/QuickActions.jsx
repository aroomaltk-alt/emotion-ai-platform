import { useNavigate } from "react-router-dom";
import {
  FileText,
  Camera,
  Mic,
  Download,
} from "lucide-react";

export default function QuickActions() {
  const navigate = useNavigate();

  const actions = [
  {
    title: "Text Emotion",
    description: "Analyze emotions from text",
    icon: FileText,
    path: "/text",
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Face Emotion",
    description: "Detect emotions using webcam",
    icon: Camera,
    path: "/face",
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Voice Emotion",
    description: "Analyze emotions from voice",
    icon: Mic,
    path: "/voice",
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Analytics",
    description: "View analytics dashboard",
    icon: Download,
    path: "/analytics",
    color: "bg-orange-100 text-orange-600",
  },
];

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-6">
        🚀 Quick Actions
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.title}
              onClick={() => navigate(action.path)}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${action.color}`}>
                <Icon size={28} />
              </div>

              <h3 className="text-xl font-semibold mt-4">
                {action.title}
              </h3>

              <p className="text-gray-500 mt-2">
                {action.description}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}