import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import ResumeSection from './components/ResumeSection';
import Contact from './components/Contact';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'PROJECTS', href: '#portfolio' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'EDUCATION', href: '#education' },
    { name: 'CERTIFICATIONS', href: '#certifications' },
    { name: 'RESUME', href: '#resume' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <div className="relative min-h-screen bg-background text-white selection:bg-primary selection:text-background font-sans">
      
      {/* HEADER / NAVIGATION */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-background/90 backdrop-blur-md border-b border-white/10 py-4 shadow-lg' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-blue-600 flex items-center justify-center text-background font-black text-xl shadow-[0_0_15px_rgba(0,246,255,0.4)] group-hover:shadow-[0_0_25px_rgba(0,246,255,0.6)] group-hover:scale-105 transition-all duration-300">
              AP
            </div>
            <span className="text-2xl font-bold font-heading text-white group-hover:text-primary transition-colors hidden sm:block">
              Aniket Parekar
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden xl:block">
            <ul className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs font-semibold tracking-wider text-white/70 hover:text-primary transition-colors relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="xl:hidden text-white focus:outline-none"
            onClick={() => setIsNavOpen(!isNavOpen)}
            aria-label="Toggle Navigation"
          >
            {isNavOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {isNavOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-white/10 xl:hidden overflow-hidden shadow-2xl"
            >
              <ul className="flex flex-col px-6 py-8 space-y-6">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => setIsNavOpen(false)}
                      className="block text-lg font-bold tracking-wider text-white/80 hover:text-primary"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* SECTIONS */}
      <main>
        <Hero />
        
        <div id="about" className="py-24 border-t border-white/5 bg-gradient-to-b from-transparent to-white/[0.02]">
          <About />
        </div>
        
        <div id="experience" className="py-24 border-t border-white/5">
          <Experience />
        </div>
        
        <div id="portfolio" className="py-24 border-t border-white/5 bg-gradient-to-b from-transparent to-white/[0.02]">
          <Projects />
        </div>
        
        <div id="skills" className="py-24 border-t border-white/5">
          <Skills />
        </div>

        <div id="education" className="py-24 border-t border-white/5 bg-gradient-to-b from-transparent to-white/[0.02]">
          <Education />
        </div>

        <div id="certifications" className="py-24 border-t border-white/5">
          <Certifications />
        </div>

        <div className="py-24 border-t border-white/5 bg-gradient-to-b from-transparent to-white/[0.02]">
          <ResumeSection />
        </div>
        
        <div id="contact" className="py-24 border-t border-white/5">
          <Contact />
        </div>
      </main>

      {/* FOOTER */}
      <footer className="py-12 border-t border-white/10 bg-black/20">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <h2 className="text-2xl font-bold font-heading text-white mb-2">Aniket Parekar</h2>
          <p className="text-white/60 mb-6">Software Developer | Java Full-Stack | AI/GenAI</p>
          
          <div className="flex space-x-6 mb-8">
            <a href="https://github.com/aniket8303" target="_blank" rel="noreferrer" className="text-white/50 hover:text-primary transition-colors" aria-label="GitHub">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/aniket8303/" target="_blank" rel="noreferrer" className="text-white/50 hover:text-primary transition-colors" aria-label="LinkedIn">
              <FaLinkedin size={24} />
            </a>
          </div>

          <p className="text-white/40 text-sm">&copy; {new Date().getFullYear()} Aniket Parekar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
