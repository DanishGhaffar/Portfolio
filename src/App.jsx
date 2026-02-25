import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050508] text-white antialiased">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Reviews />
      <Footer />
    </div>
  );
}
