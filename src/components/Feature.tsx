'use client'

import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, useMotionTemplate } from 'framer-motion';

type FeatureProps = {
  title: string;
  content: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

export const Feature: React.FC<FeatureProps> = ({ title, content, icon: Icon }) => {
  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        offsetX.set(x / rect.width * 100);
        offsetY.set(y / rect.height * 100);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, [offsetX, offsetY]);

 
  const gradientX = useTransform(offsetX, [0, 100], [0, 100]);
  const gradientY = useTransform(offsetY, [0, 100], [0, 100]);
  const maskImage = useMotionTemplate`radial-gradient(150px 150px at ${gradientX}% ${gradientY}%, rgba(184, 140, 222, 0.8), transparent)`;

  return (
    <motion.div
      ref={cardRef}
      className="relative border border-white/30 px-5 py-10 text-center rounded-xl flex-grow min-h-[300px] flex flex-col justify-between sm:flex-1"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ opacity: { duration: 0.5 }, scale: { duration: 0.5 } }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        className="absolute inset-0 border-2 border-purple-400 rounded-xl"
        style={{
          WebkitMaskImage: maskImage,
          maskImage,
          borderWidth: '2px',
        }}
      />
      <div className="inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg mx-auto">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="mt-6 font-bold">{title}</h3>
      <p className="mt-2 text-white/70">{content}</p>
    </motion.div>
  );
};
