import { motion } from "framer-motion";
import { STATS } from "../../constants/data"
import logo from "../../assets/Hoja.jpeg"


export const AboutMe = () => {
  return (
    <section id="about" className="px-8 py-24 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-4">
          <h2 className="text-4xl md:text-5xl text-center font-black mb-6 text-center tracking-tight ">
            A Propos de moi<span className="text-brand-primary">.</span>
          </h2>
          <div className="p-3 w-15 h-15 bg-brand-primary/10 rounded-2xl">
            <img src="https://img.icons8.com/?size=100&id=Plgmgi7oHlL6&format=png&color=000000"  alt="icon" />
            </div>
          </div>      
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Partie Gauche : Image / Visuel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden border-2 border-brand-primary/20 shadow-2xl shadow-brand-primary/10">
              <img 
                src={logo}
                alt="Portrait de HojDEV" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* Partie Droite : Texte */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">
                De l'Anatomie à <span className="text-brand-primary">l'Algorithme</span>
              </h2>
              <div className="h-1.5 w-50 bg-brand-primary rounded-full mb-8" />
            </div>

            <div className="space-y-4 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                Ma famille m'avait destiné à l'étude de medecine, j'ai choisi l'architecture des systèmes.
                Aujourd'hui je suis + qu'heureux d'avoir suivi ma propre voie.
              </p>
              <p>
                Maîtriser le code, c’est d’abord savoir lire entre les lignes. Passionné de lecture et d'analyse, 
                j'ai appris que la puissance d'un système ne réside pas dans l'accumulation d'outils, mais dans l'harmonie de leur assemblage.
                Ce qui me passionne ? Ce moment précis où des technologies distinctes s'unissent pour résoudre un problème complexe.
                C'est là que ma curiosité s'anime. Je ne me contente pas de 'faire fonctionner' : je m'exige un code propre, lisible et pérenne. Pour moi,
                l'autonomie est le moteur de ma progression, mais c'est au sein d'une équipe que mes idées prennent leur véritable envergure.
                Aujourd'hui, je dispose des fondations et de l'élan nécessaires. Il ne manque plus qu'une mise en situation professionnelle pour transformer ce potentiel en impact concret.
                Donnez-moi ce coup de pouce, et je me charge de l'envol. Je vous invite à découvrir la trajectoire de mes premiers projets ci-dessous.
              </p>
            </div>

            {/* Grille de stats rapides */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4  ">
              {STATS.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex flex-col items-center text-center"
                >
                  <img src={stat.icon} alt={stat.label} className="w-10 h-10 mb-2" />
                  <span className="text-2xl font-black text-brand-primary">{stat.value}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};