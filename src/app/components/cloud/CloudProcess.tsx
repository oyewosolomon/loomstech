"use client"

import React from 'react';
import { FC } from 'react';
import { motion } from 'framer-motion';
import ModalButton from '../ModalButton';
import { ArrowRight } from 'lucide-react';

interface ServicePoint {
  id: string;
  title: string;
  description: string;
}

interface AWSLandingPageProps {
  points?: ServicePoint[];
  customClass?: string;
}

const defaultPoints: ServicePoint[] = [
  {
    id: '01',
    title: 'Start with a cloud audit that will reveal quick improvement areas',
    description: 'Your DevOps and other cloud developers can learn by experimenting with cloud environment if there\'s time and money. Or you can jump-start your cloud development in weeks (not months) with our team rich in cross-industry cloud development experience.'
  },
  {
    id: '02',
    title: 'Introduce tested practises for cloudOps that unlock rapid delivery',
    description: 'Your DevOps and other cloud developers can learn by experimenting with cloud environment if there\'s time and money. Or you can jump-start your cloud development in weeks (not months) with our team rich in cross-industry cloud development experience.'
  },
  {
    id: '03',
    title: 'Perfect your cloud strategy with a veteran AWS engineering team',
    description: 'Your DevOps and other cloud developers can learn by experimenting with cloud environment if there\'s time and money. Or you can jump-start your cloud development in weeks (not months) with our team rich in cross-industry cloud development experience.'
  },
  {
    id: '04',
    title: 'Start with a cloud audit that will reveal quick improvement areas',
    description: 'Your DevOps and other cloud developers can learn by experimenting with cloud environment if there\'s time and money. Or you can jump-start your cloud development in weeks (not months) with our team rich in cross-industry cloud development experience.'
  },
  {
    id: '05',
    title: 'Together, we\'ll support your cloud goals from 1st sprint',
    description: 'Your DevOps and other cloud developers can learn by experimenting with cloud environment if there\'s time and money. Or you can jump-start your cloud development in weeks (not months) with our team rich in cross-industry cloud development experience.'
  }
];

const CloudProcess: FC<AWSLandingPageProps> = ({ 
  points = defaultPoints,
  customClass = ''
}) => {
  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const pointVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className={`min-h-screen bg-white ${customClass}`.trim()}>
      {/* Header Section */}
      <motion.div 
        className='max-w-6xl md:mx-auto mx-5 bg-[#BDD4E9] rounded-xl grid md:grid-cols-2 p-7 mb-12 bg-none md:bg-process-bg md:bg-right md:bg-no-repeat md:bg-fit'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={headerVariants}
      >
        <div className='w-full md:w-[74%]'>
          <p className='mb-3'>
            <span className='font-sora font-semibold text-xl text-secondary'>What&apos;s your no. 1 issue with AWS?</span> 
            <span className='text-primary'>Cost?</span>
          </p>
          <p className='text-primary mb-2'>Predictability? Delivery time?</p>
          <p>
            Over 160+ software teams consulted with or seniors. Take a moment to tell us about your project.
          </p>
        </div>
        <div className='flex items-center mt-3 md:mt-0 justify-start md:justify-end'> 
          <ModalButton className='bg-primary p-2 rounded-xl flex items-center text-white'>
            Book a consultation
            <ArrowRight className="ml-2 size-4" />
          </ModalButton>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto">
        {points.map((point) => (
          <motion.div 
            key={point.id} 
            className="flex-col md:flex lg:flex-row mb-16 px-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={pointVariants}
          >
            <div className="w-24 flex-shrink-0">
              <span className="text-2xl text-[#BDD4E9] font-bold">{point.id}</span>
            </div>
            <div className="flex-col md:flex lg:flex-row">
              <h2 className="text-xl font-sora w-full md:w-1/2 font-bold text-secondary mb-4">
                {point.title}
              </h2>
              <p className="w-full md:w-1/2 text-gray-700 leading-relaxed">
                {point.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CloudProcess;