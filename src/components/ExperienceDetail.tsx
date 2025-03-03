
import { motion } from "framer-motion";
import { Experience } from "./ExperienceCard";

interface ExperienceDetailProps {
  experience: Experience | null;
}

const ExperienceDetail = ({ experience }: ExperienceDetailProps) => {
  if (!experience) return null;
  
  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-2xl font-medium">{experience.position}</h3>
          <p className="text-muted-foreground">{experience.company} · {experience.period}</p>
        </div>
        
        <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center overflow-hidden">
          {experience.logo ? (
            <img src={experience.logo} alt={experience.company} className="w-8 h-8 object-contain" />
          ) : (
            <div className="w-8 h-8 bg-primary/20 rounded-full" />
          )}
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="prose prose-sm dark:prose-invert max-w-none"
      >
        <p>{experience.detailedDescription}</p>
      </motion.div>
      
      <div>
        <h4 className="text-sm font-medium mb-3">Skills & Technologies</h4>
        <div className="flex flex-wrap gap-2">
          {experience.skills.map((skill, index) => (
            <motion.span 
              key={skill}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="px-3 py-1 rounded-full text-xs bg-primary/10 text-primary"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetail;
