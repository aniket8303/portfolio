import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Mail } from 'lucide-react';

const Hero = () => {
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
            className="text-5xl md:text-7xl font-bold font-heading text-white mb-2 leading-tight"
          >
            Aniket Parekar
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Software Developer
          </motion.h2>

          <motion.h3 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-base md:text-lg text-primary/90 font-medium tracking-wide mb-6 uppercase"
          >
            Java Full-Stack Developer | Backend Developer | AI/GenAI Enthusiast
          </motion.h3>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-white/60 text-lg mb-10 max-w-xl leading-relaxed"
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

        {/* RIGHT SIDE: Developer Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="order-1 lg:order-2 relative flex justify-center items-center h-full w-full max-w-md mx-auto lg:max-w-none"
        >
          {/* Abstract Geometry & Code accents */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-70 animate-pulse"></div>
          
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Decorative Tech Rings */}
            <div className="absolute inset-0 border border-white/5 rounded-full animate-[spin_60s_linear_infinite]"></div>
            <div className="absolute inset-4 border border-primary/20 rounded-full animate-[spin_40s_linear_infinite_reverse] border-dashed"></div>
            
            {/* Tech Labels (Floating) */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-background/80 backdrop-blur-md border border-white/10 rounded-full text-xs font-mono text-primary z-20 shadow-lg">
              {"<Java />"}
            </div>
            <div className="absolute top-1/4 -right-8 px-4 py-1.5 bg-background/80 backdrop-blur-md border border-white/10 rounded-full text-xs font-mono text-blue-400 z-20 shadow-lg">
              {"{React}"}
            </div>
            <div className="absolute bottom-1/4 -left-8 px-4 py-1.5 bg-background/80 backdrop-blur-md border border-white/10 rounded-full text-xs font-mono text-green-400 z-20 shadow-lg">
              {"Spring Boot"}
            </div>

            {/* Profile Photo */}
            <div className="absolute inset-8 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl z-10 bg-background group">
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700 z-10 pointer-events-none"></div>
              <img 
                src="/images/aniket.jpeg" 
                alt="Aniket Parekar" 
                className="w-full h-full object-cover filter contrast-110 saturate-100 group-hover:scale-105 transition-transform duration-700"
              />
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
