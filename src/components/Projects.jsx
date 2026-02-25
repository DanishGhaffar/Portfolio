import { useRef, useEffect, useState } from 'react';
import { Layers, BrainCircuit, Smartphone, Globe, BarChart3, Search } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const categoryIcons = {
  'Computer Vision': BrainCircuit,
  'Mobile AI App': Smartphone,
  'Full-Stack App': Globe,
  'Deep Learning': BarChart3,
  'AI Web App': Search,
};

export default function Projects() {
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHeaderVisible(true); },
      { threshold: 0.3 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="relative py-28 bg-[#050508] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div
          ref={headerRef}
          className={`text-center mb-20 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-sm font-medium mb-6">
            <Layers className="w-4 h-4" />
            Featured Work
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Projects That{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              Deliver Results
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            From satellite-based computer vision to real-time AI mobile apps — here are six projects
            spanning multiple AI/ML domains, each solving a real-world challenge.
          </p>

          {/* Domain tags */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            {['Computer Vision', 'Mobile AI', 'Deep Learning', 'Real-Time Apps', 'NLP/Translation', 'Time Series'].map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-gray-400 text-sm font-medium hover:border-cyan-500/30 hover:text-cyan-400 hover:bg-cyan-500/5 transition-all duration-300 cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Project cards */}
        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
