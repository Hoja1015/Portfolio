import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { NAV_LINKS } from "../../constants/data";
import { AnimatedLink } from "../ui/AnimatedLink";
import { CvButton } from "../ui/CvButton";

/**
 * Composant Navbar : Navigation principale de l'application.
 * Gère le mode sombre, le menu mobile, le changement d'apparence au scroll
 * et affiche une barre de progression de lecture.
 */
export const Navbar = () => {
  // --- ÉTATS (STATES) ---
  
  // Gère l'apparence de la navbar (transparent vs flou/réduit) lors du scroll
  const [isScrolled, setIsScrolled] = useState(false);
  // Suit l'onglet actuellement actif pour l'animation visuelle
  const [activeTab, setActiveTab] = useState(NAV_LINKS[0].href);
  // Contrôle l'ouverture/fermeture du menu burger sur mobile
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);   // thème (Sombre/Clair)

  // --- HOOKS DE SCROLL (FRAMER MOTION) ---
  
  // Récupère la progression du défilement vertical (de 0 à 1)
  const { scrollYProgress } = useScroll();

  // --- EFFETS (SIDE EFFECTS) ---

  /**
   * Écoute le scroll de la fenêtre pour modifier l'état `isScrolled`.
   * On ajoute l'écouteur au montage et on le nettoie au démontage.
   */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- LOGIQUE MÉTIER ---

  /**
   * Alterne entre le mode sombre et clair.
   * Utilise l'attribut 'data-theme' pour piloter les thèmes DaisyUI/Tailwind.
   */
  const toggleTheme = () => {
    const nextMode = !isDarkMode;
    setIsDarkMode(nextMode);
    document.documentElement.setAttribute("data-theme", nextMode ? "dark" : "light");
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "py-3 glass-effect" : "py-6 bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO : Animé à l'apparition */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold tracking-tighter"
        >
          Hoj<span className="text-brand-primary">DEV</span>.
        </motion.div>

        {/* NAVIGATION DESKTOP : Liens avec pilule animée */}
        <div className="hidden md:flex items-center gap-2 bg-white/5 p-1 rounded-full border border-white/10">
          {NAV_LINKS.map((link) => (
            <AnimatedLink
              key={link.href}
              {...link}
              isActive={activeTab === link.href}
              onClick={() => setActiveTab(link.href)}
            />
          ))}
        </div>

        {/* ACTIONS DROITE (Desktop) : Thème + Bouton CV */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 hover:bg-brand-primary rounded-full transition-colors"
            aria-label="Changer de thème"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <CvButton />
        </div>

        {/* BOUTON MENU MOBILE (Burger) */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleTheme} className="p-2  hover:bg-brand-primary">
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* MENU MOBILE : Déroulant avec animation AnimatePresence */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-bg border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href}
                  className="text-lg font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <hr className="border-white/10" />
              <div className="flex flex-row justify-center items-center gap-4">
                <CvButton />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* BARRE DE PROGRESSION DE LECTURE :
          S'étire selon le pourcentage de scroll de la page */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-primary origin-left"
        style={{ scaleX: scrollYProgress }}
      />
    </nav>
  );
};