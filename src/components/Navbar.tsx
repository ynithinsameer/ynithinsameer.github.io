import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ModeToggle } from "./ui/mode-toggle";
import { Button } from "./ui/button";
import { FileDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Scroll progress for animations
  const { scrollY } = useScroll();
  const navbarOpacity = useTransform(scrollY, [0, 50], [0, 1]);
  const navbarBlur = useTransform(scrollY, [0, 50], [0, 8]);
  const navbarHeight = useTransform(scrollY, [0, 100], ["5rem", "4rem"]);

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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/experience", label: "Experience" },
    { path: "/projects", label: "Projects" },
    { path: "/blogs", label: "Blogs" },
  ];

  return (
    <>
      <motion.nav 
        style={{ 
          backdropFilter: `blur(${navbarBlur.get()}px)`,
          height: navbarHeight
        }}
        className={`fixed top-0 left-0 w-full z-40 transition-colors duration-300 ${
          isScrolled ? "border-b" : ""
        }`}
      >
        <motion.div 
          style={{ 
            backgroundColor: `rgba(var(--background-rgb), ${navbarOpacity.get()})` 
          }}
          className="absolute inset-0 -z-10"
        />
        
        <div className="container mx-auto flex items-center justify-between h-full px-6">
          <Link to="/" className="text-2xl font-semibold text-foreground flex items-center">
            <motion.span 
              className="text-[#FEC6A1]"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Nithin
            </motion.span>
            <motion.span 
              className="ml-1.5"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Sameer
            </motion.span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <Link 
                  to={link.path} 
                  className={`text-base font-medium transition-colors relative ${
                    isActive(link.path) 
                      ? "text-[#FEC6A1]" 
                      : "hover:text-[#FEC6A1]"
                  }`}
                >
                  {link.label}
                  {isActive(link.path) && (
                    <motion.div 
                      layoutId="active-nav-indicator"
                      className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-[#FEC6A1]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="group text-base border-[#FEC6A1]/20 hover:border-[#FEC6A1]/50 hover:bg-[#FEC6A1]/5"
                >
                  Resume
                  <motion.div
                    whileHover={{ y: [0, -2, 0], x: [0, 2, 0] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                  >
                    <FileDown className="ml-2 h-5 w-5 group-hover:text-[#FEC6A1] transition-colors" />
                  </motion.div>
                </Button>
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <ModeToggle />
            </motion.div>
          </div>
          
          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <ModeToggle />
            
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className="h-10 w-10 hover:bg-[#FEC6A1]/10 hover:text-[#FEC6A1] z-50"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={mobileMenuOpen ? "close" : "open"}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </motion.div>
              </AnimatePresence>
            </Button>
          </div>
        </div>
      </motion.nav>
      
      {/* Mobile Navigation Menu - Full Screen Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-background/95 backdrop-blur-md z-30 md:hidden flex flex-col"
          >
            <div className="flex-1 flex flex-col items-center justify-center py-20">
              <div className="w-full max-w-md px-6 space-y-8">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.3 }}
                    className="w-full"
                  >
                    <Link
                      to={link.path}
                      className={`block py-3 text-xl font-medium text-center ${
                        isActive(link.path) 
                          ? "text-[#FEC6A1]" 
                          : "text-foreground hover:text-[#FEC6A1]"
                      }`}
                    >
                      {link.label}
                      {isActive(link.path) && (
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 0.3 }}
                          className="h-0.5 bg-[#FEC6A1] mt-1 mx-auto max-w-[80px]"
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                  className="w-full flex justify-center mt-6"
                >
                  <a 
                    href="/resume.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center py-3 px-6 rounded-md border border-[#FEC6A1]/20 hover:border-[#FEC6A1]/50 hover:bg-[#FEC6A1]/5 text-xl font-medium"
                  >
                    Resume
                    <motion.div
                      animate={{ y: [0, -2, 0], x: [0, 2, 0] }}
                      transition={{ repeat: Infinity, duration: 1 }}
                    >
                      <FileDown className="ml-2 h-5 w-5" />
                    </motion.div>
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
