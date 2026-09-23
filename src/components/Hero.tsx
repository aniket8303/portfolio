import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Mail } from 'lucide-react';

const roles = [
  "Software Developer",
  "Java Full-Stack Developer",
  "Backend Developer",
  "AI / GenAI Enthusiast"
];

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000); // Change role every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-12 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left z-10"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-primary font-medium mb-2 tracking-wide"
          >
            Hi, I'm
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold font-heading text-white mb-4 leading-tight"
          >
            Aniket Parekar
          </motion.h1>
          
          {/* 3D Rotating Role Text */}
          <div className="h-16 md:h-20 w-full relative perspective-1000 flex items-center justify-center lg:justify-start mb-6 overflow-hidden">
            <AnimatePresence mode="popLayout">
              <motion.h2
                key={currentRoleIndex}
                initial={{ rotateX: 90, y: 40, opacity: 0 }}
                animate={{ rotateX: 0, y: 0, opacity: 1 }}
                exit={{ rotateX: -90, y: -40, opacity: 0 }}
                transition={{ duration: 0.6, ease: "circOut" }}
                className="absolute text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400"
                style={{ transformStyle: "preserve-3d", transformOrigin: "center center -20px" }}
              >
                {roles[currentRoleIndex]}
              </motion.h2>
            </AnimatePresence>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-white/60 text-lg mb-10 max-w-xl leading-relaxed mt-4"
          >
            I build practical full-stack and AI-powered applications using Java, Spring Boot, React, SQL and modern AI/GenAI technologies.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center gap-5 mb-10 w-full sm:w-auto"
          >
            <a 
              href="#portfolio"
              className="flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-primary text-background font-bold rounded-xl hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(0,246,255,0.2)] hover:shadow-[0_0_30px_rgba(0,246,255,0.4)] hover:-translate-y-1 group"
            >
              Explore My Work
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>

            <a 
              href="/resume/Aniket_Parekar_Resume.pdf" 
              download="Aniket_Parekar_Resume.pdf"
              className="flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 group"
            >
              <Download className="mr-2 group-hover:-translate-y-1 transition-transform" size={20} />
              Download Resume
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-6"
          >
            <a href="https://github.com/aniket8303" target="_blank" rel="noreferrer" className="text-white/50 hover:text-white transition-colors hover:scale-110 transform duration-300" aria-label="GitHub">
              <FaGithub size={28} />
            </a>
            <a href="https://www.linkedin.com/in/aniket8303/" target="_blank" rel="noreferrer" className="text-white/50 hover:text-[#0077b5] transition-colors hover:scale-110 transform duration-300" aria-label="LinkedIn">
              <FaLinkedin size={28} />
            </a>
            <a href="mailto:parekaraniket25@gmail.com" className="text-white/50 hover:text-primary transition-colors hover:scale-110 transform duration-300" aria-label="Email">
              <Mail size={28} />
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE: Developer Visual (Orbital Skills) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="order-1 lg:order-2 relative flex justify-center items-center h-full w-full max-w-md mx-auto lg:max-w-none"
        >
          <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] flex items-center justify-center">
            
            {/* Center Profile Image */}
            <div className="absolute inset-0 m-auto w-48 h-48 md:w-60 md:h-60 rounded-full z-20 shadow-[0_0_50px_rgba(0,0,0,0.8)] border-4 border-[#1a2333] overflow-hidden group">
               <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700 z-10 pointer-events-none"></div>
               <img 
                 src="/images/aniket.jpeg" 
                 alt="Aniket Parekar" 
                 className="w-full h-full object-cover filter contrast-110 saturate-100 group-hover:scale-105 transition-transform duration-700"
               />
               {/* Glowing border accent */}
               <div className="absolute inset-0 border-2 border-primary/50 rounded-full pointer-events-none"></div>
            </div>

            {/* Orbital Track (Rotating) */}
            <div className="absolute w-full h-full border border-white/10 rounded-full animate-[spin_30s_linear_infinite]">
              
              {/* React Icon */}
              <div className="absolute top-0 left-1/2 -ml-6 -mt-6 w-12 h-12 rounded-full bg-[#111827] border border-white/10 shadow-[0_0_15px_rgba(97,218,251,0.2)] flex items-center justify-center">
                <div className="animate-[spin_30s_linear_infinite_reverse]">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-6 h-6" />
                </div>
              </div>

              {/* JS Icon */}
              <div className="absolute top-[14.6%] right-[14.6%] -mr-6 -mt-6 w-12 h-12 rounded-full bg-[#111827] border border-white/10 shadow-[0_0_15px_rgba(247,223,30,0.2)] flex items-center justify-center">
                <div className="animate-[spin_30s_linear_infinite_reverse]">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-6 h-6" />
                </div>
              </div>

              {/* TS Icon */}
              <div className="absolute top-1/2 right-0 -mr-6 -mt-6 w-12 h-12 rounded-full bg-[#111827] border border-white/10 shadow-[0_0_15px_rgba(49,120,198,0.2)] flex items-center justify-center">
                <div className="animate-[spin_30s_linear_infinite_reverse]">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-6 h-6" />
                </div>
              </div>

              {/* Java Icon */}
              <div className="absolute bottom-[14.6%] right-[14.6%] -mr-6 -mb-6 w-12 h-12 rounded-full bg-[#111827] border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.2)] flex items-center justify-center">
                <div className="animate-[spin_30s_linear_infinite_reverse]">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="w-6 h-6" />
                </div>
              </div>

              {/* Node Icon */}
              <div className="absolute bottom-0 left-1/2 -ml-6 -mb-6 w-12 h-12 rounded-full bg-[#111827] border border-white/10 shadow-[0_0_15px_rgba(51,153,51,0.2)] flex items-center justify-center">
                <div className="animate-[spin_30s_linear_infinite_reverse]">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node" className="w-6 h-6" />
                </div>
              </div>

              {/* Tailwind Icon */}
              <div className="absolute bottom-[14.6%] left-[14.6%] -ml-6 -mb-6 w-12 h-12 rounded-full bg-[#111827] border border-white/10 shadow-[0_0_15px_rgba(6,182,212,0.2)] flex items-center justify-center">
                <div className="animate-[spin_30s_linear_infinite_reverse]">
                   <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind" className="w-6 h-6" />
                </div>
              </div>

              {/* Python Icon */}
              <div className="absolute top-1/2 left-0 -ml-6 -mt-6 w-12 h-12 rounded-full bg-[#111827] border border-white/10 shadow-[0_0_15px_rgba(55,118,171,0.2)] flex items-center justify-center">
                <div className="animate-[spin_30s_linear_infinite_reverse]">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-6 h-6" />
                </div>
              </div>

              {/* C++ Icon */}
              <div className="absolute top-[14.6%] left-[14.6%] -ml-6 -mt-6 w-12 h-12 rounded-full bg-[#111827] border border-white/10 shadow-[0_0_15px_rgba(0,89,156,0.2)] flex items-center justify-center">
                <div className="animate-[spin_30s_linear_infinite_reverse]">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" className="w-6 h-6" />
                </div>
              </div>

            </div>
          </div>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center group cursor-pointer"
      >
        <a href="#about" className="flex flex-col items-center">
          <span className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-2 group-hover:text-primary transition-colors">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1 group-hover:border-primary/50 transition-colors">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-primary rounded-full"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
