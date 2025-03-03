
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface PortfolioItem {
  id: number;
  title: string;
  image: string;
  url: string;
  color: string;
}

interface HexagonPortfolioProps {
  items: PortfolioItem[];
}

const HexagonPortfolio = ({ items }: HexagonPortfolioProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <div className="relative h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Center point */}
      <motion.div 
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="absolute w-20 h-20 rounded-full bg-primary/10 backdrop-blur-sm flex items-center justify-center z-10"
      >
        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
          <div className="w-6 h-6 rounded-full bg-primary" />
        </div>
      </motion.div>
      
      {/* Orbit items */}
      {items.map((item, index) => {
        // Determine position on the orbit
        const angle = (2 * Math.PI * index) / items.length;
        const radius = 200; // Distance from center
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        const isActive = activeIndex === index;
        const isHovered = hoverIndex === index;
        
        return (
          <motion.div
            key={item.id}
            initial={{ x, y, opacity: 0 }}
            animate={{ 
              x: isActive ? 0 : x,
              y: isActive ? 0 : y,
              opacity: 1,
              scale: isActive ? 1.3 : isHovered ? 1.1 : 1,
              zIndex: isActive ? 20 : 10
            }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 25,
              duration: 0.3
            }}
            onClick={() => setActiveIndex(isActive ? null : index)}
            onHoverStart={() => setHoverIndex(index)}
            onHoverEnd={() => setHoverIndex(null)}
            className="absolute cursor-pointer"
            style={{ transformOrigin: "center center" }}
          >
            <div className="relative">
              <motion.div 
                initial={{ boxShadow: "0px 0px 0px rgba(0,0,0,0)" }}
                animate={{ 
                  boxShadow: isActive || isHovered 
                    ? "0px 4px 15px rgba(0,0,0,0.1)" 
                    : "0px 0px 0px rgba(0,0,0,0)"
                }}
                className="w-[90px] h-[90px] rounded-full overflow-hidden border-2"
                style={{ 
                  borderColor: item.color,
                  backgroundColor: `${item.color}30`
                }}
              >
                <div className="w-full h-full flex items-center justify-center overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
              </motion.div>
              
              {/* Connecting line to center when active */}
              {isActive && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute top-1/2 left-1/2 h-0.5 bg-primary/30 z-0"
                  style={{
                    width: `${Math.sqrt(x*x + y*y)}px`,
                    transformOrigin: "left center",
                    transform: `translateX(-50%) translateY(-50%) rotate(${Math.atan2(y, x)}rad)`
                  }}
                />
              )}
              
              {/* Title overlay that appears on hover */}
              <AnimatePresence>
                {(isHovered || isActive) && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap"
                  >
                    <div className="bg-background/80 backdrop-blur-sm rounded-full py-1 px-3 border border-primary/20 shadow-sm">
                      <span className="text-xs font-medium">
                        {item.title}
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* View site button that appears when active */}
            {isActive && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="absolute top-[110px] left-1/2 -translate-x-1/2 bg-background border border-primary/20 rounded-full shadow-lg px-4 py-2"
              >
                <a 
                  href={item.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-primary flex items-center gap-1"
                >
                  <span>View Site</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </motion.div>
            )}
          </motion.div>
        );
      })}
      
      {/* Reset button */}
      {activeIndex !== null && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="absolute bottom-10 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm shadow-md hover:shadow-lg transition-shadow"
          onClick={() => setActiveIndex(null)}
        >
          Reset View
        </motion.button>
      )}
    </div>
  );
};

export default HexagonPortfolio;
