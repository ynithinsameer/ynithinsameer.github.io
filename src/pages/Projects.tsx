
import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ResearchCard, { Research } from "@/components/ResearchCard";
import TimelineItem, { Milestone } from "@/components/TimelineItem";
import ProjectCard, { Project } from "@/components/ProjectCard";

const projects: Project[] = [
  {
    id: 1,
    title: "Neural Network Framework",
    description: "A lightweight neural network framework built from scratch for educational purposes.",
    image: "/placeholder.svg",
    demoUrl: "https://example.com/neural-network-demo",
    repoUrl: "https://github.com/example/neural-network",
    technologies: ["Python", "NumPy", "matplotlib"]
  },
  {
    id: 2,
    title: "Sentiment Analysis API",
    description: "An API for real-time sentiment analysis of social media posts and customer feedback.",
    image: "/placeholder.svg",
    demoUrl: "https://example.com/sentiment-demo",
    repoUrl: "https://github.com/example/sentiment-api",
    technologies: ["Python", "FastAPI", "BERT", "Docker"]
  },
  {
    id: 3,
    title: "Medical Image Classifier",
    description: "A deep learning model to classify medical images and assist in diagnosis.",
    image: "/placeholder.svg",
    demoUrl: "https://example.com/medical-classifier",
    repoUrl: "https://github.com/example/medical-image-classifier",
    technologies: ["Python", "TensorFlow", "OpenCV", "Flask"]
  },
  {
    id: 4,
    title: "Stock Price Predictor",
    description: "Time series forecasting model for stock price prediction using LSTM networks.",
    image: "/placeholder.svg",
    demoUrl: "https://example.com/stock-predictor",
    repoUrl: "https://github.com/example/stock-predictor",
    technologies: ["Python", "Keras", "Pandas", "Plotly"]
  },
  {
    id: 5,
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for visualizing and exploring complex datasets.",
    image: "/placeholder.svg",
    demoUrl: "https://example.com/data-dashboard",
    repoUrl: "https://github.com/example/data-dashboard",
    technologies: ["React", "D3.js", "Python", "Flask"]
  }
];

const milestones: Milestone[] = [
  {
    id: 1,
    title: "Best Paper Award at AI Conference",
    date: "November 2022",
    description: "Received the Best Paper Award for research on novel transformer architectures for improved NLP performance."
  },
  {
    id: 2,
    title: "Joined AI Solutions Inc.",
    date: "January 2020",
    description: "Started as a Senior ML Engineer, leading a team focused on NLP and recommendation systems."
  },
  {
    id: 3,
    title: "MSc in Computer Science",
    date: "May 2018",
    description: "Graduated with distinction, specializing in Machine Learning and Artificial Intelligence."
  },
  {
    id: 4,
    title: "First Research Publication",
    date: "September 2017",
    description: "Published first research paper on deep learning techniques for medical image analysis."
  },
  {
    id: 5,
    title: "Started Open Source Contributions",
    date: "June 2016",
    description: "Began contributing to major open-source ML libraries and frameworks."
  }
];

const researchPapers: Research[] = [
  {
    id: 1,
    title: "Improved Transformer Architecture for Efficient NLP",
    authors: ["Your Name", "Collaborator One", "Collaborator Two"],
    publication: "International Conference on ML",
    year: "2022",
    abstract: "In this paper, we present a novel transformer architecture that reduces computational complexity while maintaining or improving performance on standard NLP benchmarks. Our approach introduces a sparse attention mechanism that selectively focuses on the most relevant parts of the input sequence, reducing the quadratic complexity of standard attention to near-linear.",
    link: "https://example.com/paper1"
  },
  {
    id: 2,
    title: "Deep Learning Approaches for Medical Image Analysis",
    authors: ["Your Name", "Collaborator Three"],
    publication: "Journal of Medical AI",
    year: "2020",
    abstract: "We explore the application of convolutional neural networks to medical image analysis, with a focus on X-ray and MRI scan classification. Our model achieves state-of-the-art accuracy on benchmark datasets while requiring significantly less training data through the use of novel data augmentation techniques.",
    link: "https://example.com/paper2"
  },
  {
    id: 3,
    title: "Ensemble Methods for Time Series Forecasting in Financial Markets",
    authors: ["Your Name", "Collaborator Four", "Collaborator Five"],
    publication: "Financial Data Science Conference",
    year: "2019",
    abstract: "This paper presents an ensemble approach combining LSTM networks, Prophet, and traditional ARIMA models for improved time series forecasting in financial markets. We demonstrate that our ensemble method outperforms individual models and better captures market volatility during unusual economic conditions.",
    link: "https://example.com/paper3"
  }
];

const ProjectsPage = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl font-bold mb-3">Projects & Research</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my projects, research papers, and career milestones.
          </p>
        </motion.div>
        
        <Tabs defaultValue="projects" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12">
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="research">Research Papers</TabsTrigger>
            <TabsTrigger value="timeline">Timeline</TabsTrigger>
          </TabsList>
          
          <TabsContent value="projects" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <ProjectCard project={project} index={index} />
                </motion.div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="research" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {researchPapers.map((paper, index) => (
                <motion.div
                  key={paper.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ResearchCard research={paper} />
                </motion.div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="timeline" className="space-y-8">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-1/2 top-0 -translate-x-1/2 w-0.5 h-full bg-muted" />
              
              {/* Timeline items */}
              <div className="space-y-0">
                {milestones.map((milestone, index) => (
                  <TimelineItem key={milestone.id} milestone={milestone} index={index} />
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProjectsPage;
