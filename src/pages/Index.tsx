import { Button } from "@/components/ui/button";
import HexagonPortfolio, { PortfolioItem } from "@/components/HexagonPortfolio";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Book, MessageSquare, Brain, Notebook, FileDown } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedElement, AnimatedList } from "@/components/ui/animated-element";

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
  "Python", "TensorFlow", "PyTorch", "NLP", "Computer Vision", 
  "SQL", "Tableau", "Data Analysis", "Machine Learning", "AWS"
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center pt-24 pb-20 relative">
        <div className="container max-w-7xl px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-16">
            {/* Left: Photo and Bio */}
            <AnimatedElement 
              animation="scale"
              duration={0.7}
              className="flex-1 flex flex-col items-center md:items-center"
            >
              <div className="relative h-[250px] w-[250px] md:h-[400px] md:w-[400px] overflow-hidden rounded-full border-4 border-[#FF7F50] shadow-xl mb-4 md:mb-6">
                <img 
                  src="/assets/images/profile2.jpeg" 
                  alt="Nithin Sameer" 
                  className="object-cover w-full h-full"
                />
              </div>

              <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-center">
                Nithin Sameer Yerramilli
              </h2>
              
              <div className="flex justify-center gap-4 md:gap-8">
                <Button variant="ghost" size="icon" className="w-10 h-10 md:w-12 md:h-12 rounded-full hover:bg-[#FF7F50]/10">
                  <a href="https://github.com/Nithinsameer" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5 md:h-7 md:w-7" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="w-10 h-10 md:w-12 md:h-12 rounded-full hover:bg-[#FF7F50]/10">
                  <a href="https://www.linkedin.com/in/nithin-sameer-yerramilli/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5 md:h-7 md:w-7" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="w-10 h-10 md:w-12 md:h-12 rounded-full hover:bg-[#FF7F50]/10">
                  <a href="mailto:ynsameer@gmail.com">
                    <Mail className="h-5 w-5 md:h-7 md:w-7" />
                  </a>
                </Button>
              </div>
            </AnimatedElement>
            
            {/* Right: Text Content */}
            <AnimatedElement 
              animation="slideLeft"
              delay={0.2}
              duration={0.7}
              className="flex-1 text-center md:text-left"
            >
              <h1 className="text-2xl md:text-4xl font-bold tracking-tight mb-4 md:mb-8 text-center md:text-left">
                <span className="text-[#FF7F50]">ML Engineer</span>
                <span className="mx-2">&</span>
                <span>Data Analyst</span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground mb-4 md:mb-8">
                I build intelligent systems that transform complex data into meaningful insights.
              </p>
              <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-10">
                My work sits at the intersection of machine learning and practical problem-solving. I'm passionate about developing AI solutions that actually work in the real world. With a background in computer science and statistics, I focus on creating tools that make data more accessible and useful, whether that's through predictive models, data visualization, or automated systems.
              </p>
              
              <AnimatedList 
                animation="scale" 
                staggerDelay={0.05}
                className="flex flex-wrap gap-2 md:gap-3 justify-center md:justify-start mb-10"
              >
                {skills.map((skill) => (
                  <motion.span 
                    key={skill}
                    whileHover={{ 
                      scale: 1.1, 
                      backgroundColor: "rgba(255, 127, 80, 0.2)",
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-[#FF7F50]/10 text-[#FF7F50] cursor-pointer"
                  >
                    {skill}
                  </motion.span>
                ))}
              </AnimatedList>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8 mb-24">
                <Link to="/projects" className="w-full">
                  <Button 
                    size="lg" 
                    className="bg-[#FEC6A1] hover:bg-[#FEC6A1]/90 text-white w-full group"
                  >
                    Projects
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Button>
                </Link>
                <Link to="/experience" className="w-full">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full border-[#FEC6A1]/20 hover:border-[#FEC6A1]/50 hover:bg-[#FEC6A1]/5 group"
                  >
                    Experience
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1 group-hover:text-[#FEC6A1]" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Button>
                </Link>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="w-full sm:hidden">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full border-[#FEC6A1]/20 hover:border-[#FEC6A1]/50 hover:bg-[#FEC6A1]/5 group"
                  >
                    Resume
                    <FileDown className="ml-2 h-5 w-5 group-hover:text-[#FEC6A1] transition-colors" />
                  </Button>
                </a>
              </div>
            </AnimatedElement>
          </div>
        </div>

        {/* Scroll Indicator - Hide on small screens */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center hidden sm:flex">
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
      <section className="py-16 md:py-24 bg-muted/10 mt-12 sm:mt-0">
        <div className="container max-w-6xl px-4 md:px-6">
          <AnimatedElement 
            animation="slideUp"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-10 md:mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Featured Work</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore some of my recent projects in machine learning, data science, and AI development.
            </p>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {portfolioItems.map((item, index) => (
              <motion.a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 50
                }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-background to-muted hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="p-4 md:p-8">
                  <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                    <motion.div 
                      className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#FF7F50]/10 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {item.title === "Pantry Manager" && <Book className="w-5 h-5 md:w-7 md:h-7 text-[#FF7F50]" />}
                      {item.title === "Support Chatbot" && <MessageSquare className="w-5 h-5 md:w-7 md:h-7 text-[#FF7F50]" />}
                      {item.title === "Flashcards App" && <Brain className="w-5 h-5 md:w-7 md:h-7 text-[#FF7F50]" />}
                      {item.title === "Smart Notes" && <Notebook className="w-5 h-5 md:w-7 md:h-7 text-[#FF7F50]" />}
                    </motion.div>
                    <h3 className="text-xl md:text-2xl font-semibold group-hover:text-[#FF7F50] transition-colors duration-300">{item.title}</h3>
                  </div>
                  
                  <div className="flex items-center justify-end text-xs md:text-sm text-muted-foreground">
                    <motion.span 
                      className="group-hover:translate-x-1 transition-transform duration-300"
                      whileHover={{ x: 5 }}
                    >
                      Visit Site →
                    </motion.span>
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
