import { useEffect } from "react";

import DashboardCards from "../components/DashboardCards";
import { useEmotion } from "../context/EmotionContext";
import { loadHistory } from "../services/api";
import WelcomeBanner from "../components/dashboard/WelcomeBanner";
import { useAuth } from "../context/AuthContext";
import DashboardStats from "../components/dashboard/DashboardStats";
import QuickActions from "../components/dashboard/QuickActions";

export default function Dashboard() {

  const { history, setHistory } = useEmotion();
const { user } = useAuth();
  useEffect(() => {

    async function fetchHistory() {

      try {

        const data = await loadHistory();

        setHistory(data);

      } catch (error) {

        console.error(error);

      }

    }

    fetchHistory();

  }, [setHistory]);

  return (

    <div className="space-y-8">
      

      <div>

        <h1 className="text-4xl font-bold">
          Emotion Intelligence Platform
        </h1>

        <p className="text-gray-500 mt-2">
          Welcome to your AI Emotion Analysis Dashboard
        </p>

      </div>
      <WelcomeBanner user={user} />
      <DashboardStats />
      <QuickActions />

      <DashboardCards history={history} />
      <DashboardStats />

    </div>

  );

}