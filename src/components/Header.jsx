import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "./mode-toggle"; // Assuming this component is styled

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { title: "Projects", href: "#projects" },
    { title: "About", href: "#about" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full z-50 
                   bg-white/60 dark:bg-slate-900/60 backdrop-blur-lg 
                   border-b border-white/30 dark:border-slate-700/50"
      >
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 py-3 flex items-center justify-between">
          {/* Logo + Name */}
          <a href="#hero" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.1, rotate: -15 }}
              className="w-12 h-12 rounded-full bg-white/70 dark:bg-slate-800/70 backdrop-blur-md 
                         border border-white/40 dark:border-slate-700 shadow-lg 
                         flex items-center justify-center font-bold"
            >
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
                NS
              </span>
            </motion.div>
            <div>
              <div className="text-lg font-bold tracking-tight text-slate-900 dark:text-slate-100 
                             group-hover:bg-gradient-to-r from-indigo-600 to-purple-500 group-hover:bg-clip-text group-hover:text-transparent transition-colors duration-300">
                Nithin Sai
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Software & Cloud Engineer
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2 text-sm font-medium">
            {navLinks.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="px-4 py-2 rounded-full text-slate-700 dark:text-slate-300 
                           hover:bg-white/50 dark:hover:bg-slate-800/50
                           hover:text-slate-900 dark:hover:text-white transition-colors duration-300"
              >
                {item.title}
              </a>
            ))}
            <a
              href="https://drive.google.com/file/d/1Mu8Lh3627Txiepnd1mRxGd947EZegNdI/view?usp=sharing" // Assuming you have a resume file or section
              className="ml-4 px-5 py-2 rounded-xl text-black font-semibold shadow-lg 
                         bg-gradient-to-r from-blue-100 to-cyan-200
                         hover:scale-105 hover:from-blue-200 hover:to-cyan-300 transition-transform 
                         dark:bg-gradient-to-r dark:from-indigo-700 dark:to-purple-700 dark:text-white"
            >
              Resume
            </a>
            <div className="ml-2">
              <ModeToggle />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.85 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full bg-white/70 dark:bg-slate-800/70"
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="fixed top-[70px] inset-x-0 z-40 md:hidden"
          >
            <div className="mx-6 p-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl 
                        border border-slate-200 dark:border-slate-800 shadow-xl">
              <nav className="flex flex-col items-center gap-2 text-base font-medium">
                {[...navLinks, { title: "Resume", href: "#resume" }].map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full text-center py-3 rounded-lg text-slate-800 dark:text-slate-200 
                               hover:bg-indigo-100 dark:hover:bg-slate-800/70 transition-colors"
                  >
                    {item.title}
                  </a>
                ))}
                <div className="mt-4">
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