// Type pour la gestion du thème
export type Theme = "dark" | "light";

// Interface pour les liens de navigation
export interface NavLink {
  label: string;
  href: string;
}

// Interface pour les composants de section (comme Hero)
export interface SectionProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
}