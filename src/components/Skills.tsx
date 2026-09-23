import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Database, Brain, Server, Code2, Wrench, Layout } from 'lucide-react';

const allSkills = [
  // Programming
  { name: "Java", category: "Programming", icon: <Code2 size={24} />, color: "from-orange-500 to-red-500" },
  { name: "Python", category: "Programming", icon: <Code2 size={24} />, color: "from-blue-500 to-yellow-500" },
  { name: "C++", category: "Programming", icon: <Code2 size={24} />, color: "from-blue-600 to-blue-800" },
  { name: "JavaScript", category: "Programming", icon: <Code2 size={24} />, color: "from-yellow-400 to-yellow-600" },
  { name: "TypeScript", category: "Programming", icon: <Code2 size={24} />, color: "from-blue-400 to-blue-600" },
  // Frontend
  { name: "React", category: "Frontend", icon: <Layout size={24} />, color: "from-cyan-400 to-cyan-600" },
  { name: "Next.js", category: "Frontend", icon: <Layout size={24} />, color: "from-gray-700 to-black" },
  { name: "Tailwind", category: "Frontend", icon: <Layout size={24} />, color: "from-teal-400 to-teal-600" },
  { name: "HTML/CSS", category: "Frontend", icon: <Layout size={24} />, color: "from-orange-400 to-orange-600" },
  // Backend
  { name: "Spring Boot", category: "Backend", icon: <Server size={24} />, color: "from-green-500 to-green-700" },
  { name: "FastAPI", category: "Backend", icon: <Server size={24} />, color: "from-teal-500 to-teal-700" },
  { name: "Node.js", category: "Backend", icon: <Server size={24} />, color: "from-green-600 to-green-800" },
  { name: "Hibernate", category: "Backend", icon: <Server size={24} />, color: "from-yellow-600 to-yellow-800" },
  // Database
  { name: "MySQL", category: "Database", icon: <Database size={24} />, color: "from-blue-500 to-blue-700" },
  { name: "PostgreSQL", category: "Database", icon: <Database size={24} />, color: "from-indigo-500 to-indigo-700" },
  // AI
  { name: "LLMs", category: "AI", icon: <Brain size={24} />, color: "from-purple-500 to-purple-700" },
  { name: "RAG Pipeline", category: "AI", icon: <Brain size={24} />, color: "from-fuchsia-500 to-fuchsia-700" },
  { name: "Prompt Eng", category: "AI", icon: <Brain size={24} />, color: "from-pink-500 to-pink-700" },
  // Tools
  { name: "Docker", category: "Tools", icon: <Wrench size={24} />, color: "from-blue-400 to-blue-600" },
  { name: "Git", category: "Tools", icon: <Wrench size={24} />, color: "from-red-500 to-red-700" },
];

const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="container mx-auto px-4"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4 tracking-wider">
            Skill Playground
          </h2>
          <p className="text-white/60 text-lg md:text-xl font-light max-w-2xl mx-auto">
            {isMobile ? "Tap and drag the badges around!" : "Grab, drag, and throw the skills around the playground!"}
          </p>
        </div>

        {/* Playground Container */}
        <div 
          ref={containerRef}
          className="relative w-full h-[600px] md:h-[700px] glass-panel rounded-[3rem] border border-white/10 overflow-hidden bg-[#0a1222]/80 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]"
        >
          {/* Inner playground styling */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none"></div>
          
          <div className="absolute inset-0 p-4 md:p-12 flex flex-wrap content-center justify-center gap-4 md:gap-6">
            {allSkills.map((skill, index) => {
              // Calculate random initial rotation for a messy playground look
              const randomRotation = Math.floor(Math.random() * 30) - 15;
              
              return (
                <motion.div
                  key={skill.name}
                  drag
                  dragConstraints={containerRef}
                  dragElastic={0.2}
                  dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                  whileHover={{ scale: 1.1, zIndex: 50 }}
                  whileDrag={{ scale: 1.2, zIndex: 100, cursor: "grabbing" }}
                  initial={{ opacity: 0, scale: 0, rotate: randomRotation }}
                  animate={{ opacity: 1, scale: 1, rotate: randomRotation }}
                  transition={{ 
                    delay: index * 0.05, 
                    type: "spring", 
                    stiffness: 260, 
                    damping: 20 
                  }}
                  className={`
                    flex items-center gap-3 px-6 py-4 rounded-2xl cursor-grab active:cursor-grabbing
                    bg-gradient-to-br ${skill.color} text-white shadow-xl hover:shadow-2xl
                    border border-white/20 backdrop-blur-md select-none touch-none
                  `}
                >
                  <div className="bg-white/20 p-2 rounded-xl backdrop-blur-sm shadow-inner">
                    {skill.icon}
                  </div>
                  <span className="font-bold tracking-wide text-lg whitespace-nowrap drop-shadow-md">
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* Hint Overlay */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-6 py-3 bg-black/50 backdrop-blur-md rounded-full border border-white/10 pointer-events-none">
            <span className="text-white/50 text-sm font-medium tracking-widest uppercase">
              Interactive Physics Zone
            </span>
          </div>
        </div>

      </div>
    </motion.section>
  );
};

export default Skills;
