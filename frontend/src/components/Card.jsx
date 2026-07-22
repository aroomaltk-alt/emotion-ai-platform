import { motion } from "framer-motion";

export default function Card({ title, children, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`
        rounded-2xl
        bg-white/80
        dark:bg-slate-800/80
        backdrop-blur-lg
        shadow-xl
        border
        border-gray-200
        dark:border-slate-700
        p-6
        ${className}
      `}
    >
      {title && (
        <h2 className="text-xl font-bold mb-4 dark:text-white">
          {title}
        </h2>
      )}

      {children}
    </motion.div>
  );
}