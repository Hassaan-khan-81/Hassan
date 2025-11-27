import React from 'react';
import { SKILLS } from '../constants';
import { BouncyCard } from './BouncyCard';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-slate-900/50 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
              POWERHOUSE
            </span> SKILLS
          </h2>
          <p className="text-slate-400 text-lg">The toolkit I use to automate the future.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS.map((skill, index) => (
            <BouncyCard 
              key={skill.title} 
              delay={index * 0.1}
              className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl flex flex-col items-center text-center group hover:border-cyan-500/50 transition-colors"
            >
              <div className={`p-4 rounded-full ${skill.bgColor} ${skill.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <skill.icon size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-100">{skill.title}</h3>
              <p className="text-slate-400 leading-relaxed">{skill.description}</p>
            </BouncyCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;