import React, { ReactNode } from 'react';
import { motion } from 'motion/react';

interface FadeInSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  className = '',
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1, margin: '0px 0px -40px 0px' }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1], // Smooth custom cubic-bezier
      }}
      className={`w-full ${className}`}
    >
      {children}
    </motion.div>
  );
};
