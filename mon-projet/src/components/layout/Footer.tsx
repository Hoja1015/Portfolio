import { motion } from "framer-motion";
import { SOCIALS, NAV_LINKS } from "../../constants/data";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-20 pt-20 pb-10 px-6 border-t border-slate-200 dark:border-white/10 bg-white dark:bg-[#030303] overflow-hidden">
      {/* Effet de lumière en fond */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-primary to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Section 1 : Branding */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-black tracking-tighter"
            >
              HojDEV<span className="text-brand-primary">.</span>
            </motion.div>
            <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xs text-center md:text-left leading-relaxed">
              Développeur Fullstack passionné par la création d'interfaces numériques modernes et performantes.
            </p>
          </div>

          {/* Section 2 : Navigation Rapide */}
          <div className="flex flex-col items-center space-y-4">
            <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-widest text-xs">Navigation</h4>
            <nav className="flex flex-wrap justify-center gap-6">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href}
                  className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-brand-primary dark:hover:text-brand-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Section 3 : Social & Action */}
          <div className="flex flex-col items-center md:items-end space-y-6">
            <div className="flex gap-4">
              {SOCIALS.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.link}
                  whileHover={{ y: -5 }}
                  className="p-3 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 transition-all shadow-sm"
                >
                  <img src={social.icon} alt={social.name} className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
            
            {/* Bouton Remonter en haut */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 px-6 py-3 rounded-2xl bg-brand-primary/10 text-brand-primary font-bold text-sm border border-brand-primary/20 hover:bg-brand-primary hover:text-white transition-all"
            >
              Remonter
              <img 
                src="https://img.icons8.com/fluency/48/up.png" 
                className="w-5 h-5 group-hover:-translate-y-1 transition-transform" 
                alt="Scroll up"
              />
            </motion.button>
          </div>
        </div>

        {/* Ligne finale : Copyright */}
        <div className="pt-8 border-t border-slate-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
          <p>© {new Date().getFullYear()} HojDEV — Fait avec ❤️ en France</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-primary transition-colors">Mentions Légales</a>
          </div>
        </div>
      </div>
    </footer>
  );
};