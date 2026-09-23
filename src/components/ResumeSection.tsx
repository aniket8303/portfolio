import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';

const ResumeSection = () => {
  return (
    <motion.section
      id="resume"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-4"
    >
      <div className="mb-8">
        <h2 className="text-sm font-medium tracking-widest text-white/50 uppercase flex items-center">
          My Resume
          <span className="ml-4 w-24 h-px bg-primary"></span>
        </h2>
      </div>

      <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
        
        <div className="glass-panel p-10 md:p-16 rounded-3xl w-full flex flex-col items-center">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-8">
            <FileText size={40} />
          </div>
          
          <h3 className="text-3xl font-bold text-white mb-6">Explore My Background</h3>
          
          <p className="text-white/60 leading-relaxed mb-10 text-lg">
            Explore my professional experience, technical skills, projects and education. 
            The attached resume highlights my core competencies in Java Full-Stack development and AI/GenAI integrations.
          </p>
          
          <a 
            href="/resume/Aniket_Parekar_Resume.pdf" 
            download="Aniket_Parekar_Resume.pdf"
            className="flex items-center justify-center px-10 py-5 bg-primary text-background font-bold text-lg rounded-2xl hover:bg-white transition-all duration-300 hover:-translate-y-1 shadow-[0_0_30px_rgba(0,246,255,0.25)] group"
          >
            <Download size={24} className="mr-3 group-hover:-translate-y-1 transition-transform" />
            Download Resume
          </a>
        </div>

      </div>
    </motion.section>
  );
};

export default ResumeSection;
