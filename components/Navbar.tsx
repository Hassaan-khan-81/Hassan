import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { WiggleButton } from './BouncyCard';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 bg-slate-900/80 backdrop-blur-md border-b border-slate-800' : 'py-6 bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-black tracking-tighter text-white group">
          H<span className="text-cyan-400 group-hover:animate-pulse">.</span>AI
        </a>

        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="text-sm font-bold uppercase tracking-wider text-slate-300 hover:text-white relative"
              whileHover={{ scale: 1.1 }}
            >
              {link.name}
              <motion.span 
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400"
                whileHover={{ width: "100%" }}
              />
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Icon Placeholder */}
        <div className="md:hidden">
            <WiggleButton href="#contact" className="text-cyan-400 font-bold border border-cyan-400/30 px-4 py-2 rounded-lg text-sm bg-slate-900/50 backdrop-blur-sm">
              MENU
            </WiggleButton>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;