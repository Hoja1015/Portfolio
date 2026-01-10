import { motion } from "framer-motion";

interface AnimatedLinkProps {
  label: string;
  href: string;
  isActive: boolean;
  onClick: () => void;
}

export const AnimatedLink = ({ label, href, isActive, onClick }: AnimatedLinkProps) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="relative px-4 py-2 text-sm font-medium transition-colors hover:text-brand-primary group"
    >
      {label}
      {isActive && (
        <motion.span
          layoutId="nav-pill" /* Magie de Framer : l'élément glisse d'un lien à l'autre */
          className="absolute inset-0 z-[-1] bg-white/10 rounded-full"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
    </a>
  );
};