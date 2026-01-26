import { motion, type Variants } from "framer-motion";
import { SKILLS } from "../../constants/data";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 1, ease: "easeOut", staggerChildren: 0.15 }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 1, y: 30 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

export const Skills = () => {
  return (
    <section id="skills" className="px-6 py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* En-tête avec animation */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Mes compétences<span className="text-brand-primary">.</span>
            </h2>
            <div className="p-3 w-15 h-15 bg-brand-primary/10 rounded-2xl dark:bg-brand-accent">
              <img 
                src="https://img.icons8.com/?size=100&id=j8sxugcI7DaI&format=png&color=000000" 
                alt="icon" 
              />
            </div>
          </div>
        </motion.div>

        {/* Grille animée */}
        <motion.div 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 dark:text-white"
        >
          {SKILLS.map((skill, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                transition: { duration: 0.6 } 
              }}
              className="relative group p-8 rounded-[2rem] bg-white text-black border border-slate-900 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-sm hover:shadow-2xl hover:shadow-brand-primary/10 transition-all"
            >
              {/* Effet de lueur en arrière-plan au hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity rounded-[2rem]`} />

              <div className="relative z-10">
                {/* Icône avec animation de flottement */}
                <motion.div 
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="mb-6 w-16 h-16"
                >
                  <img 
                    src={skill.icon} 
                    alt={skill.category} 
                    className="w-full h-full object-contain shadow-lg rounded-xl" 
                  />
                </motion.div>

                <h3 className="font-extrabold text-xl mb-4 text-black">
                  {skill.category}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span 
                      key={item} 
                      className="text-sm font-medium px-3 py-1 border-3 rounded-lg bg-slate-100 dark:bg-white/20 text-black dark:text-slate-300 border border-slate-200 dark:border-white/5"
                    >
                      {item}
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

export default Skills;