import { Navbar } from "./components/layout/Navbar";
import { motion, LayoutGroup } from "framer-motion";
import Hero from "./components/sections/Hero";  
import { Skills } from "./components/sections/Skills";
import Contact  from "./components/sections/Contact"
import Projects from "./components/sections/Projects";
import { Footer } from "./components/layout/Footer";
import { AboutMe } from "./components/sections/AboutMe";




function App() {
  return (
    <LayoutGroup>
      <div className="relative min-h-screen font-sans selection:bg-brand-primary/30">
        
        {/* Barre de navigation */}
        <Navbar />

        {/* Conteneur principal avec espacement pour la Navbar fixée */}
        <main className="pt-20">
          
          {/* Section HERO */}
          <section id="home" className="min-h-[90vh] flex items-center justify-center px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center"
            >
             <Hero />

            </motion.div>

          </section>

          {/* Espace pour les autres sections */}
          <div>
            <AboutMe />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
          </div>

        </main>

        {/* Un petit rappel visuel de cohérence : le fond animé discret */}
        <div className="fixed inset-0 z-[-1] pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-brand-primary/5 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-brand-secondary/5 blur-[120px]" />
        </div>

      </div>
    </LayoutGroup>
  );
}

export default App;