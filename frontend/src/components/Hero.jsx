import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="text-center py-28 px-6">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl md:text-7xl font-extrabold"
      >
        🧠 Emotion Intelligence Platform
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-8 text-xl text-gray-300 max-w-3xl mx-auto"
      >
        AI-powered multimodal emotion recognition using
        Text, Face and Voice Intelligence.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-10 flex justify-center gap-5"
      >
        <button
          onClick={() => navigate("/dashboard")}
          className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold"
        >
          Launch Dashboard
        </button>

       
      </motion.div>
    </section>
  );
}