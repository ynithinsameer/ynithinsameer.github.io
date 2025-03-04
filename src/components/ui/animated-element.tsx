import React from "react";
import { motion, MotionProps, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

// Animation presets
export const animations = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
  slideDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  },
  slideLeft: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  },
  slideRight: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  },
  rotate: {
    initial: { opacity: 0, rotate: -10 },
    animate: { opacity: 1, rotate: 0 },
    exit: { opacity: 0, rotate: 10 },
  },
  bounce: {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    },
    exit: { opacity: 0, y: 20 },
  },
};

// Stagger children animation
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export interface AnimatedElementProps {
  children: React.ReactNode;
  animation?: keyof typeof animations;
  delay?: number;
  duration?: number;
  once?: boolean;
  custom?: any;
  className?: string;
  viewport?: { once?: boolean; margin?: string };
  [key: string]: any;
}

// Simplified implementation using motion.div directly
export const AnimatedElement = ({
  children,
  animation = "fadeIn",
  delay = 0,
  duration = 0.5,
  once = true,
  custom,
  className,
  viewport,
  ...props
}: AnimatedElementProps) => {
  const selectedAnimation = animations[animation];
  
  const transition = {
    duration,
    delay,
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={selectedAnimation}
      transition={transition}
      viewport={viewport || { once }}
      custom={custom}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export interface AnimatedListProps extends Omit<AnimatedElementProps, 'children'> {
  children: React.ReactNode;
  staggerDelay?: number;
}

export const AnimatedList = ({
  children,
  animation = "fadeIn",
  staggerDelay = 0.1,
  className,
  ...props
}: AnimatedListProps) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={staggerContainer}
      className={cn(className)}
      {...props}
    >
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;
        
        return React.cloneElement(child as React.ReactElement<any>, {
          variants: animations[animation],
          transition: {
            delay: index * staggerDelay,
            duration: 0.5,
          },
        });
      })}
    </motion.div>
  );
};

export default AnimatedElement; 