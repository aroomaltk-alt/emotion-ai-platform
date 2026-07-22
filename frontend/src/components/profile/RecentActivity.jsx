import {
  LogIn,
  FileText,
  Mic,
  Smile,
  MessageSquare,
} from "lucide-react";

const activities = [
  {
    icon: LogIn,
    title: "Logged In",
    time: "Just now",
  },
  {
    icon: MessageSquare,
    title: "Text Analysis",
    time: "5 min ago",
  },
  {
    icon: Smile,
    title: "Face Analysis",
    time: "15 min ago",
  },
  {
    icon: Mic,
    title: "Voice Analysis",
    time: "25 min ago",
  },
  {
    icon: FileText,
    title: "PDF Report Generated",
    time: "1 hour ago",
  },
];

export default function RecentActivity() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">
      <h2 className="text-2xl font-bold mb-6">
        🕒 Recent Activity
      </h2>

      <div className="space-y-4">
        {activities.map((activity, index) => {
          const Icon = activity.icon;

          return (
            <div
              key={index}
              className="flex items-center justify-between border-b pb-3 last:border-b-0"
            >
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
                  <Icon size={20} />
                </div>

                <div>
                  <p className="font-semibold">
                    {activity.title}
                  </p>

                  <p className="text-sm text-gray-500">
                    {activity.time}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}