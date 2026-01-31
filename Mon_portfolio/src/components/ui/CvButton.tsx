import { motion } from "framer-motion";
import { Download } from "lucide-react";

export const CvButton = () => {
  return (
    <motion.a
      href="/CV_Hoja_KONGBO.alternance.pdf"
      download="CV_Hoja_KONGBO.pdf"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex w-full justify-center items-center gap-2 px-5 py-2.5 bg-brand-primary text-white rounded-full font-semibold shadow-lg shadow-brand-primary/20 hover:shadow-brand-primary/40 transition-all duration-300"
    >
      <span className="text-sm text-center">Mon CV</span>
      <motion.div
        animate={{ y: [0, 2, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <Download size={18} />
      </motion.div>
    </motion.a>
  );
};