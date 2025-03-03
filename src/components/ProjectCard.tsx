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
      className={`relative transition-all duration-300 ${cardStyle} ${project.featured ? 'col-span-1 md:col-span-2 lg:col-span-1' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className={`h-full overflow-hidden ${project.featured ? 'border-[#FF7F50]' : 'border-[#FF7F50]/40 dark:border-[#FDE1D3]/40'}`}>
        <div className="relative overflow-hidden" style={{ height: "180px" }}>
          <img 
            src={project.image || "/placeholder.svg"} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
            style={{ transform: isHovered ? "scale(1.1)" : "scale(1)" }}
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          
          {project.featured && (
            <div className="absolute top-2 right-2 bg-[#FF7F50] text-white text-xs px-2 py-1 rounded-full">
              Featured
            </div>
          )}
        </div>

        <CardHeader className="pb-2">
          <CardTitle className="text-lg">{project.title}</CardTitle>
          <CardDescription className="line-clamp-2">{project.shortDescription}</CardDescription>
        </CardHeader>
        
        <CardContent>
          <div className="flex flex-wrap gap-1 mt-2">
            {project.technologies.slice(0, 3).map(tech => (
              <span key={tech} className="text-xs px-2 py-1 rounded-full bg-[#FF7F50]/10 text-[#FF7F50]">
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-xs px-2 py-1 rounded-full bg-[#FF7F50]/10 text-[#FF7F50]">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </CardContent>
        
        <CardFooter className="flex justify-between">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => onViewDetails(project)}
            className="text-[#FF7F50]"
          >
            <Info className="w-4 h-4 mr-2" /> Details
          </Button>
          
          {project.demoUrl && (
            <Button variant="outline" size="sm" asChild className="border-[#FF7F50]/40">
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" /> Demo
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
