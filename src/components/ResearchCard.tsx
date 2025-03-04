import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export interface Research {
  id: number;
  title: string;
  authors: string[];
  publication: string;
  year: string;
  abstract: string;
  link: string;
}

interface ResearchCardProps {
  research: Research;
  index?: number;
}

const ResearchCard = ({ research, index = 0 }: ResearchCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col transform hover:-translate-y-1">
        <div className="p-6 flex-grow flex flex-col">
          <h3 className="font-bold text-lg mb-2 group-hover:text-[#FEC6A1] transition-colors">{research.title}</h3>
          <p className="text-muted-foreground text-sm mb-2">{research.authors.join(", ")}</p>
          
          <div className="text-sm text-muted-foreground mb-4">
            <span>{research.publication} · {research.year}</span>
          </div>
          
          <p className="text-sm line-clamp-4 mb-4 flex-grow">{research.abstract}</p>
          
          <a 
            href={research.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-sm text-[#FEC6A1] hover:underline group/button mt-auto"
          >
            Read Paper
            <ExternalLink className="h-4 w-4 ml-1 transition-transform group-hover/button:translate-x-1" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ResearchCard;
