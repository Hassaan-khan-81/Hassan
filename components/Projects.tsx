import React from 'react';
import { PROJECTS } from '../constants';
import { BouncyCard, WiggleButton } from './BouncyCard';
import { ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-black relative">
       {/* Decorative grid lines */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
            FEATURED <span className="text-cyan-400">PROJECTS</span>
          </h2>
          <p className="text-slate-400 text-lg">Proof of concept. Proof of capability.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PROJECTS.map((project, index) => (
            <BouncyCard 
              key={project.id} 
              delay={index * 0.15}
              className="group bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300 shadow-2xl"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10 opacity-60" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 border border-cyan-500/50 rounded-full text-xs font-bold uppercase tracking-wide backdrop-blur-md">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-sm text-slate-500 bg-slate-800 px-3 py-1 rounded-md border border-slate-700">
                      #{tag}
                    </span>
                  ))}
                </div>

                <WiggleButton 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-white text-black font-bold flex items-center justify-center gap-2 group-hover:bg-cyan-400 transition-colors"
                >
                  VIEW CASE STUDY <ExternalLink size={18} />
                </WiggleButton>
              </div>
            </BouncyCard>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <p className="text-slate-500 mb-4">Want to see more?</p>
            <WiggleButton 
              href="https://github.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border border-slate-700 text-slate-300 rounded-lg hover:border-white hover:text-white transition-colors"
            >
                Check GitHub Profile
            </WiggleButton>
        </div>
      </div>
    </section>
  );
};

export default Projects;