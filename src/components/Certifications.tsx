import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const Certifications = () => {
  const certs = [
    {
      title: "AI/ML Virtual Internship",
      issuer: "Google for Developers",
      description: "Explored machine learning concepts and generative AI tools, building foundational knowledge in modern AI.",
    },
    {
      title: "Java Full Stack Developer Virtual Internship",
      issuer: "EduSkills",
      description: "Hands-on experience with Java, backend systems, and full-stack integration patterns.",
    },
    {
      title: "Cybersecurity Virtual Internship",
      issuer: "Palo Alto Networks",
      description: "Learned core cybersecurity principles, network security, and threat mitigation strategies.",
    },
    {
      title: "Web Development Internship",
      issuer: "Prodigy InfoTech",
      description: "Built responsive, interactive web applications focusing on frontend technologies.",
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
      <div className="mb-12">
        <h2 className="text-sm font-medium tracking-widest text-white/50 uppercase flex items-center">
          Certifications & Internships
          <span className="ml-4 w-24 h-px bg-primary"></span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certs.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="glass-panel p-6 rounded-xl flex items-start gap-4 hover:-translate-y-1 transition-transform duration-300 group"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 text-primary group-hover:bg-primary group-hover:text-background transition-colors">
              <Award size={24} />
            </div>
            
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors">{cert.title}</h3>
              <p className="text-sm font-medium text-primary/80 mb-3">{cert.issuer}</p>
              <p className="text-sm text-white/60 leading-relaxed">
                {cert.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Certifications;
