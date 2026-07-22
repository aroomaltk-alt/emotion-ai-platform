import { useState } from "react";
import {
  Moon,
  Bell,
  Lock,
  User,
  LogOut,
} from "lucide-react";

import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function AccountSettings() {

  const { logout } = useAuth();
  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (

    <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">

      <h2 className="text-2xl font-bold mb-6">
        ⚙️ Account Settings
      </h2>

      <div className="space-y-5">

        {/* Dark Mode */}

        <div className="flex justify-between items-center">

          <div className="flex items-center gap-3">

            <Moon />

            <span>Dark Mode</span>

          </div>

          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />

        </div>

        {/* Notifications */}

        <div className="flex justify-between items-center">

          <div className="flex items-center gap-3">

            <Bell />

            <span>Email Notifications</span>

          </div>

          <input
            type="checkbox"
            checked={notifications}
            onChange={() =>
              setNotifications(!notifications)
            }
          />

        </div>

        {/* Change Password */}

        <button
          className="w-full flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl"
        >
          <Lock size={18} />

          Change Password

        </button>

        {/* Edit Profile */}

        <button
          className="w-full flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl"
        >
          <User size={18} />

          Edit Profile

        </button>

        {/* Logout */}

        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl"
        >
          <LogOut size={18} />

          Logout

        </button>

      </div>

    </div>

  );

}