import {
  LayoutDashboard,
  Brain,
  Camera,
  Mic,
  BarChart3,
  History,
  Settings,
  User,
  Sparkles,
} from "lucide-react";

import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const menuItems = [
  {
    name: "Dashboard",
    path: "/",
    icon: <LayoutDashboard size={20} />,
  },
  {
    name: "Text Emotion",
    path: "/text",
    icon: <Brain size={20} />,
  },
  {
    name: "Face Emotion",
    path: "/face",
    icon: <Camera size={20} />,
  },
  {
    name: "Voice Emotion",
    path: "/voice",
    icon: <Mic size={20} />,
  },
  {
    name: "Multimodal",
    path: "/multimodal",
    icon: <Sparkles size={20} />,
  },
  {
    name: "Analytics",
    path: "/analytics",
    icon: <BarChart3 size={20} />,
  },
  {
    name: "History",
    path: "/history",
    icon: <History size={20} />,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: <User size={20} />,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: <Settings size={20} />,
  },
];

  return (
    <div className="w-64 h-screen bg-slate-900 text-white flex flex-col">

      <div className="p-6 border-b border-slate-700">
        <h1 className="text-2xl font-bold">
          🧠 Emotion AI
        </h1>

        <p className="text-sm text-slate-400 mt-2">
          Intelligence Platform
        </p>
      </div>

      <div className="flex-1 mt-6">

        {menuItems.map((item) => (

  <NavLink
    key={item.name}
    to={item.path}
    className={({ isActive }) =>
      `flex items-center gap-4 px-6 py-4 transition rounded-lg mx-2 ${
        isActive
          ? "bg-blue-600 text-white"
          : "text-slate-300 hover:bg-slate-800"
      }`
    }
  >
    {item.icon}

    <span>{item.name}</span>

  </NavLink>

))}

      </div>

      <div className="p-6 border-t border-slate-700">

        <p className="text-sm text-slate-400">
          Version 1.0
        </p>

      </div>

    </div>
  );
}