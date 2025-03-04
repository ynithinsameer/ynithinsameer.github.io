import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface Project {
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

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
          <DialogDescription className="text-base text-muted-foreground">
            {project.shortDescription}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4">
          {project.image && (
            <div className="relative w-full h-64 mb-6 overflow-hidden rounded-lg">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">Overview</h3>
              <p className="text-muted-foreground">{project.description}</p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Details</h3>
              <div className="whitespace-pre-line text-muted-foreground">
                {project.detailedDescription}
              </div>
            </div>
            
            {project.keyFeatures && project.keyFeatures.length > 0 && (
              <div>
                <h3 className="text-lg font-medium mb-2">Key Features</h3>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  {project.keyFeatures.map((feature, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}
            
            <div>
              <h3 className="text-lg font-medium mb-2">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <motion.span 
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="px-3 py-1 rounded-full text-sm bg-[#FEC6A1]/10 text-[#FEC6A1]"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex gap-4 mt-8">
            {project.demoUrl && (
              <a 
                href={project.demoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <Button className="bg-[#FEC6A1] hover:bg-[#FEC6A1]/90 text-white group">
                  Live Demo
                  <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
            )}
            
            {project.repoUrl && (
              <a 
                href={project.repoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <Button variant="outline" className="border-[#FEC6A1]/20 hover:border-[#FEC6A1]/50 hover:bg-[#FEC6A1]/5 group">
                  View Code
                  <Github className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal; 