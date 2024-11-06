"use client"

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Nav from '../Nav';
import ModalButton from '../ModalButton';

type HeroProps = {
  id?: string;
};
const Hero = ({ id }: HeroProps)  => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    '/assets/12.png',
    '/assets/13.png',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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

  const imageVariants = {
    enter: {
      opacity: 0,
      scale: 1.05,
      transition: {
        duration: 0.5
      }
    },
    center: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.5
      }
    }
  };

  return ( 
    <section id="hero">   
    <div className="bg-[#F3E9E5] min-h-screen">
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
                className="text-3xl md:text-5xl lg:text-6xl lg:-mt-24 font-semibold text-black mb-4 font-sora"
                variants={contentVariants}
              >
                Reaching Your Comfort Through Our Property Solutions
              </motion.h1>
              <motion.p 
                className="text-md md:text-lg lg:text-2xl text-[#262A2F] mb-6 font-satoshi"
                variants={contentVariants}
              >
                Experience exceptional real estate services with Jo'ed Properties. 
                From land sales to property management, we deliver affordable, 
                reliable, and timely solutions for all your property needs.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <ModalButton className="bg-[#EF4724] hover:bg-[#EE8329] text-white px-6 py-3 rounded-xl flex items-center mx-auto md:mx-0">
                  Connect with us
                  <ArrowRight className="ml-2" />
                </ModalButton>
              </motion.div>
            </div>
          </motion.div>

          <div className="w-full md:w-1/2 h-[450px] md:h-screen relative md:bottom-0 overflow-hidden">
            <AnimatePresence initial={false} mode="sync">
              <motion.div
                key={currentImageIndex}
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 w-full h-full"
              >
                <motion.div 
                  className="w-full h-full bg-no-repeat bg-contain bg-center"
                  style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
                  layoutId="hero-image"
                />
                
                {/* Overlay effect */}
                <motion.div
                  className="absolute inset-0 z-10 w-full h-full bg-no-repeat bg-contain bg-center"
                  style={{ 
                    backgroundImage: `url(${images[currentImageIndex]})`,
                    mixBlendMode: 'overlay'
                  }}
                  layoutId="hero-overlay"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </main>
    </div>
    </section>
  );
};

export default Hero;