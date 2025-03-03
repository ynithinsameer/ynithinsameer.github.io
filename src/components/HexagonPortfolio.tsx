
import { useState } from "react";
import { motion } from "framer-motion";

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

  // Calculate hexagon points
  const hexPoints = "50,0 93.3,25 93.3,75 50,100 6.7,75 6.7,25";

  return (
    <div className="relative h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Center point */}
      <div className="absolute w-4 h-4 rounded-full bg-[#FEC6A1] dark:bg-[#FDE1D3] z-10" />
      
      {/* Hexagons */}
      {items.map((item, index) => {
        // Determine position on the circle
        const angle = (2 * Math.PI * index) / items.length;
        const radius = 200; // Distance from center
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        const isActive = activeIndex === index;
        
        return (
          <motion.div
            key={item.id}
            initial={{ x, y, opacity: 0, scale: 0 }}
            animate={{ 
              x: isActive ? 0 : x,
              y: isActive ? 0 : y,
              opacity: 1,
              scale: isActive ? 1.5 : 1,
              zIndex: isActive ? 20 : 10
            }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20,
              duration: 0.5
            }}
            onClick={() => setActiveIndex(isActive ? null : index)}
            className="absolute cursor-pointer"
            style={{ transformOrigin: "center center" }}
          >
            <div className="relative group">
              <svg width="100" height="100" viewBox="0 0 100 100" className="drop-shadow-lg">
                <polygon 
                  points={hexPoints} 
                  fill={isActive ? item.color : `${item.color}90`}
                  stroke={isActive ? "white" : "rgba(255,255,255,0.5)"}
                  strokeWidth="2"
                  className="transition-all duration-300"
                />
                <foreignObject x="10" y="10" width="80" height="80">
                  <div className="w-full h-full flex items-center justify-center overflow-hidden rounded-full">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </foreignObject>
              </svg>
              
              {/* Title overlay that appears on hover */}
              <div 
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300
                  ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
              >
                <div className="bg-black/70 backdrop-blur-sm rounded-full p-1 px-3">
                  <span className="text-white text-xs font-medium">
                    {item.title}
                  </span>
                </div>
              </div>
            </div>
            
            {/* View site button that appears when active */}
            {isActive && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute top-[110px] left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 rounded-full shadow-lg px-4 py-2"
              >
                <a 
                  href={item.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-[#FEC6A1] dark:text-[#FDE1D3]"
                >
                  View Site
                </a>
              </motion.div>
            )}
          </motion.div>
        );
      })}
      
      {/* Reset button */}
      {activeIndex !== null && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute bottom-10 bg-[#FEC6A1] dark:bg-[#FDE1D3] text-white px-4 py-2 rounded-full text-sm"
          onClick={() => setActiveIndex(null)}
        >
          Reset View
        </motion.button>
      )}
    </div>
  );
};

export default HexagonPortfolio;
