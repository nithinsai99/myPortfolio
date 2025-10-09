import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "./mode-toggle"; // Import the new component

export default function Header() {
  // NOTE: All old theme logic (useState, useEffect) has been removed from this file.
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = ["Projects", "About", "Contact"];

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/30 dark:bg-slate-900/40 border-b border-white/20 dark:border-slate-800"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo + Name */}
          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              className="w-14 h-14 rounded-full bg-white/20 dark:bg-slate-800/40 backdrop-blur-xl border border-white/40 dark:border-slate-700 shadow-lg flex items-center justify-center font-semibold"
            >
              <span className="text-lg font-bold text-slate-900 dark:text-slate-100 drop-shadow">
                MNS
              </span>
            </motion.div>
            <div>
              <div className="text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-100">
                Nithin Sai Mikkilineni
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Software Engineer • Cloud & Systems
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((item) => (
              <motion.a key={item} href={`#${item.toLowerCase()}`} whileHover={{ scale: 1.08, y: -2 }} className="px-3 py-1 rounded-md text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer">
                {item}
              </motion.a>
            ))}
            <motion.a href="#resume" whileHover={{ scale: 1.05 }} className="px-4 py-1.5 bg-slate-800 text-white dark:bg-slate-100 dark:text-slate-900 rounded-full shadow-md hover:bg-slate-900 dark:hover:bg-white transition cursor-pointer">
              Resume
            </motion.a>
            
            {/* Using the new ModeToggle component for desktop */}
            <div className="ml-4 relative">
              <ModeToggle />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.85 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full bg-slate-200/80 dark:bg-slate-800/80"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-24 left-0 w-full z-40 md:hidden"
          >
            <div className="mx-6 p-6 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border border-slate-200 dark:border-slate-800 shadow-xl">
              <nav className="flex flex-col items-center gap-6 text-lg font-medium">
                {navLinks.map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="w-full text-center py-2 rounded-md text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
                    {item}
                  </a>
                ))}
                <a href="#resume" onClick={() => setIsMenuOpen(false)} className="w-full text-center py-2 rounded-md text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
                  Resume
                </a>
                
                {/* Using the new ModeToggle component for mobile */}
                <div className="mt-4 relative">
                  <ModeToggle />
                </div>

              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}