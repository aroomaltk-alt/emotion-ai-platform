export default function WelcomeBanner({ user }) {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-8 text-white shadow-lg">
      <h1 className="text-4xl font-bold">
        Welcome back, {user?.username || "User"} 👋
      </h1>

      <p className="mt-3 text-lg text-blue-100">
        Your Emotion Intelligence Dashboard is ready.
      </p>
    </div>
  );
}