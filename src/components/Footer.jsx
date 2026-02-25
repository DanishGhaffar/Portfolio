import { useState } from 'react';
import { Mail, Github, Linkedin, ExternalLink, Code2, Send, MapPin, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace this with your actual form submission (e.g. EmailJS, Formspree, etc.)
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.location.href = `mailto:youremail@email.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="relative py-28 bg-[#050508] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-violet-950/5 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-80 bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left — info */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-sm font-medium mb-6">
                <Mail className="w-4 h-4" />
                Let's Work Together
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                Have a Project{' '}
                <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  In Mind?
                </span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Whether you need a custom AI model, a mobile app with on-device ML, a real-time
                platform, or a full-stack AI solution — I'm ready to build it. Let's talk.
              </p>

              {/* Contact details */}
              <div className="flex flex-col gap-4 mb-8">
                <a
                  href="mailto:youremail@email.com"
                  className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group"
                >
                  <div className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10 transition-all duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>youremail@email.com</span>
                </a>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span>Available Worldwide · Remote</span>
                </div>
              </div>

              {/* Socials */}
              <div className="flex gap-3">
                {[
                  { icon: Github, label: 'GitHub', href: 'https://github.com', hoverClass: 'hover:border-white/30 hover:text-white' },
                  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com', hoverClass: 'hover:border-blue-400/30 hover:text-blue-400' },
                  { icon: ExternalLink, label: 'Fiverr', href: 'https://fiverr.com', hoverClass: 'hover:border-green-400/30 hover:text-green-400' },
                ].map(({ icon: Icon, label, href, hoverClass }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={label}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 text-gray-400 text-sm font-medium transition-all duration-300 hover:scale-105 ${hoverClass}`}
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Right — Contact Form */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500/20 to-violet-500/20 rounded-3xl blur-xl opacity-50" />
              <div className="relative p-8 rounded-2xl border border-white/10 bg-[#080810]/80 backdrop-blur-sm">
                <h3 className="text-white font-bold text-xl mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1.5 font-medium">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.07] transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1.5 font-medium">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.07] transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1.5 font-medium">Message</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.07] transition-all duration-200 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold hover:shadow-xl hover:shadow-cyan-500/20 hover:scale-[1.02] transition-all duration-300"
                  >
                    {sent ? (
                      <>
                        <CheckCircle2 className="w-5 h-5" /> Opening Email Client...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" /> Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer bar */}
      <footer className="bg-[#030305] border-t border-white/5 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center">
              <Code2 className="w-4 h-4 text-white" />
            </div>
            <span className="text-white font-bold text-sm">C-Square Lab.Portfolio</span>
          </div>

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} · Built with React + Vite · Deployed on Vercel
          </p>

          <nav className="flex gap-6">
            {['Home', 'Projects', 'Reviews', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-200"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      </footer>
    </>
  );
}
