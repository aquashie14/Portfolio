export default function Skills() {
  const skillCategories = [
    {
      title: "Machine Learning & AI",
      skills: [
        { name: "Deep Learning", level: 95 },
        { name: "Neural Networks", level: 92 },
        { name: "Computer Vision", level: 88 },
        { name: "NLP", level: 90 },
        { name: "Reinforcement Learning", level: 85 },
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Data Science & Analytics",
      skills: [
        { name: "Statistical Analysis", level: 95 },
        { name: "Predictive Modeling", level: 92 },
        { name: "Data Visualization", level: 90 },
        { name: "Time Series Analysis", level: 87 },
        { name: "A/B Testing", level: 88 },
      ],
      gradient: "from-cyan-500 to-emerald-500",
    },
    {
      title: "Programming & Tools",
      skills: [
        { name: "Python", level: 98 },
        { name: "R", level: 85 },
        { name: "SQL", level: 90 },
        { name: "TensorFlow/PyTorch", level: 93 },
        { name: "Scikit-learn", level: 95 },
      ],
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      title: "Research & Communication",
      skills: [
        { name: "Research Methodology", level: 94 },
        { name: "Technical Writing", level: 90 },
        { name: "Data Storytelling", level: 92 },
        { name: "Peer Review", level: 88 },
        { name: "Presentation", level: 91 },
      ],
      gradient: "from-teal-500 to-blue-500",
    },
  ];

  const tools = [
    "Python",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "Power BI",
    "SQL",
    "Jupyter",
    "Git & GitHub",
    "BeautifulSoup",
    "LangChain",
    "Latex",
    "Linux(Ubuntu)",
    "Windows OS",
    "Advanced Excel",
    "Bash Scripting",
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A comprehensive toolkit spanning machine learning frameworks,
            statistical methods, and cutting-edge research methodologies.
          </p>
        </div> */}

        {/* <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl shadow-lg border border-slate-200"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                {category.title}
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-700 font-semibold">{skill.name}</span>
                      <span className="text-slate-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div> */}

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 shadow-2xl">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Technologies & Frameworks
          </h3>

          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="group px-5 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white font-medium hover:bg-white/20 hover:border-white/30 transform hover:scale-105 transition-all duration-300 cursor-default"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
