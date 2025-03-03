
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  demoUrl: string;
  repoUrl: string;
  technologies: string[];
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
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
    <div 
      className={`relative transition-all duration-300 ${cardStyle}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="h-full overflow-hidden border-[#FEC6A1]/40 dark:border-[#FDE1D3]/40">
        <div className="relative overflow-hidden" style={{ height: "160px" }}>
          <img 
            src={project.image || "/placeholder.svg"} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
            style={{ transform: isHovered ? "scale(1.1)" : "scale(1)" }}
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>

        <CardHeader className="pb-2">
          <CardTitle className="text-lg">{project.title}</CardTitle>
          <CardDescription className="line-clamp-2">{project.description}</CardDescription>
        </CardHeader>
        
        <CardContent>
          <div className="flex flex-wrap gap-1 mt-2">
            {project.technologies.map(tech => (
              <span key={tech} className="text-xs px-2 py-1 rounded-full bg-[#FEC6A1]/10 dark:bg-[#FDE1D3]/10 text-[#FEC6A1] dark:text-[#FDE1D3]">
                {tech}
              </span>
            ))}
          </div>
        </CardContent>
        
        <CardFooter className="flex justify-between">
          <Button variant="ghost" size="sm" asChild>
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" /> Code
            </a>
          </Button>
          
          <Button variant="outline" size="sm" asChild className="border-[#FEC6A1]/40 dark:border-[#FDE1D3]/40">
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" /> Demo
            </a>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProjectCard;
