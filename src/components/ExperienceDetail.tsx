
import { Experience } from "./ExperienceCard";

interface ExperienceDetailProps {
  experience: Experience | null;
}

const ExperienceDetail = ({ experience }: ExperienceDetailProps) => {
  if (!experience) return null;
  
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-medium">{experience.position}</h3>
        <p className="text-muted-foreground">{experience.company} · {experience.period}</p>
      </div>
      
      <div className="prose prose-sm dark:prose-invert max-w-none">
        <p>{experience.detailedDescription}</p>
      </div>
      
      <div>
        <h4 className="text-sm font-medium mb-3">Skills & Technologies</h4>
        <div className="flex flex-wrap gap-2">
          {experience.skills.map(skill => (
            <span key={skill} className="px-3 py-1 rounded-full text-xs bg-[#FEC6A1]/10 dark:bg-[#FDE1D3]/10 text-[#FEC6A1] dark:text-[#FDE1D3]">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetail;
