
import { motion } from "framer-motion";

export interface Milestone {
  id: number;
  title: string;
  date: string;
  description: string;
}

interface TimelineItemProps {
  milestone: Milestone;
  index: number;
}

const TimelineItem = ({ milestone, index }: TimelineItemProps) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`relative flex ${isEven ? "flex-row" : "flex-row-reverse"} group`}>
      {/* Connecting Line */}
      <div className="absolute top-10 left-1/2 w-0.5 h-full bg-muted -translate-x-1/2 z-0" />
      
      {/* Date */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className={`w-full md:w-[45%] flex ${isEven ? "justify-end md:text-right" : "justify-start"} pt-8`}
      >
        <div className="text-muted-foreground text-sm font-light">{milestone.date}</div>
      </motion.div>
      
      {/* Circle */}
      <div className="relative z-10 mt-9">
        <div className="w-5 h-5 rounded-full bg-[#FEC6A1] dark:bg-[#FDE1D3] flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-white dark:bg-gray-900 transition-transform duration-300 group-hover:scale-0" />
        </div>
      </div>
      
      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, x: isEven ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className={`w-full md:w-[45%] pb-12 pl-4 ${isEven ? "md:pl-0 md:pr-4" : ""}`}
      >
        <h3 className="font-medium text-lg">{milestone.title}</h3>
        <p className="text-muted-foreground mt-1">{milestone.description}</p>
      </motion.div>
    </div>
  );
};

export default TimelineItem;
