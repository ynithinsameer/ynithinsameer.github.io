import { Button } from "@/components/ui/button";
import HexagonPortfolio, { PortfolioItem } from "@/components/HexagonPortfolio";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Book, MessageSquare, Brain, Notebook } from "lucide-react";
import { Link } from "react-router-dom";

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Pantry Manager",
    image: "/assets/images/flash.png",
    url: "https://pantry-manager-mu.vercel.app/",
    color: "#FF7F50"
  },
  {
    id: 2,
    title: "Support Chatbot",
    image: "/assets/images/flash.png",
    url: "https://support-chatbot-steel.vercel.app/",
    color: "#FF7F50"
  },
  {
    id: 3,
    title: "Flashcards App",
    image: "/assets/images/flash.png",
    url: "https://flashcards-app-neon.vercel.app/",
    color: "#FF7F50"
  },
  {
    id: 4,
    title: "Smart Notes",
    image: "/assets/images/flash.png",
    url: "https://smart-notes-plum.vercel.app/",
    color: "#FF7F50"
  }
];

const skills = [
  "Python", "TensorFlow", "PyTorch", "scikit-learn", "R", 
  "SQL", "Tableau", "Deep Learning", "NLP", "Computer Vision"
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center pt-24 pb-20 relative">
        <div className="container max-w-7xl px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-16">
            {/* Left: Photo and Bio */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              className="flex-1 flex flex-col items-center md:items-center"
            >
              <div className="relative h-[400px] w-[400px] overflow-hidden rounded-full border-4 border-[#FF7F50] shadow-xl mb-6">
                <img 
                  src="/assets/images/profile.jpg" 
                  alt="Nithin Sameer" 
                  className="object-cover w-full h-full"
                />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Nithin Sameer Yerramilli
              </h2>
              
              <div className="flex justify-center gap-8">
                <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full hover:bg-[#FF7F50]/10">
                  <a href="https://github.com/Nithinsameer" target="_blank" rel="noopener noreferrer">
                    <Github className="h-7 w-7" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full hover:bg-[#FF7F50]/10">
                  <a href="https://www.linkedin.com/in/nithin-sameer-yerramilli/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-7 w-7" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full hover:bg-[#FF7F50]/10">
                  <a href="mailto:ynsameer@gmail.com">
                    <Mail className="h-7 w-7" />
                  </a>
                </Button>
              </div>
            </motion.div>
            
            {/* Right: Text Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 100 }}
              className="flex-1 text-center md:text-left"
            >
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-center md:text-left">
                <span className="text-[#FF7F50]">ML Engineer</span>
                <span className="mx-2">&</span>
                <span>Data Analyst</span>
              </h1>

              <p className="text-2xl text-muted-foreground mb-8">
                Hello, I'm a passionate ML Engineer with expertise in building intelligent systems and extracting insights from data.
              </p>
              <p className="text-lg text-muted-foreground mb-10">
                I have a passion for software and AI. I enjoy creating tools that make life easier for people. With a background in computer science and statistics, I specialize in developing machine learning models and data analytics solutions that solve real-world problems.
              </p>
              
              <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-10">
                {skills.map((skill, index) => (
                  <motion.span 
                    key={skill} 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + (index * 0.05) }}
                    className="text-sm px-4 py-2 rounded-full bg-[#FF7F50]/10 text-[#FF7F50]"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
              
              <div className="flex gap-6 justify-center md:justify-start">
                <Button asChild size="lg" className="bg-[#FF7F50] hover:bg-[#FF7F50]/90 shadow-lg">
                  <Link to="/experience">
                    View My Work
                  </Link>
                </Button>
                <Button variant="outline" asChild size="lg" className="shadow-lg">
                  <Link to="/projects">
                    Projects
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <motion.span 
            className="text-muted-foreground/80 text-sm mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Featured Work
          </motion.span>
          <motion.div
            animate={{ 
              y: [0, 8, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2,
              ease: "easeInOut"
            }}
            className="flex flex-col items-center"
          >
            <div className="h-12 w-6 rounded-full border-2 border-[#FF7F50]/30 flex items-start p-1">
              <motion.div 
                animate={{ y: [0, 16, 0] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2,
                  ease: "easeInOut"
                }}
                className="w-full h-2 bg-[#FF7F50] rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Portfolio Section */}
      <section className="py-24 bg-muted/10">
        <div className="container max-w-6xl px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Work</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore some of my recent projects in machine learning, data science, and AI development.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-background to-muted hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-full bg-[#FF7F50]/10 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      {item.title === "Pantry Manager" && <Book className="w-7 h-7 text-[#FF7F50]" />}
                      {item.title === "Support Chatbot" && <MessageSquare className="w-7 h-7 text-[#FF7F50]" />}
                      {item.title === "Flashcards App" && <Brain className="w-7 h-7 text-[#FF7F50]" />}
                      {item.title === "Smart Notes" && <Notebook className="w-7 h-7 text-[#FF7F50]" />}
                    </div>
                    <h3 className="text-2xl font-semibold group-hover:text-[#FF7F50] transition-colors duration-300">{item.title}</h3>
                  </div>
                  
                  <div className="flex items-center justify-end text-sm text-muted-foreground">
                    <span className="group-hover:translate-x-1 transition-transform duration-300">Visit Site →</span>
                  </div>
                  
                  <div className="absolute inset-0 border-2 border-[#FF7F50] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
