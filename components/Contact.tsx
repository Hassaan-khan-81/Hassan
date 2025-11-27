import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { WiggleButton } from './BouncyCard';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-slate-800/50 backdrop-blur-lg border border-slate-700 p-12 rounded-3xl shadow-2xl"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-white">
            READY TO <span className="text-purple-400">AUTOMATE?</span>
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Let's turn your manual chaos into a streamlined, autonomous machine.
          </p>

          <WiggleButton 
            href="mailto:hassaan@example.com"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-xl rounded-2xl shadow-lg hover:shadow-purple-500/50 transition-shadow mb-12"
          >
            <span>START A PROJECT</span>
          </WiggleButton>

          <div className="flex justify-center gap-8">
            {SOCIAL_LINKS.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.2, color: "#a855f7" }}
                className="text-slate-400 transition-colors"
                aria-label={link.name}
              >
                <link.icon size={32} />
              </motion.a>
            ))}
          </div>
        </motion.div>
        
        <footer className="mt-20 text-slate-600 text-sm">
            <p>&copy; {new Date().getFullYear()} Hassaan. All Systems Operational.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;