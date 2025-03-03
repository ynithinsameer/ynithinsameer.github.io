import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard, { Project } from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import ResearchCard from "@/components/ResearchCard";
import TimelineItem from "@/components/TimelineItem";

const projects: Project[] = [
  {
    id: 1,
    title: "AI-Powered Multilingual Chatbot",
    shortDescription: "A sophisticated ML-based chatbot using Next.js and RAG, supporting multiple languages.",
    description: "Headstarter Fellowship Project (Jul 2024 - Aug 2024)",
    detailedDescription: "• Engineered a sophisticated ML-based chatbot using Next.js and executed Retrieval Augmented Generation (RAG), increasing query response accuracy by 22% across multiple languages.\n• Implemented RAG architecture using Langchain and Pinecone, significantly expanding the chatbot's knowledge base and improving its ability to provide contextually relevant responses.\n• Composed a custom LLM routing mechanism using Groq's Mixtral-8x7B and OpenAI's GPT-4, optimizing response times and expanding the knowledge base for contextually relevant responses.",
    image: "/assets/images/chatbot.png",
    technologies: ["Next.js", "RAG", "Langchain", "Pinecone", "Groq", "OpenAI"],
    keyFeatures: [
      "22% increase in query accuracy",
      "Custom LLM routing mechanism",
      "Multilingual support",
      "Contextual responses"
    ],
    featured: true
  },
  {
    id: 2,
    title: "Recidivism Prediction Model",
    shortDescription: "ML model to predict criminal recidivism with ethical considerations.",
    description: "College Project (Jan 2023 - May 2023)",
    detailedDescription: "• Developed a predictive model achieving 76.5% accuracy in identifying recidivism risk factors using R, employing Stepwise Selection and Chi-Square analysis.\n• Identified key insights into the correlation between work history and recidivism using a Decision tree, shedding light on racial disparities in post-release supervision.\n• Implemented Decision Tree analysis using R, identifying critical employment thresholds that differentiate recidivism probabilities, with employment status influencing recidivism predictions at a key threshold of 64.3% days employed.",
    image: "/assets/images/recidivism-model.png",
    technologies: ["R", "Chi-Square Analysis", "Stepwise Selection", "Decision Trees", "Statistical Analysis"],
    keyFeatures: [
      "76.5% prediction accuracy",
      "Bias mitigation techniques",
      "Employment threshold analysis",
      "Ethical AI implementation"
    ],
    featured: true
  },
  {
    id: 3,
    title: "RecipeMate",
    shortDescription: "A robust recipe recommendation system using NLP techniques.",
    description: "Personal Project (Jan 2024 - May 2024)",
    detailedDescription: "• Engineered a robust recipe recommendation system using TF-IDF vectorization and OpenAI's GPT-3.5-turbo model, delivering personalized and culturally adapted recipe suggestions through an intuitive Streamlit frontend.\n• Designed and implemented a robust AI system architecture for RecipeMate, incorporating A/B testing methodologies to measure and optimize recommendation accuracy, resulting in a 15% increase in user engagement and recipe discovery.",
    image: "/assets/images/recipemate.png",
    technologies: ["Streamlit", "Python", "NLP", "OpenAI", "TF-IDF"],
    keyFeatures: [
      "Personalized recommendations",
      "Cultural recipe adaptation",
      "A/B testing optimization",
      "15% increase in engagement"
    ]
  },
  {
    id: 4,
    title: "Celestial Object Classification",
    shortDescription: "ML-powered classification of celestial objects from SDSS data.",
    description: "Research Project (Aug 2023 - Dec 2023)",
    detailedDescription: "• Achieved 93.15% accuracy in classifying Sloan Survey celestial objects by optimizing ML models using PyTorch in Databricks, validating redshift's significance via EDA and Deep Learning.",
    image: "/assets/images/celestial.png",
    technologies: ["Databricks", "Python", "Keras", "PyTorch", "Deep Learning"],
    keyFeatures: [
      "93.15% classification accuracy",
      "Deep Learning models",
      "EDA and validation",
      "Redshift analysis"
    ]
  },
  {
    id: 5,
    title: "Superstore Regression Analysis",
    shortDescription: "Profit prediction model for a superstore using tree-based models.",
    description: "Data Analysis Project (Aug 2022 - Dec 2022)",
    detailedDescription: "• Executed regression models using Python to predict profit at a superstore utilizing Extra Trees Regressor to predict profit; identified tree-based models as superior, surpassing other models by 15% in accuracy.\n• Analyzed consumer patterns thereby observing a correlation between consumer buying and profit. Applied label encoding to facilitate the ideal schema for dealing with datatype issues in regression analysis.",
    image: "/assets/images/superstore.png",
    technologies: ["Python", "Data Analysis", "Regression", "Extra Trees", "Label Encoding"],
    keyFeatures: [
      "15% accuracy improvement",
      "Consumer pattern analysis",
      "Label encoding optimization",
      "Tree-based model superiority"
    ]
  }
];

