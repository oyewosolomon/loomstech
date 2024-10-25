"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Nav from '../Nav';
import ModalButton from '../ModalButton';

const Hero = () => {

  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const svgContainerVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const pathVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };

  return (    
    <div className="bg-[#BDD4E9] min-h-screen">
      <Nav />
      <main className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0 px-0"
            initial="hidden"
            animate="visible"
            variants={contentVariants}
          >
            <div className="mx-5">
              <motion.h1 
                className="text-3xl md:text-5xl lg:text-6xl lg:-mt-24 font-semibold text-[#02357A] mb-4 font-recoleta"
                variants={contentVariants}
              >
                Your Strategic Partner for Scalable Solutions
              </motion.h1>
              <motion.p 
                className="text-md md:text-lg lg:text-2xl text-[#262A2F] mb-6 font-lota"
                variants={contentVariants}
              >
                At loomstech, we go beyond conventional consulting. We are your 
                trusted partner in designing and crafting powerful software 
                solutions for seamless business growth.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <ModalButton className="bg-[#046BF5] text-white px-6 py-3 rounded-xl flex items-center mx-auto md:mx-0">
                  Connect with us
                  <ArrowRight className="ml-2" />
                </ModalButton>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="w-full md:w-1/2 h-[450px] md:h-screen relative -bottom-8 md:bottom-0"
            initial="hidden"
            animate="visible"
            variants={svgContainerVariants}
          >
            <div 
              className="w-full h-full bg-no-repeat bg-contain bg-center"
              style={{ backgroundImage: 'url(/assets/g8.svg)' }}
            />
            
            <motion.div
              className="absolute inset-0 z-10"
              initial="hidden"
              animate="visible"
              variants={pathVariants}
            >
              <div 
                className="w-full h-full bg-no-repeat bg-contain bg-center"
                style={{ 
                  backgroundImage: 'url(/assets/g8.svg)',
                  mixBlendMode: 'overlay'
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Hero;