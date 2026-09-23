import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      role: "Web Development Internship",
      company: "Prodigy InfoTech",
      duration: "2026 - Present",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      responsibilities: [
        "Built responsive websites and real-world web applications from scratch.",
        "Improved frontend development skills through modern UI design practices.",
        "Implemented interactive components and optimized page performance."
      ]
    },
    {
      role: "Java Full Stack Developer Virtual Internship",
      company: "EduSkills",
      duration: "2025",
      technologies: ["Java", "Spring Boot", "SQL", "React"],
      responsibilities: [
        "Developed end-to-end full stack applications using Java and Spring Boot.",
        "Designed relational database schemas and integrated them via JDBC/JPA.",
        "Gained hands-on experience in bridging backend APIs with frontend interfaces."
      ]
    },
    {
      role: "AI/ML Virtual Internship",
      company: "Google for Developers",
      duration: "2025",
      technologies: ["Python", "Machine Learning", "GenAI Concepts"],
      responsibilities: [
        "Explored foundational machine learning algorithms and data processing techniques.",
        "Studied modern Generative AI tools and their integration into software workflows.",
        "Analyzed real-world AI use cases and model deployment strategies."
      ]
    },
    {
      role: "Cybersecurity Virtual Internship",
      company: "Palo Alto Networks",
      duration: "2024",
      technologies: ["Network Security", "Threat Mitigation"],
      responsibilities: [
        "Learned core principles of network security and modern cyber threats.",
        "Studied mitigation strategies and enterprise security architectures.",
        "Completed hands-on modules focusing on secure software practices."
      ]
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-4"
    >
      <div className="mb-16">
        <h2 className="text-sm font-medium tracking-widest text-white/50 uppercase flex items-center">
          Experience
          <span className="ml-4 w-24 h-px bg-primary"></span>
        </h2>
      </div>
      
      <div className="max-w-5xl mx-auto space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-gradient-to-b before:from-primary/50 before:via-white/10 before:to-transparent">
        {experiences.map((exp, index) => (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            key={index} 
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          >
            {/* Timeline Dot */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary shadow-[0_0_15px_rgba(0,246,255,0.5)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-125"></div>
            
            {/* Content Card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] glass-panel p-8 rounded-2xl hover:shadow-[0_0_30px_rgba(0,246,255,0.15)] hover:border-primary/30 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{exp.role}</h3>
                <span className="inline-block mt-2 sm:mt-0 px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-xs font-semibold rounded-full whitespace-nowrap">
                  {exp.duration}
                </span>
              </div>
              
              <h4 className="text-lg text-white/70 font-medium mb-6 flex items-center">
                {exp.company}
              </h4>
              
              <ul className="space-y-3 mb-6">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="text-white/60 text-sm leading-relaxed flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    {resp}
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                {exp.technologies.map((tech, i) => (
                  <span key={i} className="text-xs font-medium text-white/50 bg-white/5 px-2.5 py-1 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
