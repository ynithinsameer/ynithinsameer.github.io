import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Briefcase } from "lucide-react";

export interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string;
  detailedDescription: string;
  skills: string[];
  logo?: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    company: "GMU",
    position: "Data Analyst Intern",
    period: "August 2024 - Present",
    description: "Graduate Studies - Data Analysis and Machine Learning",
    detailedDescription: `• Implementing machine learning models to analyze student admission data, improving prediction accuracy by 23%.\n
• Creating interactive dashboards using Tableau (Salesforce) to visualize key metrics, increasing data accessibility and enabling data-driven student engagement strategies.\n
• Executed 5 interactive Salesforce dashboards, improving stakeholder data accessibility and enabling more informed decision-making through visualized key metrics and trends.`,
    skills: ["Python", "Machine Learning", "Tableau", "Salesforce", "Data Analysis"],
  },
  {
    id: 2,
    company: "Erasmus.AI",
    position: "Data Scientist",
    period: "August 2024 - December 2024",
    description: "Capstone Project - ClimateGPT Development",
    detailedDescription: `• Built ClimateGPT's core function calling architecture using Python, enabling the AI model to execute 60+ specialized climate analysis functions through a unified tool interface.\n
• Developed an intelligent query router and flexible tool calling system that allows ClimateGPT to analyze climate data from NOAA, NASA and World Bank databases through natural language queries.\n
• Led technical design decisions as Product Owner in an Agile team of 4, implementing modular data processing pipelines that power ClimateGPT's automated climate impact analysis capabilities.`,
    skills: ["Python", "Natural Language Processing", "API Development", "Climate Data Analysis", "Agile", "Product Management"],
  },
  {
    id: 3,
    company: "GMU",
    position: "Machine Learning Research Associate",
    period: "August 2023 - August 2024",
    description: "Research on Consumer Behavior Analysis using ML",
    detailedDescription: `• Led advanced statistical analyses on India's largest household survey dataset (174,000+ households across 27 states) using R and Python, uncovering a 12% decrease in spending patterns post-app bans through CEM, difference-in-difference analysis, and regression with survey weighting.\n
• Designed and implemented machine learning models achieving 85% accuracy in forecasting consumer behavior trends. Optimized big data preprocessing workflows using PySpark, enhancing efficiency for downstream ML tasks.\n
• Validated results from Research papers and Journals. Communicated findings to stakeholders detailing KPI's.`,
    skills: ["Python", "R", "PySpark", "Statistical Analysis", "Machine Learning", "Big Data", "Research"],
  },
  {
    id: 4,
    company: "DigiTran Solutions",
    position: "Software Engineer Intern",
    period: "May 2021 - Jul 2021",
    description: "AI and Computer Vision Development",
    detailedDescription: `• Developed an AI-based object detection, avoidance, and measurement system.\n
• Created comprehensive technical documentation for system architecture and implementation.\n
• Gained hands-on experience in AI and computer vision technologies.`,
    skills: ["Python", "Computer Vision", "AI", "Technical Documentation"],
  },
  {
    id: 5,
    company: "The Sparks Foundation",
    position: "Data Analyst Intern",
    period: "Jan 2021 - Feb 2021",
    description: "Data Analysis and Visualization",
    detailedDescription: `• Conducted in-depth data analysis on various datasets.\n
• Improved prediction accuracy by 13% through advanced analytical techniques.\n
• Enhanced data visualization methods for better insight communication.`,
    skills: ["Data Analysis", "Python", "Data Visualization", "Predictive Modeling"],
  }
];

const ExperiencePage = () => {
  const [activeExperience, setActiveExperience] = useState<Experience | null>(experiences[0]);

  return (
    <div className="min-h-screen pt-24 pb-16 flex flex-col">
      <div className="container px-4 md:px-6 flex-1 flex flex-col">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold mb-4">Work Experience</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey in machine learning and data science.
            Select an experience to view details.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr,1.5fr] gap-8 flex-1 min-h-[600px]">
          {/* Timeline - Scrollable */}
          <div className="relative overflow-hidden flex flex-col">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-muted"></div>
            
            <div className="space-y-6 overflow-y-auto pr-4 custom-scrollbar" style={{ maxHeight: 'calc(100vh - 250px)' }}>
              {experiences.map((exp) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="relative"
                  onClick={() => setActiveExperience(exp)}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full border-2 bg-background transition-colors duration-300"
                       style={{
                         borderColor: activeExperience?.id === exp.id ? '#FF7F50' : 'var(--muted)',
                         backgroundColor: activeExperience?.id === exp.id ? '#FF7F50' : 'var(--background)'
                       }}
                  />
                  
                  {/* Content card */}
                  <div 
                    className={`ml-16 p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                      activeExperience?.id === exp.id 
                        ? 'bg-[#FF7F50]/5 border-[#FF7F50]' 
                        : 'hover:bg-muted/5 border-transparent'
                    } border`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">{exp.position}</h3>
                      <ChevronRight 
                        className={`w-5 h-5 transition-transform duration-300 ${
                          activeExperience?.id === exp.id ? 'rotate-90 text-[#FF7F50]' : ''
                        }`}
                      />
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">{exp.company}</p>
                    <p className="text-xs text-muted-foreground">{exp.period}</p>
                    <p className="text-sm text-muted-foreground mt-2">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience Details - Fixed */}
          <div className="relative h-[calc(100vh-250px)]">
            <div className="sticky top-24">
              <AnimatePresence mode="wait">
                {activeExperience && (
                  <motion.div
                    key={activeExperience.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="p-6 rounded-lg border bg-card/50 backdrop-blur-sm overflow-y-auto custom-scrollbar"
                    style={{ maxHeight: 'calc(100vh - 250px)' }}
                  >
                    <div className="mb-6">
                      <h2 className="text-2xl font-semibold mb-2">{activeExperience.position}</h2>
                      <p className="text-muted-foreground">
                        {activeExperience.company} · {activeExperience.period}
                      </p>
                    </div>

                    <div className="prose prose-sm dark:prose-invert max-w-none mb-6">
                      {activeExperience.detailedDescription.split('\n').map((paragraph, idx) => (
                        <p key={idx} className="mb-2">{paragraph}</p>
                      ))}
                    </div>

                    <div>
                      <h3 className="text-sm font-medium mb-3">Skills & Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        {activeExperience.skills.map((skill, index) => (
                          <motion.span
                            key={skill}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="px-3 py-1 rounded-full text-xs bg-[#FF7F50]/10 text-[#FF7F50]"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(255, 127, 80, 0.2);
          border-radius: 20px;
          border: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: rgba(255, 127, 80, 0.4);
        }
      `}</style>
    </div>
  );
};

export default ExperiencePage;
