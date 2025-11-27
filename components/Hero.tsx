import React from 'react';
import { motion } from 'framer-motion';
import { WiggleButton } from './BouncyCard';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <motion.div 
          animate={{ 
            x: [0, 100, -100, 0],
            y: [0, -100, 100, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-[128px]"
        />
        <motion.div 
          animate={{ 
            x: [0, -150, 150, 0],
            y: [0, 150, -150, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-[128px]"
        />
      </div>

      <div className="z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="mb-6 inline-block"
        >
          <span className="px-4 py-2 rounded-full border border-cyan-500/50 bg-cyan-500/10 text-cyan-400 font-bold tracking-wider text-sm md:text-base uppercase">
            System Online // Welcome
          </span>
        </motion.div>

        <motion.h1 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="text-6xl md:text-8xl font-black mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white to-purple-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]"
        >
          I'M HASSAAN
        </motion.h1>

        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
          className="text-2xl md:text-4xl font-bold text-slate-300 mb-8"
        >
          AI & <span className="text-purple-400">Automation</span> Specialist
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12"
        >
          I build autonomous agents, optimize CRM workflows, and bend platforms like n8n and Make.com to my will.
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <WiggleButton 
            href="#projects"
            className="px-8 py-4 bg-cyan-500 text-black font-bold text-lg rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.6)] hover:shadow-[0_0_40px_rgba(6,182,212,0.8)]"
          >
            VIEW PROJECTS
          </WiggleButton>
          
          <WiggleButton 
            href="#contact"
            className="px-8 py-4 bg-transparent border-2 border-purple-500 text-purple-400 font-bold text-lg rounded-xl hover:bg-purple-500 hover:text-white transition-colors"
          >
            LET'S TALK
          </WiggleButton>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 1.5, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-slate-500"
      >
        <ArrowDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;