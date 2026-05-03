import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "High-Performance Distributed Cache System",
      description:
        "Designed a distributed caching layer using ASP.NET Core and Redis to handle high-throughput requests, with custom middleware for throttling and logging using Serilog and Seq. Deployed microservices via Docker.",
      tech: [".NET 8", "Redis", "Docker", "Seq", "Serilog"],
      github: "https://github.com/nithinsai99/distributed-cache-system.git",
      demo: "",
    },
    {
      id: 2,
      title: "E-Commerce Microservices Platform",
      description:
        "Built an event-driven architecture using RabbitMQ for Order, Inventory, and Payment services. Used gRPC for low-latency inter-service communication, achieving 40% faster performance compared to REST.",
      tech: ["C#", "gRPC", "RabbitMQ", "Microservices", "Event-Driven"],
      github: "",
      demo: "",
    },
    {
      id: 3,
      title: "Generative AI-Powered Global Weather Platform",
      description:
        "AI-powered weather web app built with Django, integrating Google Generative AI for contextual summaries across 1,000+ cities. Optimized with async APIs for 35% faster responses.",
      tech: ["Django", "Google Generative AI", "OpenWeather API", "Google Image Search"],
      github: "https://github.com/nithinsai99/weather_app.git",
      demo: "https://github.com/nithinsai99/weather_app.git",
    },
    {
      id: 4,
      title: "Real-Time Criminal Face Detection Web App",
      description:
        "Python + OpenCV-based real-time facial detection system with optimized pipelines for high-throughput video streams, improving detection speed and accuracy.",
      tech: ["Python", "OpenCV", "Computer Vision"],
      github: "https://github.com/nithinsai2002/engage-microsoft.git",
      demo: "",
    },
    {
      id: 5,
      title: "Azure gRPC Microservices (Microsoft Internship)",
      description:
        "Engineered gRPC microservices in Azure Core reducing inter-service latency by 40%. Built a real-time log monitoring web app processing 10K+ entries/day.",
      tech: ["C#", "gRPC", "Azure", "CI/CD", "Microservices"],
      github: "https://drive.google.com/file/d/1C2K4dSEp_JeKKZ1EYDFpQBu864nm46ig/view?usp=sharing",
      demo: "",
    },
    {
      id: 6,
      title: "Forecast AI – Smarter Energy Forecasting for a Renewable Future",
      description:
        "Developed GridBids™ platform for renewable energy using physics-informed machine learning to forecast solar and wind generation, battery cycles, and market prices. Achieved 10% higher accuracy than state-of-the-art models, enabling operators to maximize revenue and reduce grid risk. (NDA)",
      tech: ["Python", "Random Forest", "Django", "SQL Server", "Machine Learning"],
      github: "",
      demo: "",
    },
  ];

  const skills = [
    "C++",
    "C#",
    "Python",
    ".NET Core",
    "Docker",
    "Algorithms",
    "Kubernetes",
    "AWS / Azure",
    "SQL",
    "TypeScript",
    "Microservices",
  ];

  return (
    <div className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200">
      <Header />
      <main>
        <Hero skills={skills} />
        <Projects projects={projects} />
        <About />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}