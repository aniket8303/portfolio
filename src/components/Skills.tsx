import { motion } from 'framer-motion';

const Skills = () => {
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
        
        {/* Editorial Heading */}
        <div className="mb-16 border-l-2 border-primary pl-6">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4 uppercase tracking-wider">
            My Arsenal
          </h2>
          <p className="text-white/60 text-lg md:text-xl font-light">
            A comprehensive overview of my technical expertise.
          </p>
        </div>

        {/* Bento Box Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          
          {/* Programming - Large Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="md:col-span-2 lg:col-span-2 row-span-2 glass-panel p-8 rounded-[2rem] relative overflow-hidden group hover:border-primary/40 transition-colors bg-[#0a1222]/80"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10 group-hover:bg-primary/20 transition-all duration-700"></div>
            <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-widest border-b border-white/10 pb-4">Programming</h3>
            <div className="flex flex-wrap gap-3">
              {["Java", "C++", "Python", "JavaScript", "TypeScript"].map((skill, i) => (
                <span key={i} className="px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-lg font-medium text-white/90 hover:bg-primary hover:text-background hover:-translate-y-1 transition-all duration-300 shadow-sm cursor-default">
                  {skill}
                </span>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-white/5">
              <p className="text-white/50 text-sm leading-relaxed">
                Strong foundation in Object-Oriented Programming and Data Structures. Primary focus on Java ecosystem.
              </p>
            </div>
          </motion.div>

          {/* AI / GenAI - Tall Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="md:col-span-1 lg:col-span-1 row-span-2 glass-panel p-8 rounded-[2rem] relative overflow-hidden group hover:border-purple-500/40 transition-colors bg-[#0a1222]/80"
          >
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-purple-500/10 to-transparent -z-10 group-hover:from-purple-500/20 transition-all duration-700"></div>
            <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-widest text-purple-400">AI / GenAI</h3>
            <ul className="space-y-4">
              {["Generative AI", "LLMs", "Prompt Engineering", "Embeddings", "Semantic Similarity", "RAG", "AI API Integration"].map((skill, i) => (
                <li key={i} className="flex items-center text-white/80 group-hover:text-white transition-colors">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></span>
                  <span className="font-medium text-sm md:text-base">{skill}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Database - Square Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="md:col-span-1 lg:col-span-1 glass-panel p-6 rounded-[2rem] flex flex-col justify-between group hover:border-blue-400/40 transition-colors"
          >
            <h3 className="text-sm font-bold text-white/50 mb-4 uppercase tracking-widest">Database</h3>
            <div className="flex flex-wrap gap-2">
              {["MySQL", "PostgreSQL", "SQL"].map((skill, i) => (
                <span key={i} className="px-3 py-1.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-lg text-sm font-bold">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Backend - Wide Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="md:col-span-2 lg:col-span-2 glass-panel p-6 md:p-8 rounded-[2rem] relative overflow-hidden group hover:border-green-400/40 transition-colors"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <div className="w-24 h-24 border-4 border-green-500 rounded-full border-dashed animate-[spin_20s_linear_infinite]"></div>
            </div>
            <h3 className="text-xl font-bold text-green-400 mb-6 uppercase tracking-widest">Backend Systems</h3>
            <div className="flex flex-wrap gap-3 relative z-10">
              {["Spring Boot", "FastAPI", "Node.js", "Express.js", "REST APIs", "Hibernate/JPA"].map((skill, i) => (
                <span key={i} className="px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl text-sm font-medium text-white/90 hover:bg-green-500 hover:text-background hover:border-green-500 transition-all cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Frontend - Square Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="md:col-span-1 lg:col-span-1 glass-panel p-6 rounded-[2rem] group hover:border-pink-400/40 transition-colors"
          >
            <h3 className="text-sm font-bold text-pink-400 mb-4 uppercase tracking-widest">Frontend</h3>
            <div className="flex flex-col gap-2">
              {["React", "Next.js", "HTML/CSS", "Bootstrap"].map((skill, i) => (
                <div key={i} className="flex justify-between items-center text-sm font-medium text-white/70 group-hover:text-white transition-colors">
                  {skill}
                  <div className="w-full max-w-[40px] h-[2px] bg-white/10 rounded-full overflow-hidden ml-2">
                    <div className="w-full h-full bg-pink-500 rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tools - Square Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="md:col-span-1 lg:col-span-1 glass-panel p-6 rounded-[2rem] flex items-center justify-center relative overflow-hidden group hover:border-orange-400/40 transition-colors"
          >
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] animate-[gradient_3s_linear_infinite] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="text-center relative z-10">
              <h3 className="text-sm font-bold text-white/50 mb-3 uppercase tracking-widest">Tools</h3>
              <p className="text-sm font-bold text-orange-400 leading-relaxed">
                Git, GitHub, Docker,<br/>VS Code, Postman,<br/>Antigravity
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
