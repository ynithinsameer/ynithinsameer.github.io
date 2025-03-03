
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Experience } from "@/components/ExperienceCard";
import ExperienceDetail from "@/components/ExperienceDetail";
import { ChevronRight, Briefcase } from "lucide-react";

const experiences: Experience[] = [
  {
    id: 1,
    company: "AI Solutions Inc.",
    position: "Senior ML Engineer",
    period: "2020 - Present",
    description: "Lead machine learning engineer working on NLP and recommendation systems.",
    detailedDescription: "As a Senior ML Engineer at AI Solutions, I lead a team of 4 developers working on state-of-the-art NLP models and recommendation systems. My responsibilities include designing and implementing ML pipelines, optimizing model performance, and collaborating with cross-functional teams to deploy solutions to production. I've successfully improved the accuracy of our text classification model by 15% and reduced inference time by 30% through model optimization and quantization techniques. In addition, I mentor junior engineers and contribute to company-wide ML best practices.",
    skills: ["Python", "TensorFlow", "PyTorch", "NLP", "Kubernetes", "Docker", "AWS", "MLOps"],
    logo: "/placeholder.svg"
  },
  {
    id: 2,
    company: "DataTech Labs",
    position: "Data Scientist",
    period: "2018 - 2020",
    description: "Built predictive models and data pipelines for financial services.",
    detailedDescription: "At DataTech Labs, I developed and deployed machine learning models for financial risk assessment and fraud detection. I designed and implemented end-to-end data pipelines to process and analyze large volumes of transaction data. My work directly contributed to a 25% reduction in fraud losses for our largest client. I also collaborated with the product team to create intuitive visualizations and dashboards to communicate model insights to non-technical stakeholders.",
    skills: ["Python", "scikit-learn", "SQL", "Apache Spark", "Data Visualization", "Time Series Analysis"],
    logo: "/placeholder.svg"
  },
  {
    id: 3,
    company: "Health Analytics Corp",
    position: "ML Research Intern",
    period: "2017 - 2018",
    description: "Researched and implemented computer vision algorithms for medical imaging.",
    detailedDescription: "During my internship at Health Analytics Corp, I focused on applying computer vision techniques to medical imaging data. I implemented a convolutional neural network that achieved 92% accuracy in identifying abnormalities in X-ray images. I also contributed to a research paper published in a top medical AI conference. Working closely with medical professionals, I gained valuable domain knowledge and learned how to translate clinical requirements into technical solutions.",
    skills: ["Python", "Computer Vision", "TensorFlow", "OpenCV", "Medical Imaging", "Research"],
    logo: "/placeholder.svg"
  },
  {
    id: 4,
    company: "Quantum Computing Project",
    position: "Research Assistant",
    period: "2016 - 2017",
    description: "Assisted in quantum computing research and algorithm development.",
    detailedDescription: "As a Research Assistant at the Quantum Computing Project, I assisted senior researchers in developing and testing quantum computing algorithms. I implemented quantum algorithms using Qiskit and helped design experiments to evaluate their performance. I also contributed to the development of a quantum simulator that allowed for faster testing of quantum algorithms on classical hardware. This role strengthened my understanding of quantum computing principles and provided me with hands-on experience in this emerging field.",
    skills: ["Quantum Computing", "Qiskit", "Python", "Linear Algebra", "Algorithm Design", "Research"],
    logo: "/placeholder.svg"
  }
];

const ExperiencePage = () => {
  const [activeExperience, setActiveExperience] = useState<Experience | null>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  
  // Handle smooth scroll when clicking a timeline item
  useEffect(() => {
    if (activeExperience && timelineRef.current) {
      const element = document.getElementById(`exp-${activeExperience.id}`);
      if (element) {
        const container = timelineRef.current;
        const elementRect = element.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        
        // Calculate the scroll position to center the element
        const scrollLeft = element.offsetLeft - (container.clientWidth / 2) + (element.clientWidth / 2);
        
        container.scrollTo({
          left: scrollLeft,
          behavior: 'smooth'
        });
      }
    }
  }, [activeExperience]);
  
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl font-bold mb-4">Work Experience</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey in machine learning and data science.
            Select an experience to view details.
          </p>
        </motion.div>
        
        {/* Timeline View */}
        <div className="mb-16">
          <div 
            ref={timelineRef}
            className="relative flex overflow-x-auto pb-12 hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Main timeline line */}
            <div className="absolute h-0.5 bg-muted top-[70px] left-0 right-0 z-0"></div>
            
            {/* Timeline items */}
            <div className="flex space-x-12 px-8 min-w-max">
              {experiences.map((exp, index) => (
                <motion.div
                  id={`exp-${exp.id}`}
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`relative mt-4 w-[220px] cursor-pointer smoother-transition ${
                    activeExperience?.id === exp.id 
                      ? "scale-105" 
                      : "hover:scale-102"
                  }`}
                  onClick={() => setActiveExperience(activeExperience?.id === exp.id ? null : exp)}
                >
                  {/* Year marker */}
                  <div className="text-sm font-medium mb-3">{exp.period}</div>
                  
                  {/* Timeline dot with pulse effect */}
                  <div className="absolute -top-[13px] left-0 z-10">
                    <motion.div 
                      className={`w-6 h-6 rounded-full flex items-center justify-center
                                ${activeExperience?.id === exp.id 
                                  ? "bg-primary" 
                                  : "bg-muted/80 hover:bg-primary/50"
                                } smoother-transition`}
                      whileHover={{ scale: 1.2 }}
                    >
                      <Briefcase className="w-3 h-3 text-background" />
                    </motion.div>
                    
                    {/* Vertical line connecting to card */}
                    <div className="w-0.5 h-8 bg-muted/60 ml-[11px]"></div>
                  </div>
                  
                  {/* Experience card */}
                  <div 
                    className={`p-4 rounded-lg border smoother-transition
                              ${activeExperience?.id === exp.id 
                                ? "border-primary shadow-md bg-primary/5" 
                                : "border-muted hover:border-primary/30"
                              }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="bg-muted/30 w-10 h-10 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0 mt-1">
                        {exp.logo ? (
                          <img src={exp.logo} alt={exp.company} className="w-6 h-6 object-contain" />
                        ) : (
                          <div className="w-6 h-6 bg-primary/20 rounded-full" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-medium text-base">{exp.position}</h3>
                        <p className="text-sm text-muted-foreground">{exp.company}</p>
                      </div>
                    </div>
                    
                    <div className="mt-3 text-xs text-muted-foreground">{exp.description}</div>
                    
                    <div className="mt-3 flex flex-wrap gap-1">
                      {exp.skills.slice(0, 3).map(skill => (
                        <span key={skill} className="text-[10px] px-1.5 py-0.5 rounded-full bg-muted/50">
                          {skill}
                        </span>
                      ))}
                      {exp.skills.length > 3 && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-muted/50">
                          +{exp.skills.length - 3}
                        </span>
                      )}
                    </div>
                    
                    <div 
                      className={`mt-3 flex items-center justify-end text-xs font-medium
                                ${activeExperience?.id === exp.id 
                                  ? "text-primary" 
                                  : "text-muted-foreground"
                                }`}
                    >
                      <span>Details</span>
                      <ChevronRight className={`w-4 h-4 transition-transform ${activeExperience?.id === exp.id ? "rotate-90" : ""}`} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Experience details */}
        <AnimatePresence mode="wait">
          {activeExperience && (
            <motion.div 
              key={activeExperience.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="rounded-lg p-6 border bg-card/50 backdrop-blur-sm"
            >
              <ExperienceDetail experience={activeExperience} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ExperiencePage;
