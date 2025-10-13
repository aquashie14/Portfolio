import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      company: "Generation Ghana",
      role: "Data Analyst Trainee",
      start: "August 2025",
      end: "Present",
      location: "Remote",
      bullets: [
        "Created and presented data visualizations using Tableau and Power BI, resulting in better presentation skills and a deeper understanding of data storytelling.",
        "Demonstrated strong teamwork and problem-solving skills through group projects, resulting in successful project completion and achievement of team goals.",
        "Developed confidence in presenting complex data insights to stakeholders, leading to enhanced communication skills and increased self-assurance in professional settings.",
        "Thrived in high-pressure environments, collaborating with individuals from various backgrounds, fostering a cooperative and productive work environment even in challenging situations.",
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      company: "Relu Interactives",
      role: "AI & ML Researcher",
      start: "2020",
      end: "2023",
      location: "Adenta, Accra",
      bullets: [
        "Engineered vector databases and embeddings for PDF datasets, improving internal data retrieval speed and accuracy.",
        "Designed and deployed a role-based Q&A chatbot, streamlining workflows and reducing repetitive staff queries.",
        "Prototyped AI solutions using LangChain/LangGraph with RAG architecture, advancing company AI integration efforts.",
        "Contributed to LLM research initiatives, providing insights that shaped company AI strategy.",
      ],
      gradient: "from-cyan-500 to-emerald-500",
    },
    {
      company: "Kwame Nkrumah University of Science and Technology (KNUST)",
      role: "Teaching & Research Assistant",
      start: "November 2023",
      end: "August 2024",
      location: "Kumasi, Ghana",
      bullets: [
        "Delivered lectures and tutorials in advanced mathematics courses, improving student comprehension and performance.",
        "Evaluated assessments and proctored exams, ensuring fairness, transparency, and academic integrity.",
        "Extracted, cleaned, and modeled complex datasets, enhancing forecasting accuracy for research applications.",
        "Initiated weekly capstone progress presentations, strengthening accountability and timely project completion.",
      ],
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      company: "The Nahara Project",
      role: "Intern,AI Research Lead",
      start: "May 2023",
      end: "August 2023",
      location: "Remote",
      bullets: [
        "Implemented and fine-tuned Falcon 7B LLM on curated clinical datasets, improving diagnostic accuracy and clinical decision support.",
        "Conducted comprehensive literature reviews to benchmark AI models, integrating global best practices into project design.",
        "Developed and optimized algorithms tailored to healthcare challenges, significantly enhancing model reliability for clinicians.",
        "Collaborated with data scientists and healthcare professionals, ensuring the model’s real-world applicability and effectiveness.",
        "Adapted and customized the Nahara AI model to clinician needs, strengthening its impact in healthcare delivery.",
      ],
      gradient: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-2">
              Experience
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl">
              Roles, projects and impact — a curated timeline showing where I
              shipped value and what I learned along the way.
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex items-center gap-4">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-white to-white/70 shadow">
              <Briefcase className="w-5 h-5 text-slate-700" />
              <span className="text-sm text-slate-700 font-medium">
                1+ years industry
              </span>
            </div>

            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/60 shadow">
              <Calendar className="w-5 h-5 text-slate-700" />
              <span className="text-sm text-slate-700 font-medium">
                Publications
              </span>
            </div>
          </div>
        </div>

        <div className="relative">
          {/* vertical line for timeline on md+ */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-slate-200 to-slate-300" />

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <article
                key={idx}
                className="relative md:pl-20 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="absolute md:left-0 md:top-6 -left-3 top-6">
                  <div
                    className={`flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${exp.gradient} text-white shadow-lg`}
                  >
                    <MapPin className="w-5 h-5" />
                  </div>
                </div>

                <header className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-slate-500">
                      {exp.company} •{" "}
                      <span className="italic">{exp.location}</span>
                    </p>
                  </div>

                  <time className="mt-3 md:mt-0 inline-flex items-center gap-2 text-sm text-slate-500">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    <span className="font-medium">
                      {exp.start} — {exp.end}
                    </span>
                  </time>
                </header>

                <p className="text-slate-600 mb-4">{exp.summary}</p>

                <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm">
                    Python
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm">
                    Research
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm"></span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
