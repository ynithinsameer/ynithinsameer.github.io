import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Info } from "lucide-react";
import { motion } from "framer-motion";

export interface Project {
  id: number;
  title: string;
  description: string;
  shortDescription: string;
  detailedDescription: string;
  image: string;
  demoUrl?: string;
  repoUrl?: string;
  technologies: string[];
  keyFeatures?: string[];
  featured?: boolean;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  onViewDetails: (project: Project) => void;
}

const ProjectCard = ({ project, index, onViewDetails }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Use different animation styles for each card
  const transformStyles = [
    "hover:rotate-1 hover:scale-105",
    "hover:-rotate-1 hover:scale-105",
    "hover:translate-y-[-5px] hover:scale-105",
    "hover:translate-x-[5px] hover:scale-105",
    "hover:translate-x-[-5px] hover:scale-105",
  ];
  
  // Get the style for this card based on index
  const cardStyle = transformStyles[index % transformStyles.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div 
        className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col transform hover:-translate-y-1"
        onClick={() => onViewDetails(project)}
      >
        <div className="relative h-48 overflow-hidden">
          {project.featured && (
            <div className="absolute top-3 right-3 z-10">
              <span className="px-3 py-1 rounded-full text-xs bg-[#FEC6A1] text-white font-medium">
                Featured
              </span>
            </div>
          )}
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        
        <div className="p-6 flex-grow flex flex-col">
          <h3 className="font-bold text-xl mb-2 group-hover:text-[#FEC6A1] transition-colors">{project.title}</h3>
          <p className="text-muted-foreground text-sm mb-4">{project.shortDescription}</p>
          
          <div className="flex flex-wrap gap-1 mt-auto mb-4">
            {project.technologies.slice(0, 3).map((tech, i) => (
              <span key={i} className="text-xs px-2 py-0.5 rounded-full bg-[#FEC6A1]/10 text-[#FEC6A1]">
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-[#FEC6A1]/10 text-[#FEC6A1]">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
          
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(project);
            }}
            className="flex items-center text-sm text-[#FEC6A1] hover:underline group/button"
          >
            Details
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 ml-1 transition-transform group-hover/button:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
