'use client'

import { motion } from "framer-motion";
import classNames from "classnames";

type FadeInTextAnimationProps = {
  children: React.ReactNode;
  className?: string;        
};

export const FadeInTextAnimation: React.FC<FadeInTextAnimationProps> = ({
  children,
  className,
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }} 
    transition={{ duration: 1.5, ease: "easeIn" }} 
    className={classNames("min-h-screenHeight", className)} 
  >
    {children} 
  </motion.div>
);

export default FadeInTextAnimation;
