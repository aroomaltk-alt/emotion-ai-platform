import { Brain, Camera, Mic, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white overflow-x-hidden">

      {/* ================= NAVBAR ================= */}

      <nav className="sticky top-0 z-50 w-full backdrop-blur-lg bg-slate-950/70 border-b border-white/10">

        <div className="w-full px-8 lg:px-16 xl:px-20 h-20 flex items-center justify-between">

          <div className="flex items-center gap-3">

            <span className="text-4xl">🧠</span>

            <div>

              <h1 className="text-3xl font-bold">
                Emotion AI
              </h1>

              <p className="text-gray-400 text-sm">
                Intelligence Platform
              </p>

            </div>

          </div>

          <button
            onClick={() => navigate("/dashboard")}
            className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 px-8 py-3 rounded-xl font-semibold shadow-lg"
          >
            Launch Dashboard
          </button>

        </div>

      </nav>

      {/* ================= HERO ================= */}

      <section className="min-h-[calc(100vh-80px)] w-full flex items-center">

        <div className="w-full">
          <Hero />
        </div>

      </section>

      {/* ================= FEATURES ================= */}

      <section className="w-full py-24 border-t border-white/10">

        <div className="w-full px-8 lg:px-16 xl:px-20">

          <div className="text-center mb-16">

            <h2 className="text-5xl font-bold">
              Powerful AI Features
            </h2>

            <p className="text-xl text-gray-300 mt-5 max-w-4xl mx-auto">
              Analyze human emotions using Natural Language Processing,
              Computer Vision and Machine Learning.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

            <div className="bg-white/10 border border-white/10 rounded-3xl p-10 hover:border-blue-500 hover:-translate-y-2 transition">

              <Brain
                className="text-blue-400 mb-6"
                size={60}
              />

              <h3 className="text-2xl font-bold">
                Text AI
              </h3>

              <p className="mt-4 text-gray-300">
                Understand emotions from written language using
                Transformer-based Natural Language Processing.
              </p>

            </div>

            <div className="bg-white/10 border border-white/10 rounded-3xl p-10 hover:border-green-500 hover:-translate-y-2 transition">

              <Camera
                className="text-green-400 mb-6"
                size={60}
              />

              <h3 className="text-2xl font-bold">
                Face AI
              </h3>

              <p className="mt-4 text-gray-300">
                Detect facial expressions with deep learning and
                computer vision.
              </p>

            </div>

            <div className="bg-white/10 border border-white/10 rounded-3xl p-10 hover:border-yellow-500 hover:-translate-y-2 transition">

              <Mic
                className="text-yellow-400 mb-6"
                size={60}
              />

              <h3 className="text-2xl font-bold">
                Voice AI
              </h3>

              <p className="mt-4 text-gray-300">
                Recognize emotional speech patterns from audio recordings.
              </p>

            </div>

            <div className="bg-white/10 border border-white/10 rounded-3xl p-10 hover:border-purple-500 hover:-translate-y-2 transition">

              <Sparkles
                className="text-purple-400 mb-6"
                size={60}
              />

              <h3 className="text-2xl font-bold">
                Multimodal AI
              </h3>

              <p className="mt-4 text-gray-300">
                Fuse predictions from Text, Face and Voice models for
                maximum accuracy.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= STATS ================= */}

      <section className="w-full py-24 bg-white/5 border-y border-white/10">

        <div className="w-full px-8 lg:px-16 xl:px-20">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">

            <div>
              <h2 className="text-6xl font-bold text-blue-400">
                98%
              </h2>
              <p className="mt-4 text-gray-300">
                Prediction Accuracy
              </p>
            </div>

            <div>
              <h2 className="text-6xl font-bold text-green-400">
                3
              </h2>
              <p className="mt-4 text-gray-300">
                AI Models
              </p>
            </div>

            <div>
              <h2 className="text-6xl font-bold text-yellow-400">
                PDF
              </h2>
              <p className="mt-4 text-gray-300">
                Smart Reports
              </p>
            </div>

            <div>
              <h2 className="text-6xl font-bold text-purple-400">
                24/7
              </h2>
              <p className="mt-4 text-gray-300">
                Availability
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="py-28 text-center">

        <h2 className="text-5xl font-bold">
          Ready to Experience Emotion AI?
        </h2>

        <p className="mt-6 text-xl text-gray-300">
          Start analyzing emotions using Artificial Intelligence.
        </p>

        <button
          onClick={() => navigate("/dashboard")}
          className="mt-10 bg-blue-600 hover:bg-blue-700 px-10 py-4 rounded-xl text-lg font-semibold shadow-lg transition"
        >
          Launch Dashboard
        </button>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="border-t border-white/10">

        <div className="w-full px-8 lg:px-16 xl:px-20 py-10 text-center">

          <h3 className="text-xl font-bold">
            🧠 Emotion Intelligence Platform
          </h3>

          <p className="text-gray-400 mt-3">
            AI-powered Text, Face, Voice & Multimodal Emotion Recognition
          </p>

          <p className="mt-6 text-sm text-gray-500">
            © 2026 Emotion AI. Built with React, FastAPI and Machine Learning.
          </p>

        </div>

      </footer>

    </div>
  );
}