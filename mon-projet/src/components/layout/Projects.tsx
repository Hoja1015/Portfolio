import { motion } from "framer-motion";
import { Github, ExternalLink, Code2 } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
}

const Projects = ({ title, description, tags, imageUrl, githubUrl, liveUrl }: ProjectProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      animate={{ x: [0, 100, 0] }}
      className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-brand-primary/50 transition-colors"
    >
      {/* Image du projet avec overlay au hover */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
          {githubUrl && (
            <a href={githubUrl} className="p-2 bg-white rounded-full text-black hover:bg-brand-primary hover:text-white transition-colors">
              <Github size={20} />
            </a>
          )}
          {liveUrl && (
            <a href={liveUrl} className="p-2 bg-white rounded-full text-black hover:bg-brand-primary hover:text-white transition-colors">
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>

      {/* Contenu textuel */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <Code2 size={16} className="text-brand-primary" />
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Tags / Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="px-3 py-1 text-xs font-medium bg-brand-primary/10 text-brand-primary rounded-full border border-brand-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects