import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="flex items-center justify-between mb-8 bg-white dark:bg-slate-800 rounded-xl shadow-md p-6">

      <div>
        <h1 className="text-4xl font-bold text-slate-800 dark:text-white">
          🧠 Emotion Intelligence Platform
        </h1>

        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Multimodal Emotion Recognition using Text, Face and Voice AI
        </p>
      </div>

      <div className="flex items-center gap-4">

        <ThemeToggle />

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
            A
          </div>

          <div className="hidden md:block">
            <p className="font-semibold dark:text-white">
              Aromal
            </p>

            <p className="text-sm text-gray-500 dark:text-gray-300">
              AI Developer
            </p>
          </div>

        </div>

      </div>

    </header>
  );
}