// Research Papers Data
export interface Research {
  id: number;
  title: string;
  authors: string[];
  publication: string;
  year: string;
  abstract: string;
  link: string;
}

const researchPapers: Research[] = [
  {
    id: 1,
    title: "College Exam Allocation Using MongoDB and Python3",
    authors: ["Nithin Sameer Yerramilli", "et al."],
    publication: "2021 2nd Global Conference for Advancement in Technology (GCAT)",
    year: "2021",
    abstract: "This paper presents an automated system for scheduling examination activities using object-oriented programming methods and MongoDB. It demonstrates the benefits of using modern database technologies for efficient exam management in educational institutions.",
    link: "https://ieeexplore.ieee.org/document/9587589"
  },
  {
    id: 2,
    title: "Automatic Exam Answer Checker using OCR and Sentence Embedding",
    authors: ["Nithin Sameer Yerramilli", "et al."],
    publication: "2021 International Conference on Disruptive Technologies (CENTCON)",
    year: "2021",
    abstract: "This research introduces an innovative system for automating the evaluation of exam answer scripts using Optical Character Recognition (OCR) and sentence embedding techniques. It aims to reduce the time and resources spent on manual answer sheet evaluation.",
    link: "https://ieeexplore.ieee.org/document/9688008"
  }
];

// Milestones Data
export interface Milestone {
  id: number;
  title: string;
  date: string;
  description: string;
}

const milestones: Milestone[] = [
  {
    id: 1,
    title: "Masters in Data Analytics Engineering",
    date: "Jan 2023 - Dec 2024",
    description: "Pursuing advanced studies at George Mason University with a stellar GPA of 3.96/4.0, focusing on cutting-edge data analytics techniques and AI applications."
  },
  {
    id: 2,
    title: "Active Leaders Program",
    date: "Sep 2023 - Nov 2023",
    description: "Completed an intensive leadership program at George Mason University, developing skills in conflict management, civic engagement, and ethical leadership."
  },
  {
    id: 3,
    title: "Software Engineer Intern",
    date: "May 2021 - Jul 2021",
    description: "At DigiTran Solutions, developed an AI-based object detection, avoidance, and measurement system. Created technical documentation and gained hands-on experience in AI and computer vision technologies."
  },
  {
    id: 4,
    title: "Data Analyst Intern",
    date: "Jan 2021 - Feb 2021",
    description: "At The Sparks Foundation, conducted in-depth data analysis, improving prediction accuracy by 13% and enhancing data visualization techniques."
  },
  {
    id: 5,
    title: "Bachelor of Computer Science Engineering",
    date: "Aug 2018 - Jun 2022",
    description: "Completed undergraduate studies at Dayanada Sagar University with a strong GPA of 3.50/4.0, laying the foundation for a career in technology and data science."
  },
  {
    id: 6,
    title: "TEDxDSU Coordinator",
    date: "Dec 2018 - Nov 2019",
    description: "Led end-to-end event management for TEDxDSU, overseeing curation, sponsorships, and logistics. Coordinated volunteers and managed technical operations for a successful event."
  }
];

const ProjectsPage = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleViewDetails = (project: Project) => {
    setActiveProject(project);
    setIsModalOpen(true);
  };
  
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl font-bold mb-3">Portfolio</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my projects, research papers, and key milestones.
          </p>
        </motion.div>

        <Tabs defaultValue="projects" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="papers">Research Papers</TabsTrigger>
            <TabsTrigger value="milestones">Milestones</TabsTrigger>
          </TabsList>
          
          <TabsContent value="projects" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  index={index} 
                  onViewDetails={handleViewDetails}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="papers" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {researchPapers.map((paper) => (
                <ResearchCard key={paper.id} research={paper} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="milestones" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {milestones.map((milestone) => (
                <div key={milestone.id} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 transition-transform duration-300">
                  <div className="text-4xl mb-6">
                    {milestone.id === 1 ? "🎓" : 
                     milestone.id === 2 ? "🏆" : 
                     milestone.id === 3 ? "🤖" : 
                     milestone.id === 4 ? "📊" : 
                     milestone.id === 5 ? "🎓" : 
                     milestone.id === 6 ? "🎤" : ""}
                  </div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 text-xl mb-3">{milestone.date}</h3>
                  <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-4">{milestone.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{milestone.description}</p>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        {/* Project Modal */}
        <ProjectModal 
          project={activeProject} 
          isOpen={isModalOpen} 
          onClose={handleCloseModal} 
        />
      </div>
    </div>
  );
};

export default ProjectsPage;
