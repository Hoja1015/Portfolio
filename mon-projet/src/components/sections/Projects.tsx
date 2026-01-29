import { motion } from "framer-motion";
import type { Variants } from "framer-motion"; 
import { Github, ExternalLink } from "lucide-react";
import { PROJECTS } from "../../constants/data";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const cardVariants: Variants = {
  hidden: { y: 50, opacity: 0, scale: 0.9 },
  visible: { 
    y: 0, 
    opacity: 1, 
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

export const Projects = () => {
  return (
    <section id="projects" className="px-6 py-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* En-tête de section avec animation de slide */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Mes Projets<span className="text-brand-primary">.</span>
            </h2>
            <div className="p-3 w-15 h-15 bg-brand-primary/50  rounded-2xl">
              <img 
                src="https://img.icons8.com/?size=100&id=102552&format=png&color=000000" 
                alt="liste de projet" 
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>

        {/* Grille des projets avec effet de cascade (Stagger) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -15 }}
              className="group relative flex flex-col rounded-[2.5rem] text-brand-accent overflow-hidden border-2 border-slate-500 dark:border-white/10 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-brand-primary/30"
            >
              {/* Conteneur Image avec zoom */}
              <div className="relative aspect-video overflow-hidden">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-10"
                />
                
                {/* Overlay au hover */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-6">
                  <motion.a 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.github} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white dark:bg-slate-900 rounded-2xl shadow-lg hover:text-brand-primary transition-colors text-slate-900 dark:text-white"
                  >
                    <Github size={24} />
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 0.9 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.demo} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white dark:bg-slate-900 rounded-2xl shadow-lg hover:text-brand-primary transition-colors text-slate-900 dark:text-white"
                  >
                    <ExternalLink size={24} />
                  </motion.a>
                </div>
              </div>

              {/* Contenu textuel */}
              <div className="p-8 flex flex-col flex-grow relative">
                {/* Badge Icône flottant */}
                <div className="absolute -top-10 right-8 bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-xl -2 -2-slate-100 dark:border-white/10">
                  <img src={project.icon} alt="project icon" className="w-8 h-8" loading="lazy"/>
                </div>

                <h3 className="text-2xl font-black mb-4 dark:text-white text-slate-900 group-hover:text-brand-primary transition-colors tracking-tight">
                  {project.title}
                </h3>
                
                <p className="text-slate-700 dark:text-slate-300 text-sm mb-8 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tags de technologies */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-4 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-xl bg-slate-100 dark:bg-white/10 text-black dark:text-slate-300 border-2 border-slate-300 dark:border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;