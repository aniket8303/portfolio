import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;
    const body = `${message}\n\nFrom: ${formData.get('name')} (${formData.get('email')})`;
    
    // Fallback to mailto
    window.location.href = `mailto:parekaraniket25@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    e.currentTarget.reset();
  };

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
          Contact
          <span className="ml-4 w-24 h-px bg-primary"></span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Contact Info */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <h3 className="text-3xl font-bold text-white mb-4">Let's Build Something Useful</h3>
            <p className="text-white/60 leading-relaxed text-lg">
              I'm open to software development opportunities, internships, collaborations and interesting projects. Feel free to reach out!
            </p>
          </div>

          <div className="space-y-4">
            <a href="mailto:parekaraniket25@gmail.com" className="glass-panel p-6 rounded-xl flex items-center group hover:-translate-y-1 transition-transform cursor-pointer">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4 group-hover:bg-primary group-hover:text-background transition-colors shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white/50 uppercase tracking-wider mb-1">Email</h4>
                <p className="text-white font-medium">parekaraniket25@gmail.com</p>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/aniket8303/" target="_blank" rel="noreferrer" className="glass-panel p-6 rounded-xl flex items-center group hover:-translate-y-1 transition-transform cursor-pointer">
              <div className="w-12 h-12 bg-[#0077b5]/10 rounded-full flex items-center justify-center text-[#0077b5] mr-4 group-hover:bg-[#0077b5] group-hover:text-white transition-colors shrink-0">
                <FaLinkedin size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white/50 uppercase tracking-wider mb-1">LinkedIn</h4>
                <p className="text-white font-medium">linkedin.com/in/aniket8303</p>
              </div>
            </a>

            <a href="https://github.com/aniket8303" target="_blank" rel="noreferrer" className="glass-panel p-6 rounded-xl flex items-center group hover:-translate-y-1 transition-transform cursor-pointer">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white mr-4 group-hover:bg-white group-hover:text-black transition-colors shrink-0">
                <FaGithub size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white/50 uppercase tracking-wider mb-1">GitHub</h4>
                <p className="text-white font-medium">github.com/aniket8303</p>
              </div>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-8 md:p-10 rounded-2xl relative overflow-hidden">
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full py-16 text-center z-10 relative"
              >
                <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={40} />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">Message Prepared!</h4>
                <p className="text-white/60">Your default email client has been opened.</p>
              </motion.div>
            ) : (
              <form 
                className="relative z-10 flex flex-col space-y-6"
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-white/70">Name</label>
                    <input id="name" name="name" type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-colors" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-white/70">Email</label>
                    <input id="email" name="email" type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-colors" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-white/70">Subject</label>
                  <input id="subject" name="subject" type="text" placeholder="Project Collaboration" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-colors" required />
                </div>
                
                <div className="space-y-2 flex-grow">
                  <label htmlFor="message" className="text-sm font-medium text-white/70">Message</label>
                  <textarea id="message" name="message" placeholder="Hi Aniket, I'd like to discuss..." rows={5} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-colors resize-none" required></textarea>
                </div>
                
                <button type="submit" className="flex items-center justify-center w-full px-8 py-4 bg-primary text-background font-bold rounded-xl hover:bg-white transition-all duration-300 group">
                  Send Message
                  <Send size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </motion.section>
  );
};

export default Contact;
