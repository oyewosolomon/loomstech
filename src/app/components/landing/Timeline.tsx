"use client"

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

interface Step {
  title: string;
  description: string;
  image: string;
}

interface TimelineItemProps {
  step: Step;
  index: number;
  isEven: boolean;
}

const Timeline: React.FC = () => {
  const steps: Step[] = [
    {
      title: "Assess",
      description: "Our process starts with assessing your organization's needs and identifying the business case",
      image: "/assets/image 7.png"
    },
    {
      title: "Mobilise",
      description: "Our team collaborates with yours to develop a strategic roadmap, aligning cloud initiatives with your business objectives and preparing for seamless execution.",
      image: "/assets/image 8.png"
    },
    {
      title: "Design",
      description: "We architect tailored solutions that address your specific challenges, leveraging cutting-edge technologies to maximize efficiency and scalability",
      image: "/assets/image 10.png"
    },
    {
      title: "Optimize",
      description: "Through continuous monitoring and refinement, we ensure your infrastructure evolves with your business, optimizing performance and cost-effectiveness over time.",
      image: "/assets/image 9.png"
    }
  ];

  const TimelineItem: React.FC<TimelineItemProps> = ({ step, index, isEven }) => {
    const ref = React.useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    const imageVariants = {
      hidden: { 
        opacity: 0,
        x: isEven ? -100 : 100 
      },
      visible: { 
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.8,
          ease: "easeOut"
        }
      }
    };

    const contentVariants = {
      hidden: { 
        opacity: 0,
        x: isEven ? 100 : -100 
      },
      visible: { 
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.8,
          ease: "easeOut",
          delay: 0.2
        }
      }
    };

    const numberVariants = {
      hidden: { 
        opacity: 0,
        scale: 0.5 
      },
      visible: { 
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.5,
          ease: "easeOut",
          delay: 0.4
        }
      }
    };

    return (
      <div ref={ref} className={`mb-16 md:flex md:items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
        <motion.div 
          className={`w-full md:w-1/2 ${isEven ? 'md:pr-16' : 'md:pl-12'} mb-4 md:mb-0`}
          variants={imageVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="relative w-full h-64">
            <Image
              src={step.image}
              alt={step.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </motion.div>
        
        <motion.div 
          className={`hidden md:flex w-8 h-8 ${isEven ? 'md:mr-8' : 'md:ml-4'} bg-[#DEE9F4] rounded-full items-center justify-center text-[#0347A3] font-bold z-10`}
          variants={numberVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {index + 1}
        </motion.div>
        
        <motion.div 
          className="w-full md:w-1/2 md:px-4"
          variants={contentVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 className="font-recoleta text-secondary text-2xl font-semibold mb-2">{step.title}</h2>
          <p className="text-gray-600">{step.description}</p>
        </motion.div>
      </div>
    );
  };

  return (
    <div className="container mx-auto py-8 bg-white">
      <div className='font-lota font-semibold text-center text-sm text-[#193E2F]'>
        HOW WE WORK
      </div>              
             
      <h1 className="font-recoleta text-5xl font-semibold text-center text-secondary mb-12">Our process</h1>
    
      <div className='max-w-6xl mx-auto px-4 md:px-8'>
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full opacity-50" 
              style={{ backgroundImage: 'linear-gradient(to bottom, #DEE9F4 50%, rgba(255,255,255,0) 50%)', backgroundPosition: 'right', backgroundSize: '2px 12px', backgroundRepeat: 'repeat-y' }}>
          </div>
          {steps.map((step, index) => (
            <TimelineItem 
              key={index} 
              step={step} 
              index={index} 
              isEven={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;