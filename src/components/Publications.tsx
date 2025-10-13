import { BookOpen, Calendar, Users, ExternalLink } from 'lucide-react';

export default function Publications() {
  const publications = [
    {
      title: 'Novel Attention Mechanisms for Low-Resource Neural Machine Translation',
      authors: 'Your Name, Co-Author A., Co-Author B.',
      venue: 'International Conference on Machine Learning (ICML)',
      year: '2024',
      type: 'Conference',
      abstract: 'Introducing a novel attention mechanism that significantly improves translation quality for low-resource language pairs.',
      link: '#',
      citations: 45,
    },
    {
      title: 'Deep Learning Approaches for Medical Image Segmentation: A Comprehensive Survey',
      authors: 'Your Name, Research Team',
      venue: 'IEEE Transactions on Medical Imaging',
      year: '2024',
      type: 'Journal',
      abstract: 'A comprehensive review of state-of-the-art deep learning methods for medical image segmentation tasks.',
      link: '#',
      citations: 127,
    },
    {
      title: 'Interpretable Machine Learning for Financial Risk Assessment',
      authors: 'Your Name, Financial AI Lab',
      venue: 'Journal of Financial Data Science',
      year: '2023',
      type: 'Journal',
      abstract: 'Developing interpretable ML models for credit risk assessment while maintaining high predictive accuracy.',
      link: '#',
      citations: 83,
    },
    {
      title: 'Reinforcement Learning in Dynamic Environments: A Meta-Learning Approach',
      authors: 'Your Name, Robotics Lab Team',
      venue: 'NeurIPS (Neural Information Processing Systems)',
      year: '2023',
      type: 'Conference',
      abstract: 'Meta-learning framework enabling rapid adaptation of RL agents to changing environmental dynamics.',
      link: '#',
      citations: 62,
    },
    {
      title: 'Causal Inference Methods for Observational Data Analysis',
      authors: 'Your Name, Statistics Department',
      venue: 'Journal of the American Statistical Association',
      year: '2023',
      type: 'Journal',
      abstract: 'Novel approaches to causal inference that address confounding in complex observational datasets.',
      link: '#',
      citations: 91,
    },
  ];

  return (
    <section id="publications" className="py-24 px-6 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Publications & Research
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Peer-reviewed publications contributing to the advancement of artificial intelligence,
            machine learning, and data science.
          </p>
        </div>

        <div className="grid gap-6">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-slate-200"
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className={`px-4 py-1.5 text-sm font-semibold rounded-lg ${
                    pub.type === 'Conference'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-emerald-100 text-emerald-700'
                  }`}>
                    {pub.type}
                  </span>
                  <span className="px-4 py-1.5 text-sm font-semibold bg-slate-100 text-slate-700 rounded-lg">
                    {pub.citations} Citations
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {pub.title}
                </h3>

                <div className="flex flex-wrap items-center gap-4 mb-4 text-slate-600">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">{pub.authors}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{pub.year}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4 text-slate-700">
                  <BookOpen className="w-4 h-4" />
                  <span className="text-sm font-medium">{pub.venue}</span>
                </div>

                <p className="text-slate-600 leading-relaxed mb-6">
                  {pub.abstract}
                </p>

                <a
                  href={pub.link}
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors group"
                >
                  Read Publication
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold shadow-xl shadow-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/60 transform hover:-translate-y-1 transition-all duration-300"
          >
            View All Publications
          </a>
        </div>
      </div>
    </section>
  );
}
