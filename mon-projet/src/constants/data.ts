

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Accueil", href: "#home" },
  { label: "A propos", href: "#about" },
  { label: "Compétences", href: "#skills" },
  { label: "Projets", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

// Données skills
interface typeSkills {
  category: string;
  icon: string;
  items: string[];
  color: string;
}

export const SKILLS:typeSkills[] = [
  {
    category: "Frontend",
    icon: "https://img.icons8.com/?size=100&id=fD9sSf7OsNzI&format=png&color=000000.png",
    items: ["Javascript", "TypeScript", "React", "Vue.js", "Angular", "Tailwind", "Boostrap"],
    color: "from-blue-500 to-cyan-800"
  },
  {
    category: "Backend",
    icon: "https://img.icons8.com/fluency/96/node-js.png",
    items: ["Node.js", "FastApi", "Python"],
    color: "from-green-500 to-emerald-800"
  },
  {
    category: "Outils",
    icon: "https://img.icons8.com/fluency/96/docker.png",
    items: [ "Git/GitHub", "Vercel", "Laragon", "Figma"],
    color: "from-blue-500 to-indigo-800"
  },
  {
    category: "En cours",
    icon: "https://img.icons8.com/?size=100&id=2msi5wIpPPec&format=png&color=000000",
    items: [ "Express", "Symphony", "Docker", "Framer Motion" ],
    color: "from-pink-500 to-rose-900"
  }
];

// Données projects
interface typeProjects {
 title: string;
 description: string;
  tags: string[];
 github: string;
 demo: string;
 image: string;
 icon: string;
}


export const PROJECTS : typeProjects[] = [
  {
    title: "Calendrier",
    description: "Ce projet consiste en la création d'une application d'agenda personnalisée alliant affichage dynamique et gestion de tâches. L'objectif était de concevoir une interface utilisateur (GUI) fluide permettant de naviguer dans le temps tout en offrant la possibilité de planifier des événements spécifiques pour chaque jour.",
    tags: ["python", "tkinter", "Calendar", "Datetime"],
    github: "#",
    demo: "#",
    image: "https://i.ibb.co/hRyLmFBv/calendrier-tkinter.png",
    icon: "https://img.icons8.com/?size=100&id=fYg8cp9LAp4Q&format=png&color=000000"
  },
  {
    title: "Portfolio Moderne",
    description: "Mon site qui met en valeur mon identité, ce que je recherche et surtout ce que je sais faire avec les technologies que j'ai appris ",
    tags: ["React", "Typescript", "Tailwind", "Framer-Motion", "vercel"],
    github: "https://github.com/Hoja1015/Portfolio",
    demo: "#",
    image: "https://i.ibb.co/7JxzLS5h/portfolio.png",
    icon: "https://img.icons8.com/fluency/48/artificial-intelligence.png"
  },
  {
    title: "Dashboard Admin",
    description: "Application PWA permettant une gestion de projet agile avec drag-and-drop et notifications push.",
    tags: ["Vue.js", "javascript", "Node.js", "Github"],
    github: "https://github.com/ASSOLOU/projet-fil-rouge",
    demo: "#",
    image: "https://i.ibb.co/mL4BNZQ/Dashboard-vue.png",
    icon: "https://img.icons8.com/fluency/48/todo-list.png"
  }
];

// Données stats
 interface typeStat {
label: string;
value: string;
icon: string
 }

export const STATS: typeStat[] = [
  { label: "Années d'expérience", value: "2+", icon: "https://img.icons8.com/fluency/48/guarantee.png" },
  { label: "Projets terminés", value: "10+", icon: "https://img.icons8.com/fluency/48/opened-folder.png" },
  { label: "Technologies maîtrisées", value: "10+", icon: "https://img.icons8.com/fluency/48/layers.png" },
];

interface typeContact {
  label:string;
  value: string;
  icon: string;
  color: string;
  link?: string;

}

export const CONTACT_METHODS: typeContact[] = [
  {
    label: "Email",
    value: "kongbo.hoja@gmail.com",
    icon: "https://img.icons8.com/fluency/96/mail.png",
    color: "from-blue-400 to-indigo-700",
    link: "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
  },
  {
    label: "LinkedIn",
    value: "Hoja Le brillant KONGBO BINDRO",
    icon: "https://img.icons8.com/fluency/96/linkedin.png",
    color: "from-blue-600 to-blue-800",
    link: "https://www.linkedin.com/in/hoja-le-brillant-kongbo-bindro-0848b1284/"
  },
  {
    label: "Localisation",
    value: "Orléans, Paris, France",
    icon: "https://img.icons8.com/fluency/96/marker.png",
    color: "from-orange-400 to-red-700",
  }
];

// Données footer
interface typeFooter {
  name: string ;
  icon: string;
  link: string
}

export const SOCIALS: typeFooter[] = [
  { name: "GitHub", icon: "https://img.icons8.com/fluency/48/github.png", link: "https://github.com/" },
  { name: "LinkedIn", icon: "https://img.icons8.com/fluency/48/linkedin.png", link: "https://www.linkedin.com/in/hoja-le-brillant-kongbo-bindro-0848b1284/" },
  { name: "Instagram", icon: "https://img.icons8.com/fluency/48/instagram-new.png", link: "https://www.instagram.com/hoja_lb/" },
];
