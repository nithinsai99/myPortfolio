import { Mail } from "lucide-react";
import { FiGithub, FiLinkedin } from 'react-icons/fi';

export default function Footer() {
  const socialLinks = [
    { icon: <FiGithub size={20} />, href: "https://github.com/nithinsai99", label: "GitHub" },
    { icon: <FiLinkedin size={20} />, href: "https://www.linkedin.com/in/nithinsai-m", label: "LinkedIn" },
    { icon: <Mail size={20} />, href: "mailto:mikkilineninithinsai9@gmail.com", label: "Email" },
  ];

  return (
    <footer className="w-full border-t border-slate-200/50 dark:border-slate-800/50 py-8">
      <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-600 dark:text-slate-400 text-center md:text-left">
          © {new Date().getFullYear()} - Designed & Built by{" "}
          <span className="font-semibold bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
            Nithin Sai Mikkilineni
          </span>
        </p>

        <div className="flex items-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-label={link.label}
              className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
