import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2, Zap } from 'lucide-react';

const categoryColors = {
  cyan: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
  orange: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  green: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  purple: 'bg-violet-500/20 text-violet-400 border-violet-500/30',
  yellow: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  pink: 'bg-pink-500/20 text-pink-400 border-pink-500/30',
};

export default function ProjectCard({ project, index }) {
  const [imgIdx, setImgIdx] = useState(0);
  const [visible, setVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const prev = () => setImgIdx((i) => (i - 1 + project.images.length) % project.images.length);
  const next = () => setImgIdx((i) => (i + 1) % project.images.length);

  const catColorClass = categoryColors[project.categoryColor] || categoryColors.cyan;
  const isEven = index % 2 === 0;

  return (
    <div
      ref={cardRef}
      className={`group relative flex flex-col lg:flex-row ${
        isEven ? '' : 'lg:flex-row-reverse'
      } gap-0 rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03] hover:border-white/20 transition-all duration-700 hover:shadow-2xl ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{
        transitionDelay: `${index * 100}ms`,
        boxShadow: visible ? `0 0 60px ${project.glowColor}` : 'none',
      }}
    >
      {/* Gradient accent strip */}
      <div
        className={`absolute top-0 ${isEven ? 'left-0' : 'right-0'} w-1 h-full bg-gradient-to-b ${project.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-500`}
      />

      {/* Image Section */}
      <div className="relative lg:w-1/2 h-64 lg:h-auto overflow-hidden bg-black/30">
        <img
          src={project.images[imgIdx]}
          alt={`${project.title} screenshot ${imgIdx + 1}`}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />

        {/* Image overlay gradient */}
        <div className={`absolute inset-0 bg-gradient-to-${isEven ? 'r' : 'l'} from-transparent to-[#050508]/60 pointer-events-none`} />

        {/* Project number badge */}
        <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white font-black text-lg">
          {project.id}
        </div>

        {/* Image navigation */}
        {project.images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-black/60 backdrop-blur-sm border border-white/10 text-white hover:bg-black/80 transition-all duration-200 hover:scale-110"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-black/60 backdrop-blur-sm border border-white/10 text-white hover:bg-black/80 transition-all duration-200 hover:scale-110"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {project.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setImgIdx(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === imgIdx
                      ? 'w-5 h-1.5 bg-white'
                      : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Content Section */}
      <div className="relative flex flex-col justify-center p-8 lg:p-10 lg:w-1/2">
        {/* Category badge */}
        <div className="flex items-center gap-3 mb-4">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold ${catColorClass}`}
          >
            <Zap className="w-3 h-3" />
            {project.category}
          </span>
          <span className="text-2xl">{project.icon}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-tight group-hover:text-cyan-50 transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Highlights */}
        <ul className="flex flex-col gap-2 mb-6">
          {project.highlights.map((h, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              {h}
            </li>
          ))}
        </ul>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-xs font-medium hover:bg-white/10 hover:text-white transition-colors duration-200"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
