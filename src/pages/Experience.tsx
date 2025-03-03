
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ExperienceCard, { Experience } from "@/components/ExperienceCard";
import ExperienceDetail from "@/components/ExperienceDetail";

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
            Click on a card to view detailed information.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left side: Experience cards */}
          <motion.div 
            className={`space-y-4 ${activeExperience ? "md:col-span-1" : "md:col-span-3"}`}
            layout
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
          >
            {experiences.map((exp) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                layout
              >
                <ExperienceCard
                  experience={exp}
                  isActive={activeExperience?.id === exp.id}
                  onClick={() => {
                    if (activeExperience?.id === exp.id) {
                      setActiveExperience(null);
                    } else {
                      setActiveExperience(exp);
                    }
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
          
          {/* Right side: Experience details */}
          <AnimatePresence>
            {activeExperience && (
              <motion.div 
                className="md:col-span-2 bg-card rounded-lg p-6 border"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.3 }}
              >
                <ExperienceDetail experience={activeExperience} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
