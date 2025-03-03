import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ModeToggle } from "./ui/mode-toggle";
import { Button } from "./ui/button";
import { FileDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll detection for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/experience", label: "Experience" },
    { path: "/projects", label: "Projects" },
    { path: "/blogs", label: "Blogs" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled || mobileMenuOpen 
          ? "backdrop-blur-lg bg-background/90 border-b" 
          : "backdrop-blur-none bg-background/0"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-20 px-6">
        <Link to="/" className="text-2xl font-semibold text-foreground flex items-center">
          <span className="text-[#FF7F50]">Nithin</span>
          <span className="ml-1.5">Sameer</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link 
              key={link.path}
              to={link.path} 
              className={`text-base font-medium transition-colors relative ${
                isActive(link.path) 
                  ? "text-primary" 
                  : "hover:text-primary"
              }`}
            >
              {link.label}
              {isActive(link.path) && (
                <motion.div 
                  layoutId="active-nav-indicator"
                  className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-primary"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          ))}
          
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="group text-base">
              Resume
              <FileDown className="ml-2 h-5 w-5 group-hover:text-primary transition-colors" />
            </Button>
          </a>
          
          <ModeToggle />
        </div>
        
        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <ModeToggle />
          
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="h-10 w-10"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden border-t overflow-hidden"
          >
            <div className="container px-6 py-6 flex flex-col space-y-5">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`py-2 text-base font-medium ${
                    isActive(link.path) 
                      ? "text-primary" 
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              
              <a 
                href="/resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 text-base font-medium flex items-center hover:text-primary"
              >
                Resume
                <FileDown className="ml-2 h-5 w-5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
