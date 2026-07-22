import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Bar,
} from "recharts";

const COLORS = [
  "#3B82F6",
  "#22C55E",
  "#EF4444",
  "#FACC15",
  "#A855F7",
  "#6B7280",
];

export default function AnalyticsPanel({ history }) {

  const emotionCount = {};

  history.forEach((item) => {

    const emotion = item[2];

    emotionCount[emotion] =
      (emotionCount[emotion] || 0) + 1;

  });

  const data = Object.keys(emotionCount).map((key) => ({
    emotion: key,
    count: emotionCount[key],
  }));

  return (

    <div className="bg-white rounded-xl shadow-md p-6 mt-6">

      <h2 className="text-xl font-bold mb-6">
        Emotion Analytics
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <div className="h-80">

          <ResponsiveContainer>

            <PieChart>

              <Pie
                data={data}
                dataKey="count"
                nameKey="emotion"
                outerRadius={110}
              >

                {data.map((entry, index) => (

                  <Cell
                    key={index}
                    fill={
                      COLORS[
                        index % COLORS.length
                      ]
                    }
                  />

                ))}

              </Pie>

              <Tooltip />

            </PieChart>

          </ResponsiveContainer>

        </div>

        <div className="h-80">

          <ResponsiveContainer>

            <BarChart data={data}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="emotion" />

              <YAxis />

              <Tooltip />

              <Bar
                dataKey="count"
                fill="#3B82F6"
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

      </div>

    </div>

  );

}