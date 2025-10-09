import React from "react";
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
    <section id="about" className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-16 text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent"
      >
        👨‍💻 About Me
      </motion.h2>

      <div className="w-full max-w-screen-xl mx-auto px-6">
        {/* Grid Container for the entire timeline */}
        <div className="grid grid-cols-[1fr_auto_1fr] gap-x-8 md:gap-x-12">
          {timeline.map((item, i) => (
            <React.Fragment key={item.id}>
              {/* --- 1. Left Column --- */}
              {item.side === "left" ? (
                <TimelineCard item={item} animation={{ x: -40 }} />
              ) : (
                <div /> /* Empty div to occupy grid cell */
              )}

              {/* --- 2. Center Column (Dot and Line) --- */}
              <TimelineGutter isLastItem={i === timeline.length - 1} item={item} />

              {/* --- 3. Right Column --- */}
              {item.side === "right" ? (
                <TimelineCard item={item} animation={{ x: 40 }} />
              ) : (
                <div /> /* Empty div to occupy grid cell */
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

// Helper component for the content card
const TimelineCard = ({ item, animation }) => (
  <motion.div
    initial={{ opacity: 0, x: animation.x }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className={`pb-12 ${item.side === 'left' ? 'text-right' : 'text-left'}`}
  >
    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
      {item.role}{" "}
      <span className="text-indigo-600 dark:text-indigo-400">@ {item.org}</span>
    </h3>
    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
      {item.period} • {item.location}
    </p>
    <ul className="mt-3 list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
      {item.details.map((d, idx) => (
        <li key={idx}>{d}</li>
      ))}
    </ul>
  </motion.div>
);

// Helper component for the center line and dot
const TimelineGutter = ({ isLastItem, item }) => (
  <div className="relative flex justify-center">
    {/* The Dot */}
    <div className={`w-5 h-5 rounded-full z-10 border-2 border-white dark:border-slate-900 shadow ${item.side === 'left' ? 'bg-indigo-500' : 'bg-purple-500'}`}></div>
    {/* The Line (don't render for the last item) */}
    {!isLastItem && (
      <div className="absolute top-2.5 h-full w-0.5 bg-slate-300 dark:bg-slate-700"></div>
    )}
  </div>
);