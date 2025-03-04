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
    detailedDescription: "I engineered a sophisticated chatbot using Next.js and implemented Retrieval Augmented Generation (RAG) to improve query response accuracy by 22% across multiple languages. This approach allowed the chatbot to provide more precise and contextually relevant answers to user queries.\n\nI built the RAG architecture using Langchain and Pinecone, which significantly expanded the chatbot's knowledge base beyond what traditional language models could access. This architecture enables the system to retrieve relevant information from various sources and incorporate it into responses.\n\nI also developed a custom LLM routing mechanism that intelligently switches between Groq's Mixtral-8x7B and OpenAI's GPT-4 models depending on the query type. This optimization improved response times while maintaining high-quality answers, making the chatbot both efficient and effective for real-world applications.",
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
    detailedDescription: "I developed a predictive model that achieved 76.5% accuracy in identifying recidivism risk factors using R. The model employed Stepwise Selection and Chi-Square analysis to identify the most significant variables affecting recidivism rates.\n\nThrough Decision Tree analysis, I uncovered important insights into the relationship between work history and recidivism. This analysis revealed concerning racial disparities in post-release supervision outcomes, highlighting the importance of addressing bias in criminal justice algorithms.\n\nOne of the most significant findings was identifying critical employment thresholds that differentiate recidivism probabilities. The analysis showed that employment status becomes a particularly strong predictor at a threshold of 64.3% days employed, providing actionable insights for reentry programs focused on reducing recidivism.",
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
    detailedDescription: "I built RecipeMate, a recipe recommendation system that uses TF-IDF vectorization and OpenAI's GPT-3.5-turbo model to deliver personalized cooking suggestions. The system analyzes user preferences and available ingredients to recommend recipes that are both practical and appealing.\n\nA key feature I implemented is cultural recipe adaptation, which adjusts recommendations based on regional preferences and ingredient availability. This makes the system more inclusive and globally relevant.\n\nI designed the system architecture with A/B testing methodologies built in from the start. This allowed me to measure and continuously optimize recommendation accuracy, resulting in a 15% increase in user engagement and recipe discovery compared to baseline recommendation approaches.",
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
    detailedDescription: "I developed a classification system for Sloan Digital Sky Survey celestial objects that achieved 93.15% accuracy. Working in Databricks, I optimized various machine learning models using PyTorch to identify the most effective approach for distinguishing between stars, galaxies, and quasars.\n\nA significant part of this project involved exploratory data analysis to validate the importance of redshift measurements in classification accuracy. This analysis confirmed that redshift is indeed a critical feature for accurate celestial object classification.\n\nThe deep learning models I implemented were able to identify subtle patterns in spectral data that traditional methods often miss, making this approach particularly valuable for astronomical research requiring precise object classification.",
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
    detailedDescription: "I developed regression models using Python to predict profit for a superstore business. After comparing multiple approaches, I found that the Extra Trees Regressor consistently outperformed other models, delivering 15% higher accuracy in profit predictions.\n\nThrough detailed analysis of consumer purchasing patterns, I identified several key correlations between buying behavior and profit margins. These insights provided actionable intelligence for inventory management and pricing strategies.\n\nTo address challenges with mixed data types, I implemented label encoding techniques that created an ideal schema for regression analysis. This approach allowed the models to effectively process categorical variables alongside numerical data, improving overall prediction quality.",
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
    abstract: "In this paper, I presented a system I developed for automating exam scheduling in educational institutions. The solution uses object-oriented programming principles and MongoDB to create a flexible and efficient exam management platform. My approach demonstrates how modern database technologies can significantly improve administrative processes in academic settings, reducing scheduling conflicts and optimizing resource allocation.",
    link: "https://ieeexplore.ieee.org/document/9587589"
  },
  {
    id: 2,
    title: "Automatic Exam Answer Checker using OCR and Sentence Embedding",
    authors: ["Nithin Sameer Yerramilli", "et al."],
    publication: "2021 International Conference on Disruptive Technologies (CENTCON)",
    year: "2021",
    abstract: "This research introduces a system I developed for automating exam answer evaluation using Optical Character Recognition (OCR) and sentence embedding techniques. The technology addresses a significant pain point in education by reducing the time instructors spend on manual grading. My approach combines computer vision with natural language processing to compare student answers against model solutions, providing consistent and objective assessment while freeing up valuable teaching resources.",
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
    description: "I'm currently pursuing my master's degree at George Mason University with a 3.96/4.0 GPA. My studies focus on advanced data analytics techniques and practical AI applications, with coursework that bridges theoretical concepts with real-world implementation challenges."
  },
  {
    id: 2,
    title: "Active Leaders Program",
    date: "Sep 2023 - Nov 2023",
    description: "I completed George Mason University's leadership development program, which strengthened my abilities in conflict resolution, civic engagement, and ethical leadership. The program provided practical frameworks that I've since applied to team projects and collaborative research initiatives."
  },
  {
    id: 3,
    title: "Software Engineer Intern",
    date: "May 2021 - Jul 2021",
    description: "At DigiTran Solutions, I developed an AI-based system for object detection and measurement. This internship gave me hands-on experience implementing computer vision algorithms in a production environment and documenting complex technical systems for diverse stakeholders."
  },
  {
    id: 4,
    title: "Data Analyst Intern",
    date: "Jan 2021 - Feb 2021",
    description: "During my internship at The Sparks Foundation, I improved prediction accuracy by 13% through advanced analytical techniques. I focused on creating more effective data visualizations that made complex findings accessible to decision-makers across the organization."
  },
  {
    id: 5,
    title: "Bachelor of Computer Science Engineering",
    date: "Aug 2018 - Jun 2022",
    description: "I completed my undergraduate studies at Dayanada Sagar University with a 3.50/4.0 GPA. My coursework established a strong foundation in computer science principles, algorithms, and software development practices that continue to inform my approach to data science and machine learning."
  },
  {
    id: 6,
    title: "TEDxDSU Coordinator",
    date: "Dec 2018 - Nov 2019",
    description: "I led the organization of TEDxDSU, managing everything from speaker curation and sponsorship acquisition to event logistics. This experience taught me how to coordinate cross-functional teams and deliver a complex event that showcased innovative ideas to our university community."
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
              {researchPapers.map((paper, index) => (
                <ResearchCard key={paper.id} research={paper} index={index} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="milestones" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col transform hover:-translate-y-1 p-8">
                    <div className="text-4xl mb-6">
                      {milestone.id === 1 ? "🎓" : 
                       milestone.id === 2 ? "🏆" : 
                       milestone.id === 3 ? "🤖" : 
                       milestone.id === 4 ? "📊" : 
                       milestone.id === 5 ? "🎓" : 
                       milestone.id === 6 ? "🎤" : ""}
                    </div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200 text-xl mb-3 group-hover:text-[#FEC6A1] transition-colors">{milestone.date}</h3>
                    <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-4">{milestone.title}</h4>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </motion.div>
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
