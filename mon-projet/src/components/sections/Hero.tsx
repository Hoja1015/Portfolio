import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      {/* Badge animé */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-3 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-sm mb-6"
      >
        <span>Hoja Le brillant KONGBO</span>
      </motion.div>

      {/* Titre Principal */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-3xl md:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600"
      >
        Développeur Front End <br />
        <span className="text-brand-primary">Aspirant Full-stack</span>
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="max-w-2xl text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed"
      >
        Etudiant en 2e année de bachelor à Ecole-IT, je recheche une opportunité d'alternance ou de stage pour la rentrée de septembre 2026-2027.<br />
        Très motivé à évoluer dans un cadre professionnel pour apprendre et apporter une valeur ajoutée aux prochains defis à reléver
      </motion.p>

      {/* Boutons d'action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex flex-wrap justify-center gap-4"
      >
        <a
          href="#contact"
          className="flex items-center gap-2 px-8 py-4 bg-brand-primary text-white rounded-full font-semibold hover:bg-brand-primary/90 transition-all hover:scale-105"
        >
          Me contacter
          <ArrowRight size={18} />
        </a>

      </motion.div>
    </div>
  );
};

export default Hero;