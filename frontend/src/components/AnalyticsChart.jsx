import Card from "./Card";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const COLORS = [
  "#3B82F6",
  "#22C55E",
  "#F97316",
  "#EF4444",
  "#8B5CF6",
];

export default function AnalyticsChart({ history = [] }) {

  const counts = {};

  history.forEach((item) => {
    const emotion = item[2];

    counts[emotion] = (counts[emotion] || 0) + 1;
  });

  const data = Object.keys(counts).map((emotion) => ({
    name: emotion,
    value: counts[emotion],
  }));

  return (
    <Card title="Emotion Distribution">

      <div style={{ width: "100%", height: 350 }}>

        <ResponsiveContainer>

          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={120}
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />

            <Legend />

          </PieChart>

        </ResponsiveContainer>

      </div>

    </Card>
  );
}