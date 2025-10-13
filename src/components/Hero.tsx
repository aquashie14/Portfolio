import { ChevronDown } from "lucide-react";
// import {Profile} from ""

export default function Hero() {
  const scrollToSection = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-8">
          {/* Text column */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Ama Darkoah Quashie
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 mt-2 text-2xl md:text-3xl">
                AI, ML Researcher, Data Scientist & Analyst
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
              Transforming complex data into actionable insights through
              advanced machine learning, statistical analysis, and innovative
              research methodologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
              <button
                onClick={scrollToSection}
                className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold shadow-xl shadow-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/60 transform hover:-translate-y-1 transition-all duration-300"
              >
                Explore My Work
                <ChevronDown className="inline-block ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </button>

              <a
                href="#contact"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold border-2 border-white/20 hover:bg-white/20 hover:border-white/30 transform hover:-translate-y-1 transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Image column */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <div
              className="relative w-106 h-106 md:w-122 md:h-122 rounded-full 
            // overflow-hidden  shadow-2xl ring-2 ring-white/10 bg-white/5 flex items-center justify-center
            "
            >
              <img
                src="/assets/profile.jpeg"
                alt="Ama Darkoah Quashie"
                loading="lazy"
                className="w-full h-full  object-cover"
                onError={(e) => {
                  // hide broken image and show initials fallback
                  const target = e.currentTarget as HTMLImageElement;
                  target.style.display = "none";
                  const parent = target.parentElement;
                  if (parent) {
                    parent.querySelector<HTMLDivElement>(
                      ".initials"
                    )!.style.display = "flex";
                  }
                }}
              />

              <div className="initials absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 text-white text-4xl md:text-5xl font-bold">
                BG
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white/50" />
      </div>
    </section>
  );
}
