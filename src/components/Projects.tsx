import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { ExternalLink, X, CheckCircle2 } from 'lucide-react';

interface ProjectType {
  title: string;
  category: string;
  tech: string[];
  description: string;
  github: string;
  demo?: string;
  image: string;
  problem: string;
  solution: string;
  features: string[];
}

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  const projects: ProjectType[] = [
    {
      title: "CivicFlow-AI",
      category: "AI/GenAI",
      tech: ["Next.js", "TypeScript", "React", "FastAPI", "Python", "PostgreSQL", "RAG", "Embeddings"],
      description: "AI-Powered Civic Incident Intelligence Platform that automates data extraction, severity classification, and context retrieval.",
      github: "https://github.com/aniket8303/CivicFlow-AI",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
      problem: "City administrators and civic authorities struggle to efficiently classify, prioritize, and process the massive influx of citizen-reported incidents, leading to delayed response times and resource mismanagement.",
      solution: "An intelligence platform that leverages LLMs to automatically extract structured data from unstructured reports, perform semantic duplicate detection, and assign deterministic priorities to incidents.",
      features: [
        "AI classification for incident severity",
        "Structured AI output generation",
        "Deterministic priority engine",
        "Semantic duplicate detection via Vector Embeddings",
        "RAG (Retrieval-Augmented Generation) for context retrieval",
        "Geographic visualization using Leaflet"
      ]
    },
    {
      title: "ShiftShield",
      category: "Web",
      tech: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
      description: "Intelligent workforce risk platform designed for managing organizational compliance efficiently.",
      github: "https://github.com/aniket8303/shiftshield-intelligent-workforce-risk-platform",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop",
      problem: "Organizations face significant risks and operational inefficiencies when manually tracking workforce compliance, certifications, and shift eligibility.",
      solution: "A centralized, intelligent risk management dashboard that tracks workforce data and enforces compliance rules in real-time.",
      features: [
        "Real-time compliance tracking",
        "Role-based access control (RBAC)",
        "Automated risk flagging",
        "Interactive analytics dashboard",
        "Secure RESTful API architecture"
      ]
    },
    {
      title: "Restaurant Management",
      category: "Java",
      tech: ["Java", "MySQL", "JDBC", "Swing"],
      description: "Comprehensive billing and order management system with a rich desktop user interface.",
      github: "https://github.com/aniket8303/Restaurant-management-system",
      image: "/images/restaurant.jpg",
      problem: "Small to medium restaurants rely on slow, manual paper-based processes for order management and billing, leading to errors and customer dissatisfaction.",
      solution: "A robust Java-based desktop application that streamlines order entry, calculates bills instantly, and maintains a secure transaction database.",
      features: [
        "Interactive desktop UI using Java Swing",
        "Secure JDBC database connectivity",
        "Automated bill calculation and receipt generation",
        "Inventory and menu management",
        "Sales tracking and reporting"
      ]
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category.includes(filter) || p.tech.includes(filter));

  return (
    <motion.section
      id="portfolio"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-4 relative"
    >
      <div className="mb-12">
        <h2 className="text-sm font-medium tracking-widest text-white/50 uppercase flex items-center">
          Selected Projects
          <span className="ml-4 w-24 h-px bg-primary"></span>
        </h2>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-12 justify-center lg:justify-start">
        {['All', 'AI/GenAI', 'Web', 'Java'].map((btn) => (
          <button
            key={btn}
            onClick={() => setFilter(btn)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              filter === btn 
                ? 'bg-primary text-background shadow-[0_0_15px_rgba(0,246,255,0.4)]' 
                : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
            }`}
          >
            {btn}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              key={project.title}
              onClick={() => setSelectedProject(project)}
              className="glass-panel group relative overflow-hidden flex flex-col h-full cursor-pointer hover:border-primary/50 transition-colors duration-300"
            >
              {/* Project Image */}
              <div className="relative h-56 w-full overflow-hidden">
                <div className="absolute inset-0 bg-background/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay CTA */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 bg-background/60 backdrop-blur-sm">
                  <span className="px-6 py-2 bg-primary text-background font-bold rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    View Details
                  </span>
                </div>
              </div>
              
              <div className="p-6 relative z-20 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors mb-2">{project.title}</h3>
                <p className="text-white/60 text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/10">
                  {project.tech.slice(0, 3).map((t, i) => (
                    <span key={i} className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-xs font-mono text-white/40 bg-white/5 px-2 py-1 rounded">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* MODAL overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside modal
              className="bg-[#0a1222] border border-white/10 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl shadow-primary/20 relative"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-30 p-2 bg-black/50 hover:bg-primary text-white hover:text-background rounded-full transition-colors"
              >
                <X size={24} />
              </button>

              {/* Modal Banner Image */}
              <div className="relative h-64 md:h-80 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1222] via-background/40 to-transparent z-10"></div>
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 p-8 z-20">
                  <span className="inline-block px-3 py-1 bg-primary text-background text-xs font-bold uppercase tracking-wider rounded-full mb-3">
                    {selectedProject.category}
                  </span>
                  <h2 className="text-3xl md:text-5xl font-bold font-heading text-white">{selectedProject.title}</h2>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8 md:p-10 space-y-10">
                
                {/* Tech Stack */}
                <div>
                  <h4 className="text-sm text-white/50 uppercase tracking-widest mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-sm text-white/80">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Problem & Solution Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="glass-panel p-6 rounded-xl bg-white/[0.02]">
                    <h4 className="text-xl font-bold text-white mb-3">The Problem</h4>
                    <p className="text-white/70 leading-relaxed text-sm">
                      {selectedProject.problem}
                    </p>
                  </div>
                  <div className="glass-panel p-6 rounded-xl bg-primary/[0.02] border-primary/20">
                    <h4 className="text-xl font-bold text-primary mb-3">The Solution</h4>
                    <p className="text-white/70 leading-relaxed text-sm">
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-xl font-bold text-white mb-6">Key Features</h4>
                  <ul className="grid md:grid-cols-2 gap-4">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="text-primary shrink-0 mr-3 mt-0.5" size={18} />
                        <span className="text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-4 pt-8 border-t border-white/10">
                  <a 
                    href={selectedProject.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-colors"
                  >
                    <FaGithub className="mr-2" size={20} />
                    View Code
                  </a>
                  
                  {selectedProject.demo && (
                    <a 
                      href={selectedProject.demo} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center px-6 py-3 bg-primary text-background font-bold rounded-lg hover:bg-white transition-colors"
                    >
                      <ExternalLink className="mr-2" size={20} />
                      Live Demo
                    </a>
                  )}
                </div>
                
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Projects;
