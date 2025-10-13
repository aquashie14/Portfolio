import { useState } from "react";
import { Github, ChevronRight } from "lucide-react";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    "all",
    "artificial-intelligence",
    "data-science & analytics",
    "research",
  ];

  const projects = [
    {
      title: "Discord Bot",
      category: "artificial-intelligence",
      description:
        "Developed a Discord Bot that leverages LLMs, webscrapping, and retrieval-augmented generation to provide real-time responses.",
      tags: [
        "LLM",
        "Discord",
        "Webscrapping",
        "Retrieval-Augmented Generation",
      ],
      gradient: "from-blue-500 to-cyan-500",
      link: "https://github.com/aquashie14/Discord_bot",
      github: "https://github.com/aquashie14/Discord_bot",
    },
    {
      title: "Web Scraping & Data Extraction Tool",
      category: "data-science & analytics",
      description: "Built a tool for extracting data from various web sources.",
      tags: ["Python", "BeautifulSoup"],
      gradient: "from-cyan-500 to-emerald-500",
      link: "https://github.com/aquashie14/Webscrapping",
      github: "https://github.com/aquashie14/Webscrapping",
    },
    {
      title: "The Nahara Project-Medical Co-pilot",
      category: "research",
      description:
        "Developed a Medical Co-pilot using LLMs and NLP to assist healthcare professionals in clinical decision-making.",
      tags: [
        "NLP",
        "LLMs",
        "Transformers",
        "Retrieval-Augmented Generation",
        "Research",
      ],
      gradient: "from-emerald-500 to-teal-500",
      link: "#",
      github: "#",
    },
    {
      title: "Small Business Performance Analysis in Ghana",
      category: "data-science & analytics",
      description:
        "Conducted an analysis of small business performance in Ghana focusing on key performance indicators and growth factors for SMEs.",
      tags: ["Python", "Pandas", "Data Analysis", "Research", "Matplotlib"],
      gradient: "from-teal-500 to-blue-500",
      link: "https://github.com/aquashie14/Small_Business_Performance_Analysis_in_Ghana/blob/main/Noteboooks/SBPG.ipynb",
      github:
        "https://github.com/aquashie14/Small_Business_Performance_Analysis_in_Ghana/blob/main/Noteboooks/SBPG.ipynb",
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-gradient-to-br from-slate-50 to-slate-100"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Featured Projects & Research
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A selection of my work showcasing practical applications and
            theoretical contributions in AI, machine learning, and data science.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-xl font-semibold capitalize transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/50"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat.replace("-", " ")}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-slate-100 text-slate-700 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.link}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                  >
                    View Project
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href={project.github}
                    className="text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
