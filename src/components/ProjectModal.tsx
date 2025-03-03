import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Project } from "@/pages/Projects";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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
                className="object-cover w-full h-full"
              />
            </div>
          )}

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Project Overview</h3>
              <div className="prose prose-sm dark:prose-invert max-w-none">
                {project.detailedDescription.split('\n').map((paragraph, idx) => (
                  <p key={idx} className="mb-2">{paragraph}</p>
                ))}
              </div>
            </div>

            {project.keyFeatures && project.keyFeatures.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Key Features</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {project.keyFeatures.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <h3 className="text-lg font-semibold mb-2">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                  >
                    <Badge variant="outline" className="bg-[#FF7F50]/10 text-[#FF7F50] border-[#FF7F50]/20">
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex justify-between pt-4">
              {project.repoUrl && (
                <Button variant="outline" size="sm" asChild>
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" /> View Code
                  </a>
                </Button>
              )}
              
              {project.demoUrl && (
                <Button variant="default" size="sm" asChild className="bg-[#FF7F50] hover:bg-[#FF7F50]/90">
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal; 