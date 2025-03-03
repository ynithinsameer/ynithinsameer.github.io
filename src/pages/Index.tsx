
import { Button } from "@/components/ui/button";
import HexagonPortfolio, { PortfolioItem } from "@/components/HexagonPortfolio";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "ML Dashboard",
    image: "/placeholder.svg",
    url: "https://example.com/project1",
    color: "#F9A87B"
  },
  {
    id: 2,
    title: "Data Visualization App",
    image: "/placeholder.svg",
    url: "https://example.com/project2",
    color: "#F9B48E"
  },
  {
    id: 3,
    title: "Healthcare AI",
    image: "/placeholder.svg",
    url: "https://example.com/project3",
    color: "#F9A87B"
  },
  {
    id: 4,
    title: "NLP Research Tool",
    image: "/placeholder.svg",
    url: "https://example.com/project4",
    color: "#F9B48E"
  },
  {
    id: 5,
    title: "Computer Vision Demo",
    image: "/placeholder.svg",
    url: "https://example.com/project5",
    color: "#F9A87B"
  }
];

const skills = [
  "Python", "TensorFlow", "PyTorch", "scikit-learn", "R", 
  "SQL", "Data Visualization", "Deep Learning", "NLP", "Computer Vision"
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center pt-16 pb-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-center md:gap-16">
            {/* Left: Photo and Bio */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              className="flex-1 space-y-6"
            >
              <div className="relative h-[300px] w-[300px] mx-auto md:mx-0 overflow-hidden rounded-full border-4 border-primary dark:border-primary">
                <img 
                  src="/placeholder.svg" 
                  alt="Profile" 
                  className="object-cover w-full h-full"
                />
              </div>
              
              <div className="flex justify-center md:justify-start gap-4">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
                  <a href="mailto:example@email.com">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </motion.div>
            
            {/* Right: Text Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 100 }}
              className="flex-1 mt-10 md:mt-0 text-center md:text-left"
            >
              <h1 className="text-4xl font-bold tracking-tight mb-3">
                <span className="text-primary">ML Engineer</span> & Data Analyst
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Hello, I'm a passionate ML Engineer with expertise in building intelligent systems and extracting insights from data.
              </p>
              <p className="text-muted-foreground mb-8">
                With a background in computer science and statistics, I specialize in developing machine learning models 
                and data analytics solutions that solve real-world problems.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8 justify-center md:justify-start">
                {skills.map((skill, index) => (
                  <motion.span 
                    key={skill} 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + (index * 0.05) }}
                    className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
              
              <div className="flex gap-4 justify-center md:justify-start">
                <Button asChild className="shadow-sm">
                  <Link to="/experience">
                    View My Work
                  </Link>
                </Button>
                <Button variant="outline" asChild className="shadow-sm">
                  <Link to="/projects">
                    Projects
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </motion.div>
        </div>
      </section>
      
      {/* Portfolio Section */}
      <section className="py-20 bg-muted/10">
        <div className="container px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-3">Featured Work</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore some of my deployed websites and projects. Click on a project to see details and visit the site.
            </p>
          </motion.div>
          
          <HexagonPortfolio items={portfolioItems} />
        </div>
      </section>
    </div>
  );
};

export default Index;
