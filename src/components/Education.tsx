import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    institution: "P.E.S. Modern College of Engineering, Pune",
    duration: "2023 – 2027",
    degree: "Bachelor of Engineering in Computer Engineering",
    score: "CGPA: 7.50/10"
  },
  {
    institution: "Ligade Patil Jr. College of Science, Karad",
    duration: "2021 – 2023",
    degree: "HSC (Class XII)",
    score: "Percentage: 75.50%"
  },
  {
    institution: "Nazara Vidyamandir Prashala, Nazara",
    duration: "2015 – 2021",
    degree: "SSC (Class X)",
    score: "Percentage: 79.80%"
  }
];

const Education = () => {
  return (
    <motion.section
      id="education"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="container mx-auto px-4"
    >
      <div className="max-w-4xl mx-auto">
        
        {/* Rushikesh Style Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4 tracking-wider">
            My Education
          </h2>
          <p className="text-white/50 text-lg md:text-xl font-light">
            My academic qualifications and institutional background.
          </p>
        </div>

        {/* Rushikesh Style Timeline */}
        <div className="relative border-l border-white/20 ml-3 md:ml-6 space-y-12 pb-8">
          
          {educationData.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Timeline Dot */}
              <div className="absolute w-4 h-4 rounded-full bg-primary -left-[8.5px] top-1.5 shadow-[0_0_10px_rgba(0,246,255,0.8)] group-hover:scale-150 transition-transform duration-300"></div>
              
              {/* Content */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                  {edu.institution}
                </h3>
                <span className="inline-block px-4 py-1 bg-white/5 border border-white/10 rounded-full text-primary text-sm font-semibold whitespace-nowrap w-fit">
                  {edu.duration}
                </span>
              </div>
              
              <h4 className="text-lg md:text-xl text-white/80 font-medium mb-3">
                {edu.degree}
              </h4>
              
              <p className="text-white/50 font-medium tracking-wide flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                {edu.score}
              </p>
            </motion.div>
          ))}
          
        </div>
      </div>
    </motion.section>
  );
};

export default Education;
