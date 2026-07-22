import {
  Brain,
  Camera,
  Mic,
  Sparkles,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

export default function QuickActions() {

  const navigate = useNavigate();

  const actions = [
    {
      title: "Text Emotion",
      icon: <Brain size={36} />,
      path: "/text",
      color: "bg-blue-500",
    },
    {
      title: "Face Emotion",
      icon: <Camera size={36} />,
      path: "/face",
      color: "bg-green-500",
    },
    {
      title: "Voice Emotion",
      icon: <Mic size={36} />,
      path: "/voice",
      color: "bg-orange-500",
    },
    {
      title: "Multimodal AI",
      icon: <Sparkles size={36} />,
      path: "/multimodal",
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-6">
        Quick Actions
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {actions.map((item) => (

          <button
            key={item.title}
            onClick={() => navigate(item.path)}
            className={`${item.color} text-white rounded-xl p-6 hover:scale-105 transition-all duration-300 shadow-lg`}
          >
            <div className="flex flex-col items-center">

              {item.icon}

              <h3 className="text-lg font-semibold mt-3">
                {item.title}
              </h3>

            </div>

          </button>

        ))}

      </div>

    </div>
  );
}