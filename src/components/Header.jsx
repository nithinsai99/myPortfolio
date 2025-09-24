import { Mail, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/30 border-b border-white/20"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo + Name */}
        <div className="flex items-center gap-4">
          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-xl border border-white/40 shadow-lg flex items-center justify-center font-semibold"
          >
            <span className="text-lg font-bold text-slate-900 drop-shadow">
              MNS
            </span>
          </motion.div>
          <div>
            <div className="text-lg font-semibold tracking-tight">
              Nithin Sai Mikkilineni
            </div>
            <div className="text-sm text-slate-600">
              Software Engineer • Cloud & Systems
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          {["Projects", "About", "Contact"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="px-3 py-1 rounded-md text-slate-700 hover:text-slate-900 transition-colors cursor-pointer"
            >
              {item}
            </motion.a>
          ))}

          <motion.a
            href="#resume"
            whileHover={{ scale: 1.44 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="px-4 py-1.5 bg-slate-800 text-white rounded-full shadow-md hover:bg-slate-900 transition cursor-pointer"
          >
            Resume
          </motion.a>
        </nav>
      </div>
    </motion.header>
  );
}
