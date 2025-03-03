
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string;
  detailedDescription: string;
  skills: string[];
  logo: string;
}

interface ExperienceCardProps {
  experience: Experience;
  isActive: boolean;
  onClick: () => void;
}

const ExperienceCard = ({ experience, isActive, onClick }: ExperienceCardProps) => {
  return (
    <Card 
      className={`cursor-pointer border transition-all duration-300 ${
        isActive 
          ? "border-[#FEC6A1] dark:border-[#FDE1D3]" 
          : "hover:border-[#FEC6A1]/40 dark:hover:border-[#FDE1D3]/40"
      }`}
      onClick={onClick}
    >
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <div className="flex items-center space-x-4">
          <div className="bg-muted w-10 h-10 rounded-full flex items-center justify-center overflow-hidden">
            {experience.logo ? (
              <img src={experience.logo} alt={experience.company} className="w-8 h-8 object-contain" />
            ) : (
              <div className="w-8 h-8 bg-[#FEC6A1]/20 dark:bg-[#FDE1D3]/20 rounded-full" />
            )}
          </div>
          <div>
            <CardTitle className="text-base">{experience.position}</CardTitle>
            <CardDescription>{experience.company}</CardDescription>
          </div>
        </div>
        <div className="flex items-center">
          <span className="text-xs text-muted-foreground mr-2">{experience.period}</span>
          <ChevronRight className={`w-5 h-5 transition-transform ${isActive ? "rotate-90 text-[#FEC6A1] dark:text-[#FDE1D3]" : ""}`} />
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="text-sm text-muted-foreground mb-2">{experience.description}</div>
        <div className="flex flex-wrap gap-1">
          {experience.skills.slice(0, 5).map(skill => (
            <span key={skill} className="text-xs px-2 py-1 rounded-full bg-muted">
              {skill}
            </span>
          ))}
          {experience.skills.length > 5 && (
            <span className="text-xs px-2 py-1 rounded-full bg-muted">
              +{experience.skills.length - 5}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;
