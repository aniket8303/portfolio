import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const About = () => {
  const technologies = [
    "Java", "Spring Boot", "React", "JavaScript", "TypeScript", 
    "Python", "FastAPI", "SQL", "MySQL", "PostgreSQL", 
    "Hibernate/JPA", "Git/GitHub", "AI / GenAI"
  ];

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-4"
    >
      <div className="mb-12">
        <h2 className="text-sm font-medium tracking-widest text-white/50 uppercase flex items-center">
          About Me
          <span className="ml-4 w-24 h-px bg-primary"></span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
        
        {/* LEFT: Portrait */}
        <div className="lg:col-span-4 relative flex justify-center lg:justify-start">
          <div className="relative w-64 h-64 md:w-80 md:h-80 group">
            {/* Glowing border effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-blue-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            <img 
              src="/images/aniket.jpeg" 
              alt="Aniket Parekar" 
              className="relative w-full h-full object-cover rounded-2xl border border-white/10 shadow-2xl z-10 transition-transform duration-500 group-hover:scale-[1.02]"
            />
            {/* Decorative dots/accents */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 to-transparent rounded-full blur-md"></div>
          </div>
        </div>

        {/* RIGHT: About Text */}
        <div className="lg:col-span-8">
          <h3 className="text-3xl font-bold text-white mb-6">Computer Engineering Student & <span className="text-primary">Software Developer</span></h3>
          
          <div className="space-y-4 text-white/70 leading-relaxed text-lg mb-8">
            <p>
              I am a final-year Computer Engineering student dedicated to building robust and practical software solutions. My core expertise lies in <strong className="text-white">Java full-stack development</strong> and <strong className="text-white">backend architecture</strong>, particularly with Spring Boot and relational databases.
            </p>
            <p>
              Beyond traditional web development, I am deeply involved in <strong className="text-white">AI/GenAI exploration</strong>. I enjoy integrating modern LLM APIs and building AI-powered tools that solve real-world problems efficiently. I have a strong foundation in Data Structures and Algorithms (DSA) and thrive on tackling complex logical challenges.
            </p>
            <p>
              My goal is to continuously bridge the gap between theoretical computer science and scalable, production-ready applications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ul className="space-y-3 text-white/80 font-medium">
              <li className="flex items-center">
                <ChevronRight className="text-primary mr-2 shrink-0" size={18} />
                <span>Degree: B.E. Computer Engineering</span>
              </li>
              <li className="flex items-center">
                <ChevronRight className="text-primary mr-2 shrink-0" size={18} />
                <span>Focus: Full-Stack & AI Integration</span>
              </li>
            </ul>
            <ul className="space-y-3 text-white/80 font-medium">
              <li className="flex items-center">
                <ChevronRight className="text-primary mr-2 shrink-0" size={18} />
                <span>Location: Pune, India</span>
              </li>
              <li className="flex items-center">
                <ChevronRight className="text-primary mr-2 shrink-0" size={18} />
                <span>Graduation: 2027</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* "What I Work With" Area */}
      <div className="glass-panel p-8 md:p-12 rounded-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <h4 className="text-xl font-bold text-white mb-8 relative z-10">What I Work With</h4>
        
        <div className="flex flex-wrap gap-4 relative z-10">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="px-5 py-2.5 bg-white/5 hover:bg-primary/10 border border-white/10 hover:border-primary/30 rounded-lg text-sm font-medium text-white/80 hover:text-primary transition-all cursor-default"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
      
    </motion.section>
  );
};

export default About;
