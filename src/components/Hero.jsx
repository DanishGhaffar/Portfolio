import { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Sparkles, ExternalLink } from 'lucide-react';
import { stats } from '../data/projects';

const roles = [
  'AI & ML Engineer',
  'Computer Vision Expert',
  'Deep Learning Engineer',
  'Mobile AI Developer',
  'Full-Stack Developer',
];

const skills = [
  'Python', 'TensorFlow', 'PyTorch', 'YOLOv8', 'React Native',
  'OpenCV', 'WebRTC', 'Flutter', 'Node.js', 'TFT Transformer',
  'PoseNet', 'TinyVLM', 'Socket.IO', 'Firebase', 'Google Maps API',
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);
  const [visible, setVisible] = useState(false);

  // Fade-in on mount
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Typewriter
  useEffect(() => {
    const role = roles[roleIdx];
    if (typing) {
      if (displayed.length < role.length) {
        const t = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 70);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2000);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
        return () => clearTimeout(t);
      } else {
        setRoleIdx((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIdx]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#050508]"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Floating skill pills */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block">
        {skills.map((skill, i) => (
          <div
            key={skill}
            className="absolute px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-gray-400 text-xs font-medium backdrop-blur-sm"
            style={{
              left: `${5 + (i % 5) * 19}%`,
              top: `${10 + Math.floor(i / 5) * 25}%`,
              animation: `float ${6 + (i % 4)}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
              opacity: 0.4 + (i % 3) * 0.15,
            }}
          >
            {skill}
          </div>
        ))}
      </div>

      {/* Main content */}
      <div
        className={`relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-16 transition-all duration-1000 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            Available for freelance work
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-6">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white leading-tight mb-4">
            Building{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
              Intelligent
            </span>
            <br />
            Systems That Work
          </h1>

          <div className="text-2xl md:text-3xl font-semibold text-gray-300 h-10 flex items-center justify-center gap-3">
            <span className="text-cyan-400">{'<'}</span>
            <span className="min-w-[280px] text-left">
              {displayed}
              <span className="inline-block w-0.5 h-7 bg-cyan-400 ml-1 animate-pulse align-middle" />
            </span>
            <span className="text-cyan-400">{'/>'}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-center text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          C-Square Lab build AI-powered solutions — from{' '}
          <span className="text-cyan-300 font-medium">computer vision models</span> and{' '}
          <span className="text-violet-300 font-medium">deep learning systems</span> to{' '}
          <span className="text-blue-300 font-medium">full-stack mobile apps</span>{' '}
          — delivering real-world impact across every project.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={() => scrollTo('projects')}
            className="flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold text-base hover:shadow-2xl hover:shadow-cyan-500/30 hover:scale-105 transition-all duration-300"
          >
            <Sparkles className="w-5 h-5" />
            View My Work
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="flex items-center gap-2 px-8 py-4 rounded-xl border border-white/20 bg-white/5 text-white font-semibold text-base hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
          >
            <Mail className="w-5 h-5" />
            Get in Touch
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300"
            >
              <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all duration-300 hover:scale-110"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl border border-white/10 bg-white/5 text-gray-400 hover:text-blue-400 hover:border-blue-400/30 hover:bg-blue-400/10 transition-all duration-300 hover:scale-110"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://fiverr.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl border border-white/10 bg-white/5 text-gray-400 hover:text-green-400 hover:border-green-400/30 hover:bg-green-400/10 transition-all duration-300 hover:scale-110"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
          <a
            href="mailto:youremail@email.com"
            className="p-3 rounded-xl border border-white/10 bg-white/5 text-gray-400 hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-cyan-400/10 transition-all duration-300 hover:scale-110"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-cyan-400 transition-colors duration-300 animate-float"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5" />
      </button>
    </section>
  );
}
