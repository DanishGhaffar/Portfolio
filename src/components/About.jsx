import { useRef, useEffect, useState } from 'react';
import { BrainCircuit, Smartphone, Globe, BarChart3, Code2, Layers } from 'lucide-react';

const expertise = [
  {
    icon: BrainCircuit,
    title: 'Computer Vision',
    description: 'Custom object detection pipelines using YOLO, real-time image analysis, satellite imagery processing, and multi-model inference systems.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10 border-cyan-500/20',
  },
  {
    icon: Smartphone,
    title: 'Mobile AI Apps',
    description: 'End-to-end React Native and Flutter apps with on-device ML inference, pose estimation, real-time video analysis, and cloud backends.',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10 border-orange-500/20',
  },
  {
    icon: Globe,
    title: 'Real-Time Systems',
    description: 'WebRTC video conferencing, Socket.IO live features, real-time translation pipelines, and geo-data visualization with Google Maps.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10 border-emerald-500/20',
  },
  {
    icon: BarChart3,
    title: 'Deep Learning & Forecasting',
    description: 'Time-series forecasting with Temporal Fusion Transformers, audio classification, custom dataset training, and model optimization.',
    color: 'text-violet-400',
    bg: 'bg-violet-500/10 border-violet-500/20',
  },
  {
    icon: Code2,
    title: 'Full-Stack Development',
    description: 'React, Node.js, Firebase backends, REST APIs, chat systems, authentication flows, and cloud deployment on Vercel and AWS.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/20',
  },
  {
    icon: Layers,
    title: 'MLOps & Pipelines',
    description: 'Data annotation with Roboflow, model versioning, training pipelines, inference optimization, and production-ready AI deployment.',
    color: 'text-pink-400',
    bg: 'bg-pink-500/10 border-pink-500/20',
  },
];

export default function About() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="relative py-28 bg-[#050508] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-6">
            <BrainCircuit className="w-4 h-4" />
            Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            What I{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              Specialize In
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            A full-stack AI engineer with deep expertise across computer vision, mobile AI,
            real-time systems, and deep learning — turning complex ideas into production-ready solutions.
          </p>
        </div>

        {/* Expertise grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {expertise.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className={`group p-6 rounded-2xl border bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 hover:scale-[1.02] hover:shadow-xl ${item.bg} ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-4 ${item.bg} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
