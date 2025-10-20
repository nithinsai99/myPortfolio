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
      title: "Generative AI-Powered Global Weather Platform",
      description:
        "AI-powered weather web app built with Django, integrating Google Generative AI for contextual summaries across 1,000+ cities. Optimized with async APIs for 35% faster responses.",
      tech: ["Django", "Google Generative AI", "OpenWeather API", "Google Image Search"],
      github: "https://github.com/nithinsai99/weather_app.git",
      demo: "https://github.com/nithinsai99/weather_app.git",

    },
    {
      id: 2,
      title: "Real-Time Criminal Face Detection Web App",
      description:
        "Python + OpenCV-based real-time facial detection system with optimized pipelines for high-throughput video streams, improving detection speed and accuracy.",
      tech: ["Python", "OpenCV", "Computer Vision"],
      github: "https://github.com/nithinsai2002/engage-microsoft.git",
      demo: "https://github.com/nithinsai99/weather_app.git",
    },
    {
      id: 3,
      title: "Azure gRPC Microservices (Microsoft Internship)",
      description:
        "Engineered gRPC microservices in Azure Core reducing inter-service latency by 40%. Built a real-time log monitoring web app processing 10K+ entries/day.",
      tech: ["C#", "gRPC", "Azure", "CI/CD", "Microservices"],
      github: "https://drive.google.com/file/d/1C2K4dSEp_JeKKZ1EYDFpQBu864nm46ig/view?usp=sharing",
      demo: "https://github.com/nithinsai99/weather_app.git",
    },
    {
      id: 4,
      title: "Forecast AI – Smarter Energy Forecasting for a Renewable Future",
      description:
        "Developed GridBids™ platform for renewable enegy dept using physics-informed machine learning to forecast solar and wind generation, battery cycles, and market prices. Achieved 10% higher accuracy than state-of-the-art models, enabling renewable operators to maximize revenue and reduce grid risk.",
      tech: ["Python", "Random Forest", "Django", "SQL Server", "Machine Learning"],
      github: "https://gray-bush-042775b0f.1.azurestaticapps.net/",
      demo: "https://github.com/nithinsai99/forecast_ai.git",
    }
    ,
  ];

  const skills = [
    "C++", "JavaScript", "Python", "Postgres / MySQL",
    "Docker / Kubernetes", "AWS / Azure", "Restful APIs", "Algorithm Design", "System Design"
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