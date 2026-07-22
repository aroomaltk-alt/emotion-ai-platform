import { useEffect } from "react";

import { useEmotion } from "../context/EmotionContext";

import { loadHistory } from "../services/api";

import AnalyticsChart from "../components/AnalyticsChart";

export default function Analytics() {

  const {
    history,
    setHistory,
  } = useEmotion();

  useEffect(() => {

    async function fetchHistory() {

      const data = await loadHistory();

      setHistory(data);

    }

    fetchHistory();

  }, []);

  return (

    <div className="space-y-8">

      <h1 className="text-4xl font-bold">

        Analytics

      </h1>

      <AnalyticsChart
        history={history}
      />

    </div>

  );

}