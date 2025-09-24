import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const timeline = [
    {
      id: 1,
      side: "right",
      category: "Work",
      role: "IT Support - Student Assistant",
      org: "Texas Tech University Health Sciences Center",
      period: "Feb 2025 – Present",
      location: "Lubbock, TX",
      details: [
        "Resolved 20–30 technical issues per shift, reducing resolution time by 25% for 1,000+ users.",
        "Developed 7 Power BI dashboards enabling 10% faster issue triage.",
        "Automated workflows, cutting manual work by 40%."
      ],
    },
    {
      id: 2,
      side: "left",
      category: "Education",
      role: "M.S. Computer and Information Science",
      org: "Texas Tech University",
      period: "Aug 2024 – May 2026",
      location: "Texas, USA",
      details: [
        "Coursework: Software Foundations, Algorithms, AI, Computational Theory."
      ],
    },
    {
      id: 3,
      side: "right",
      category: "Work",
      role: "Software Engineer Intern – Azure Core",
      org: "Microsoft",
      period: "May 2023 – Jul 2023",
      location: "Remote",
      details: [
        "Engineered gRPC microservices reducing inter-service latency by 40%.",
        "Built real-time log monitoring web app processing 10K+ entries/day.",
        "Delivered production-ready features via Agile sprints and CI/CD."
      ],
    },
    {
      id: 4,
      side: "right",
      category: "Work",
      role: "Student Developer",
      org: "Koneru Lakshmaiah University",
      period: "Aug 2021 – Apr 2023",
      location: "India",
      details: [
        "Directed MERN-based student performance tracking platform adopted by 500+ users.",
        "Optimized backend queries and frontend rendering, reducing load times by 30%.",
        "Implemented RBAC authentication for secure academic data."
      ],
    },
    {
      id: 5,
      side: "left",
      category: "Education",
      role: "B.Tech Computer Science Engineering (Minor in Data Science)",
      org: "KL University",
      period: "Aug 2020 – May 2024",
      location: "India",
      details: [
        "GPA: 9.37/10",
        "Coursework: Operating Systems, Databases, Algorithms, Data Science."
      ],
    },
  ];

  return (
    <section id="about" className="mt-20">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-12 text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent"
      >
        👨‍💻 About Me
      </motion.h2>

      {/* Timeline */}
      <div className="relative max-w-6xl mx-auto">
        {/* Center line */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-slate-300 -translate-x-1/2"></div>

        <div className="space-y-12">
          {timeline.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: item.side === "left" ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex items-start ${
                item.side === "left" ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`w-1/2 px-6 ${
                  item.side === "left" ? "text-right pr-10" : "text-left pl-10"
                }`}
              >
                <h3 className="text-lg font-bold text-slate-900">
                  {item.role}{" "}
                  <span
                    className={`${
                      item.side === "left" ? "text-indigo-600" : "text-purple-600"
                    }`}
                  >
                    @ {item.org}
                  </span>
                </h3>
                <p className="text-sm text-slate-500">
                  {item.period} • {item.location}
                </p>
                <ul className="mt-2 list-disc list-inside text-slate-700 space-y-1">
                  {item.details.map((d, idx) => (
                    <li key={idx}>{d}</li>
                  ))}
                </ul>
              </div>

              {/* Dot marker */}
              <span
                className={`absolute left-1/2 top-2 w-5 h-5 rounded-full ${
                  item.side === "left" ? "bg-indigo-500" : "bg-purple-500"
                } border-2 border-white shadow -translate-x-1/2`}
              ></span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
