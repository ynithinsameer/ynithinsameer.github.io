import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Briefcase, ChevronRight } from "lucide-react";

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
    detailedDescription: `I'm currently applying machine learning to student admission data, which has improved prediction accuracy by 23%. This helps the university make more informed decisions about enrollment strategies.

I've created several interactive Tableau dashboards that make complex data accessible to stakeholders across departments. These visualizations have transformed how the university approaches student engagement by revealing patterns that weren't visible in raw data.

My work includes developing 5 Salesforce dashboards that provide real-time insights into key metrics, enabling administrators to track trends and make data-driven decisions more efficiently.`,
    skills: ["Python", "Machine Learning", "Tableau", "Salesforce", "Data Analysis"],
  },
  {
    id: 2,
    company: "Erasmus.AI",
    position: "Data Scientist",
    period: "August 2024 - December 2024",
    description: "Capstone Project - ClimateGPT Development",
    detailedDescription: `I designed and built the core function calling architecture for ClimateGPT using Python. This system enables the AI to access over 60 specialized climate analysis functions through a unified interface, making complex climate data accessible through natural language.

I developed an intelligent query router that connects ClimateGPT to climate databases from NOAA, NASA, and the World Bank. This allows users to analyze climate data through conversational queries rather than complex technical commands.

As Product Owner in our Agile team of 4, I guided technical design decisions and implemented modular data processing pipelines. These pipelines power ClimateGPT's ability to automatically analyze climate impacts across different regions and timeframes.`,
    skills: ["Python", "Natural Language Processing", "API Development", "Climate Data Analysis", "Agile", "Product Management"],
  },
  {
    id: 3,
    company: "GMU",
    position: "Machine Learning Research Associate",
    period: "August 2023 - August 2024",
    description: "Research on Consumer Behavior Analysis using ML",
    detailedDescription: `I conducted advanced statistical analyses on India's largest household survey dataset, covering 174,000+ households across 27 states. Using R and Python, I uncovered a 12% decrease in spending patterns following app bans through techniques like CEM, difference-in-difference analysis, and weighted regression.

I designed machine learning models that achieved 85% accuracy in forecasting consumer behavior trends. To handle the massive dataset efficiently, I optimized preprocessing workflows using PySpark, which significantly improved performance for our ML pipeline.

Throughout the project, I validated findings against published research and communicated key performance indicators to stakeholders, translating complex statistical results into actionable insights.`,
    skills: ["Python", "R", "PySpark", "Statistical Analysis", "Machine Learning", "Big Data", "Research"],
  },
  {
    id: 4,
    company: "DigiTran Solutions",
    position: "Software Engineer Intern",
    period: "May 2021 - Jul 2021",
    description: "AI and Computer Vision Development",
    detailedDescription: `I worked on developing an AI-based system for object detection, avoidance, and measurement. This involved implementing computer vision algorithms and integrating them with existing software infrastructure.

I created comprehensive technical documentation that explained the system architecture and implementation details. This documentation became a valuable resource for the team and future developers working on the project.

This internship gave me hands-on experience with practical applications of AI and computer vision technologies in a real-world setting, bridging the gap between theoretical knowledge and industry implementation.`,
    skills: ["Python", "Computer Vision", "AI", "Technical Documentation"],
  },
  {
    id: 5,
    company: "The Sparks Foundation",
    position: "Data Analyst Intern",
    period: "Jan 2021 - Feb 2021",
    description: "Data Analysis and Visualization",
    detailedDescription: `I performed in-depth analysis on various datasets to extract meaningful patterns and insights. By applying advanced analytical techniques, I improved prediction accuracy by 13% compared to previous methods.

I focused on enhancing data visualization approaches to communicate findings more effectively. This involved creating intuitive visual representations that made complex data relationships clear to non-technical stakeholders.

The experience strengthened my skills in transforming raw data into actionable business intelligence through a combination of statistical analysis and effective visualization techniques.`,
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
          className="text-center mb-12"
        >
          <h1 className="text-3xl font-bold mb-3">Work Experience</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey in machine learning and data science.
            Select an experience to view details.
          </p>
        </motion.div>

        {/* Desktop layout: side-by-side, Mobile layout: stacked */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr,1.5fr] gap-8 flex-1">
          {/* Timeline - Left Side on Desktop, Top on Mobile */}
          <div className="relative overflow-hidden flex flex-col">
            {/* Timeline connecting line */}
            <div className="absolute left-[30px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#FEC6A1]/10 via-[#FEC6A1]/30 to-[#FEC6A1]/10"></div>
            
            <div className="space-y-8 overflow-y-auto pr-4 pt-4 pl-2 md:max-h-[calc(100vh-250px)]">
              {experiences.map((exp, index) => (
                <div key={exp.id}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative group"
                    onClick={() => setActiveExperience(exp)}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-6 top-6 -translate-x-1/2 -translate-y-1/2 z-10">
                      <motion.div 
                        className={`w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                          activeExperience?.id === exp.id 
                            ? 'border-[#FEC6A1] bg-[#FEC6A1]/20 scale-110' 
                            : 'border-muted-foreground/30 bg-background group-hover:border-[#FEC6A1]/50'
                        }`}
                        whileHover={{ scale: 1.1 }}
                      >
                        <motion.div 
                          className={`w-[8px] h-[8px] rounded-full transition-all duration-300 ${
                            activeExperience?.id === exp.id 
                              ? 'bg-[#FEC6A1]' 
                              : 'bg-muted-foreground/30 group-hover:bg-[#FEC6A1]/50'
                          }`}
                        />
                      </motion.div>
                    </div>
                    
                    {/* Content card */}
                    <div 
                      className={`ml-[45px] p-5 rounded-lg cursor-pointer transition-all duration-300 transform border ${
                        activeExperience?.id === exp.id 
                          ? 'bg-[#FEC6A1]/5 border-[#FEC6A1] shadow-md -translate-y-1' 
                          : 'hover:bg-card/80 border-transparent hover:border-[#FEC6A1]/20 hover:shadow-sm hover:-translate-y-0.5'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          <div className={`p-2 rounded-full mr-3 ${
                            activeExperience?.id === exp.id 
                              ? 'bg-[#FEC6A1]/10 text-[#FEC6A1]' 
                              : 'bg-muted/30 text-muted-foreground group-hover:bg-[#FEC6A1]/5 group-hover:text-[#FEC6A1]'
                          }`}>
                            <Briefcase className="w-4 h-4" />
                          </div>
                          <h3 className={`font-medium transition-colors ${
                            activeExperience?.id === exp.id 
                              ? 'text-[#FEC6A1]' 
                              : 'group-hover:text-[#FEC6A1]'
                          }`}>
                            {exp.position}
                          </h3>
                        </div>
                        <ChevronRight 
                          className={`w-5 h-5 transition-transform duration-300 ${
                            activeExperience?.id === exp.id 
                              ? 'rotate-90 text-[#FEC6A1]' 
                              : 'text-muted-foreground group-hover:text-[#FEC6A1]'
                          }`}
                        />
                      </div>
                      
                      <div className="ml-9">
                        <div className="flex items-center text-sm text-muted-foreground mb-2">
                          <Calendar className="w-3.5 h-3.5 mr-1.5 inline" />
                          <span>{exp.period}</span>
                        </div>
                        <p className="text-sm font-medium mb-1">{exp.company}</p>
                        <p className="text-sm text-muted-foreground">{exp.description}</p>
                        
                        {/* Preview skills */}
                        <div className="flex flex-wrap gap-1 mt-3">
                          {exp.skills.slice(0, 2).map((skill, idx) => (
                            <span 
                              key={idx} 
                              className={`text-xs px-2 py-0.5 rounded-full ${
                                activeExperience?.id === exp.id 
                                  ? 'bg-[#FEC6A1]/10 text-[#FEC6A1]' 
                                  : 'bg-muted/30 text-muted-foreground'
                              }`}
                            >
                              {skill}
                            </span>
                          ))}
                          {exp.skills.length > 2 && (
                            <span 
                              className={`text-xs px-2 py-0.5 rounded-full ${
                                activeExperience?.id === exp.id 
                                  ? 'bg-[#FEC6A1]/10 text-[#FEC6A1]' 
                                  : 'bg-muted/30 text-muted-foreground'
                              }`}
                            >
                              +{exp.skills.length - 2}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Mobile Experience Detail - Show directly below the selected experience */}
                  <AnimatePresence>
                    {activeExperience?.id === exp.id && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden ml-[45px] mt-3 mb-6 overflow-hidden"
                      >
                        <div className="p-6 rounded-xl border border-[#FEC6A1]/10 bg-card/50 backdrop-blur-sm shadow-md">
                          <div className="space-y-4">
                            {activeExperience.detailedDescription.split('\n').map((paragraph, idx) => (
                              paragraph.trim() && (
                                <motion.p 
                                  key={idx} 
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: idx * 0.1 }}
                                  className="text-sm text-muted-foreground"
                                >
                                  {paragraph}
                                </motion.p>
                              )
                            ))}
                          </div>

                          <div className="mt-6">
                            <h3 className="text-sm font-medium mb-3">Skills & Technologies</h3>
                            <div className="flex flex-wrap gap-2">
                              {activeExperience.skills.map((skill, index) => (
                                <motion.span
                                  key={skill}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ duration: 0.3, delay: index * 0.05 }}
                                  className="px-2.5 py-1 rounded-full text-xs bg-[#FEC6A1]/10 text-[#FEC6A1] border border-[#FEC6A1]/20"
                                >
                                  {skill}
                                </motion.span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Details - Right Side on Desktop, Hidden on Mobile */}
          <div className="relative hidden md:block h-[calc(100vh-250px)]">
            <div className="sticky top-24">
              <AnimatePresence mode="wait">
                {activeExperience && (
                  <motion.div
                    key={activeExperience.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="p-8 rounded-xl border border-[#FEC6A1]/10 bg-card/50 backdrop-blur-sm overflow-y-auto shadow-md"
                    style={{ maxHeight: 'calc(100vh - 250px)' }}
                  >
                    <div className="mb-8">
                      <div className="inline-block p-2.5 rounded-lg bg-[#FEC6A1]/10 text-[#FEC6A1] mb-4">
                        <Briefcase className="w-5 h-5" />
                      </div>
                      <h2 className="text-2xl font-bold mb-2">{activeExperience.position}</h2>
                      <div className="flex items-center text-muted-foreground">
                        <span className="font-medium">{activeExperience.company}</span>
                        <span className="mx-2">•</span>
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1.5 inline" />
                          {activeExperience.period}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4 mb-8">
                      {activeExperience.detailedDescription.split('\n').map((paragraph, idx) => (
                        paragraph.trim() && (
                          <motion.p 
                            key={idx} 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="text-muted-foreground"
                          >
                            {paragraph}
                          </motion.p>
                        )
                      ))}
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-4">Skills & Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        {activeExperience.skills.map((skill, index) => (
                          <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            whileHover={{ y: -2, scale: 1.05 }}
                            className="px-3 py-1 rounded-full text-sm bg-[#FEC6A1]/10 text-[#FEC6A1] border border-[#FEC6A1]/20"
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
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background-color: rgba(254, 198, 161, 0.2);
          border-radius: 20px;
          border: transparent;
        }
        ::-webkit-scrollbar-thumb:hover {
          background-color: rgba(254, 198, 161, 0.4);
        }
      `}</style>
    </div>
  );
};

export default ExperiencePage;
