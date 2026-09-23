import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Award, CheckCircle2, X } from 'lucide-react';

const certs = [
  {
    title: "AI/ML Virtual Internship",
    issuer: "Google for Developers",
    description: "Explored machine learning concepts and generative AI tools, building foundational knowledge in modern AI technologies, data processing, and model training methodologies.",
    color: "from-blue-500 to-cyan-400",
    date: "August 2024"
  },
  {
    title: "Java Full Stack Developer",
    issuer: "EduSkills",
    description: "Hands-on experience with Java, backend systems, REST APIs, and full-stack integration patterns using modern web frameworks and database management systems.",
    color: "from-orange-500 to-red-500",
    date: "July 2024"
  },
  {
    title: "Cybersecurity Internship",
    issuer: "Palo Alto Networks",
    description: "Learned core cybersecurity principles, network security, threat mitigation strategies, and zero-trust architecture concepts.",
    color: "from-purple-500 to-fuchsia-500",
    date: "June 2024"
  },
  {
    title: "Web Development",
    issuer: "Prodigy InfoTech",
    description: "Built responsive, interactive web applications focusing on frontend technologies, responsive layouts, and user experience design principles.",
    color: "from-green-500 to-emerald-400",
    date: "May 2024"
  }
];

// Custom 3D Certificate Card (Thumbnail)
const CertCard = ({ cert, index, onClick }: { cert: any, index: number, onClick: () => void }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative rounded-2xl p-[1px] group perspective-1000 w-full h-full cursor-pointer"
    >
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${cert.color} opacity-30 group-hover:opacity-100 transition-opacity duration-500 blur-sm`}></div>
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${cert.color} opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>
      
      <div 
        className="relative h-full w-full bg-[#0a1222]/90 backdrop-blur-xl rounded-2xl p-6 overflow-hidden flex flex-col"
        style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}
      >
        <motion.div 
          className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at center, white 0%, transparent 70%)`,
            x: useTransform(mouseXSpring, [-0.5, 0.5], ["-40%", "40%"]),
            y: useTransform(mouseYSpring, [-0.5, 0.5], ["-40%", "40%"]),
          }}
        />

        <div className="relative z-10 flex flex-col h-full" style={{ transform: "translateZ(20px)" }}>
          <div className="flex items-start justify-between mb-6">
            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cert.color} p-[1px] shadow-lg`}>
              <div className="w-full h-full bg-[#0a1222] rounded-xl flex items-center justify-center">
                <Award className="text-white w-7 h-7" />
              </div>
            </div>
            
            <div className="flex items-center gap-1 px-3 py-1 bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold rounded-full">
              <CheckCircle2 size={12} /> VERIFIED
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-white mb-2 leading-tight drop-shadow-md">
            {cert.title}
          </h3>
          <p className={`text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r ${cert.color} mb-4 uppercase tracking-wider`}>
            {cert.issuer}
          </p>
          
          <div className="mt-auto pt-4 border-t border-white/10 flex justify-between items-center">
             <span className="text-white/40 text-xs font-bold uppercase tracking-widest">Click to View</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<any | null>(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedCert]);

  return (
    <motion.section
      id="certifications"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="container mx-auto px-4 perspective-1000 relative"
    >
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500 mb-4 uppercase tracking-widest drop-shadow-[0_0_15px_rgba(0,246,255,0.3)]">
            Premium Certifications
          </h2>
          <p className="text-white/60 text-lg md:text-xl font-light tracking-wide">
            Official recognition and verified achievements from industry leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 perspective-1000">
          {certs.map((cert, index) => (
            <div key={index} className="h-full">
              <CertCard cert={cert} index={index} onClick={() => setSelectedCert(cert)} />
            </div>
          ))}
        </div>

      </div>

      {/* Modal Lightbox */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-md p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 50, rotateX: 20 }}
              animate={{ scale: 1, y: 0, rotateX: 0 }}
              exit={{ scale: 0.9, y: 50, rotateX: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
              className={`relative w-full max-w-3xl rounded-[2rem] p-1 bg-gradient-to-br ${selectedCert.color} shadow-[0_0_50px_rgba(0,0,0,0.5)] perspective-1000`}
            >
              <div className="absolute top-4 right-4 z-20">
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-white hover:text-black transition-colors backdrop-blur-md"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="relative w-full bg-[#0a1222] rounded-[2rem] p-8 md:p-12 overflow-hidden flex flex-col md:flex-row items-center gap-10">
                
                {/* Visual Seal / Badge */}
                <div className={`w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br ${selectedCert.color} p-1 shadow-[0_0_30px_currentColor] shrink-0 flex items-center justify-center`}>
                  <div className="w-full h-full bg-[#0a1222] rounded-full border-4 border-white/20 flex flex-col items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/5 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.1)_10px,rgba(255,255,255,0.1)_20px)]"></div>
                    <Award size={48} className="text-white drop-shadow-md z-10 mb-2" />
                    <span className="text-[10px] font-black tracking-widest text-white/50 z-10">OFFICIAL</span>
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-bold tracking-widest rounded-full mb-6">
                    <CheckCircle2 size={16} /> OFFICIALLY VERIFIED
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-2">
                    {selectedCert.title}
                  </h3>
                  
                  <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mb-6 justify-center md:justify-start">
                    <span className={`text-lg font-bold uppercase tracking-wider bg-clip-text text-transparent bg-gradient-to-r ${selectedCert.color}`}>
                      {selectedCert.issuer}
                    </span>
                    <span className="hidden sm:block text-white/20">•</span>
                    <span className="text-white/50 font-medium tracking-wide">
                      Issued: {selectedCert.date}
                    </span>
                  </div>
                  
                  <p className="text-white/70 text-base md:text-lg leading-relaxed font-light bg-white/5 p-6 rounded-xl border border-white/10">
                    {selectedCert.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.section>
  );
};

export default Certifications;
