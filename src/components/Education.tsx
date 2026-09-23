import { motion } from 'framer-motion';

const Education = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-4"
    >
      <div className="mb-12">
        <h2 className="text-sm font-medium tracking-widest text-white/50 uppercase flex items-center">
          Education
          <span className="ml-4 w-24 h-px bg-primary"></span>
        </h2>
      </div>
      
      <div className="max-w-4xl relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
        
        {/* Education Item 1 */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
          
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-panel p-8 rounded-xl hover:shadow-[0_0_20px_rgba(0,246,255,0.2)] transition-all duration-300">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold tracking-wider rounded-full mb-4">
              EXPECTED 2027
            </span>
            <h3 className="text-2xl font-bold text-white mb-2">B.E. Computer Engineering</h3>
            <h4 className="text-lg text-white/80 font-medium mb-1">P.E.S. Modern College of Engineering, Pune</h4>
            <p className="text-sm text-primary/80 mb-4 font-medium tracking-wide">Savitribai Phule Pune University</p>
            <p className="text-white/60 leading-relaxed text-sm">
              Focusing on Data Structures & Algorithms, Object-Oriented Programming, DBMS, Operating Systems, and Software Engineering. Active participant in technical clubs and hands-on project development.
            </p>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default Education;
