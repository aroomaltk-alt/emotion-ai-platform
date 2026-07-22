import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function Settings() {

    const { logout } = useAuth();
    const navigate = useNavigate();

    const { darkMode, toggleTheme } = useTheme();
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [analysisNotifications, setAnalysisNotifications] = useState(true);
    const [includeConfidence, setIncludeConfidence] = useState(true);
    const [includeExplanation, setIncludeExplanation] = useState(true);
    const [includeDate, setIncludeDate] = useState(true);
    const [defaultModel, setDefaultModel] = useState("Multimodal");

    const handleLogout = () => {
        logout();
        navigate("/login");
    };
useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}, [darkMode]);
    return (

        <div className="min-h-screen bg-slate-100 p-10">

            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">

                <h1 className="text-4xl font-bold mb-8">
                    ⚙️ Settings
                </h1>

                {/* Appearance */}

                <div className="border-b pb-6 mb-6">

                    <h2 className="text-xl font-semibold mb-4">
                        Appearance
                    </h2>

                    <label className="flex justify-between">

                        <span>Dark Mode</span>

                        <input
  type="checkbox"
  checked={darkMode}
  onChange={toggleTheme}
/>
                            

                    </label>

                </div>

                {/* Notifications */}

                <div className="border-b pb-6 mb-6">

                    <h2 className="text-xl font-semibold mb-4">
                        Notifications
                    </h2>

                    <label className="block mb-3">

                        <input
                            type="checkbox"
                            checked={emailNotifications}
                            onChange={() =>
                                setEmailNotifications(
                                    !emailNotifications
                                )
                            }
                        />

                        <span className="ml-3">
                            Email Notifications
                        </span>

                    </label>

                    <label>

                        <input
                            type="checkbox"
                            checked={analysisNotifications}
                            onChange={() =>
                                setAnalysisNotifications(
                                    !analysisNotifications
                                )
                            }
                        />

                        <span className="ml-3">
                            Analysis Alerts
                        </span>

                    </label>

                </div>

                {/* AI Model */}

                <div className="border-b pb-6 mb-6">

                    <h2 className="text-xl font-semibold mb-4">
                        Default AI Model
                    </h2>

                    <select
                        value={defaultModel}
                        onChange={(e) =>
                            setDefaultModel(
                                e.target.value
                            )
                        }
                        className="border p-3 rounded w-full"
                    >

                        <option>
                            Multimodal
                        </option>

                        <option>
                            Text
                        </option>

                        <option>
                            Face
                        </option>

                        <option>
                            Voice
                        </option>

                    </select>

                </div>

                {/* PDF */}

                <div className="border-b pb-6 mb-6">

                    <h2 className="text-xl font-semibold mb-4">
                        PDF Report
                    </h2>

                    <label className="block mb-3">

                        <input
                            type="checkbox"
                            checked={includeConfidence}
                            onChange={() =>
                                setIncludeConfidence(
                                    !includeConfidence
                                )
                            }
                        />

                        <span className="ml-3">
                            Include Confidence
                        </span>

                    </label>

                    <label className="block mb-3">

                        <input
                            type="checkbox"
                            checked={includeExplanation}
                            onChange={() =>
                                setIncludeExplanation(
                                    !includeExplanation
                                )
                            }
                        />

                        <span className="ml-3">
                            Include AI Explanation
                        </span>

                    </label>

                    <label>

                        <input
                            type="checkbox"
                            checked={includeDate}
                            onChange={() =>
                                setIncludeDate(
                                    !includeDate
                                )
                            }
                        />

                        <span className="ml-3">
                            Include Date & Time
                        </span>

                    </label>

                </div>

                {/* Danger Zone */}

                <div>

                    <h2 className="text-xl font-semibold text-red-600 mb-4">
                        Danger Zone
                    </h2>

                    <button
                        className="bg-red-600 text-white px-5 py-3 rounded-lg hover:bg-red-700"
                    >
                        Clear History
                    </button>

                    <button
                        onClick={handleLogout}
                        className="ml-4 bg-gray-800 text-white px-5 py-3 rounded-lg"
                    >
                        Logout
                    </button>

                </div>

            </div>

        </div>

    );
}