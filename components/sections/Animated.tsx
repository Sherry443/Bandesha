"use client"

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface GridItemProps {
  text: string;
  index: number;
}

export default function ScrollAnimationDemo(): React.JSX.Element {
  // Reference for the scroll container
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress ONLY within this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const items: string[] = [
    '5M+ REVENUE',
    '300+ STORES',
    '200+ PROJECTS',
    '50+ BRANDS',
    '8+ YEARS EXPERIENCE',
    '500+ LAUNCHES',
  ];

  // Smooth animation ranges with better overlap
  const ranges: [number, number][] = [
    [0.05, 0.4], [0.15, 0.5], [0, 0.9], [0.25, 0.6], [0.35, 0.7], [0.45, 0.8]
  ];

  const GridItem: React.FC<GridItemProps> = ({ text, index }) => {
    const range = ranges[index] || [0, 1];
    const isCenterItem = text.includes('⚡');
    
    // Z-axis movement (smooth and fast)
    const z: MotionValue<number> = useTransform(
      scrollYProgress,
      [range[0], (range[0] + range[1]) / 2, range[1]],
      [-1200, 0, 1200]
    );
    
    // Smooth opacity transitions
    const opacity: MotionValue<number> = useTransform(
      scrollYProgress,
      [range[0], range[0] + 0.1, range[1] - 0.1, range[1]],
      [0, 1, 1, 0]
    );

    // Smooth blur transitions
    const blur: MotionValue<number> = useTransform(
      scrollYProgress,
      [range[0], range[0] + 0.12, range[1] - 0.12, range[1]],
      [8, 0, 0, 8]
    );

    return (
      <motion.div
        style={{
          translateZ: z,
          opacity,
          filter: useTransform(blur, (value: number) => `blur(${value}px)`),
        }}
        className={`
          flex items-center justify-center
          ${isCenterItem ? 'col-span-2 row-span-2 text-6xl md:text-[12rem] font-thin bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent' : 'text-4xl md:text-8xl font-thin text-white'}
          whitespace-nowrap pointer-events-none select-none
          will-change-transform
        `}
      >
        {text}
      </motion.div>
    );
  };

  return (
    <div className="bg-[#1f272d]">
      {/* Main Scroll Animation Section */}
      <div 
        ref={sectionRef} 
        className="relative"
        style={{ height: '350vh' }}
      >
        <div 
          className="sticky top-0 h-screen overflow-hidden grid grid-cols-3 grid-rows-2 place-items-center bg-black"
          style={{ 
            perspective: '1000px',
            transformStyle: 'preserve-3d'
          }}
        >
          {items.map((item, index) => (
            <GridItem key={index} text={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}