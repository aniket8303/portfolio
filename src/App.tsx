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
      setScrolled(window.scrollY > 50);
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
      
      {/* HEADER / NAVIGATION (Rushikesh Style) */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#0a1222]/80 backdrop-blur-md border-b border-white/5 py-4 shadow-lg' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <span className="text-2xl font-black font-heading text-white tracking-widest group-hover:text-primary transition-colors">
              ANIKET<span className="text-primary">.</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden xl:block">
            <ul className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm font-semibold tracking-widest text-white/70 hover:text-primary transition-colors relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="xl:hidden text-white focus:outline-none hover:text-primary transition-colors"
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
              className="absolute top-full left-0 right-0 bg-[#0a1222]/95 backdrop-blur-lg border-b border-white/5 xl:hidden overflow-hidden shadow-2xl"
            >
              <ul className="flex flex-col px-6 py-6 space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => setIsNavOpen(false)}
                      className="block text-base font-bold tracking-widest text-white/80 hover:text-primary py-2"
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

      <footer className="py-8 border-t border-white/10 text-center text-white/50 bg-[#0a1222]">
        <p>&copy; {new Date().getFullYear()} Aniket Parekar. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
