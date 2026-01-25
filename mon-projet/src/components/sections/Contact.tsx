import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { CONTACT_METHODS } from "../../constants/data";

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Utilisation d'une ref pour cibler le formulaire proprement
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);

    try {
      // Remplace ces 3 valeurs par les tiennes dans ton dashboard EmailJS
      await emailjs.sendForm(
        "service_09adk4u",   
        "template_vaep0nq", 
        formRef.current,
        "Z7nOQqSTeENB0jhkP" 
      );

      setIsSuccess(true);
      formRef.current.reset();
    } catch (error) {
      console.error("Erreur lors de l'envoi EmailJS:", error);
      alert("Une erreur est survenue, veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="px-6 py-24 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* En-tête */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl text-center font-black mb-6 dark:text-white tracking-tight">
            Un projet ? <span className="text-brand-primary">Parlons-en.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Liste des infos */}
          <div className="lg:col-span-1 space-y-6">
            {CONTACT_METHODS.map((method, index) => (
              <motion.a
                key={index}
                href={method.link}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 10 }}
                className="flex items-center gap-6 p-6 rounded-[2rem] border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-xl group transition-all"
              >
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${method.color} blur-xl opacity-10 group-hover:opacity-30 transition-opacity`} />
                  <img src={method.icon} alt={method.label} className="w-14 h-14 relative z-10" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">{method.label}</p>
                  <p className="font-bold text-slate-900 dark:text-white">{method.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Formulaire */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 p-8 md:p-12 rounded-[2.5rem] border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-xl relative overflow-hidden shadow-2xl shadow-brand-primary/5"
          >
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-center py-10"
                >
                  <img src="https://img.icons8.com/fluency/96/ok.png" className="w-20 h-20 mx-auto mb-6" alt="Succès" />
                  <h3 className="text-2xl font-black mb-2">Message envoyé !</h3>
                  <p className="text-slate-500 mb-8">Merci! Je reviens vers vous très rapidement.</p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="text-brand-primary font-bold hover:underline"
                  >
                    Envoyer un autre message
                  </button>
                </motion.div>
              ) : (
                <form 
                  key="form" 
                  ref={formRef} // Ajout de la ref ici
                  className="space-y-6" 
                  onSubmit={handleSubmit}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest ml-2 text-slate-400">Nom et prénom</label>
                      <input 
                        name="name" required // Assure-toi que "name" correspond à ton template EmailJS
                        type="text" 
                        placeholder="Tapez votre nom ici ..."
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:text-black dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 focus:border-brand-primary outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest ml-2 text-slate-400">Email</label>
                      <input 
                        name="email" required // Correspond à {{email}} dans ton template
                        type="email" 
                        placeholder="email@example.com"
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:text-black dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 focus:border-brand-primary outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest ml-2 text-slate-400">Message</label>
                    <textarea 
                      name="message" required // Correspond à {{message}} dans ton template
                      rows={4}
                      placeholder="Comment puis-je vous aider ?"
                      className="w-full px-6 py-4 rounded-3xl bg-slate-50 dark:text-black dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 focus:border-brand-primary outline-none transition-all resize-none"
                    />
                  </div>

                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-3 bg-brand-primary text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-brand-primary/20 hover:shadow-brand-primary/40 disabled:opacity-50 transition-all group"
                  >
                    {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                    {!isSubmitting && (
                      <img src="https://img.icons8.com/fluency/48/sent.png" className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    )}
                  </motion.button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
