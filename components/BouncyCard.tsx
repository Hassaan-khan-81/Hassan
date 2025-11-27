import React from 'react';
import { motion } from 'framer-motion';

interface BouncyCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const BouncyCard: React.FC<BouncyCardProps> = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        type: "spring", 
        stiffness: 200, 
        damping: 15, 
        delay: delay 
      }}
      whileHover={{ 
        scale: 1.05, 
        rotate: [0, -2, 2, -2, 2, 0],
        transition: { 
          rotate: {
            duration: 0.4,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear"
          },
          scale: {
            type: "spring",
            stiffness: 300
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface WiggleButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  [key: string]: any;
}

export const WiggleButton: React.FC<WiggleButtonProps> = ({ children, onClick, className = "", href, ...rest }) => {
  const Component = href ? motion.a : motion.button;
  const props = href ? { href, ...rest } : { onClick, ...rest };

  return (
    // @ts-ignore - framer motion types for 'a' vs 'button' intersection
    <Component
      {...props}
      whileHover={{ 
        scale: 1.1,
        rotate: [-3, 3, -3, 3, 0],
        transition: { duration: 0.4 }
      }}
      whileTap={{ scale: 0.9 }}
      className={`inline-block ${className}`}
    >
      {children}
    </Component>
  );
};