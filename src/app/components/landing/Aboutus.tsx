"use client"

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const serviceImages = [
  "/assets/cloud-service.png", 
  "/assets/custom-solutions.png",
  "/assets/web-dev.png",
  "/assets/data-analytics.png"
];

const Aboutus = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const [currentImage, setCurrentImage] = useState(serviceImages[0]);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

  const setServiceRef = (index: number) => (el: HTMLDivElement | null) => {
    serviceRefs.current[index] = el;
  };

  useEffect(() => {
    const services = serviceRefs.current;

    if (!services.length) return;

    // Create ScrollTriggers for each service section
    services.forEach((service, index) => {
      if (!service) return;

      ScrollTrigger.create({
        trigger: service,
        start: "top 60%",
        end: "bottom 40%",
        markers: false, // Removed markers
        onEnter: () => updateActiveService(index),
        onEnterBack: () => updateActiveService(index),
        scrub: false,
        toggleActions: "play none none reverse"
      });
    });

    // Function to update active service
    const updateActiveService = (activeIndex: number) => {
      // Reset all borders
      services.forEach((service) => {
        if (service) {
          gsap.to(service, {
            borderLeftColor: "transparent",
            duration: 0.3
          });
        }
      });

      // Highlight active service
      if (services[activeIndex]) {
        gsap.to(services[activeIndex], {
          borderLeftColor: "#046BF5",
          duration: 0.3
        });
      }

      // Update image with cross-fade
      gsap.to(".service-image", {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          setCurrentImage(serviceImages[activeIndex]);
          gsap.to(".service-image", {
            opacity: 1,
            duration: 0.3
          });
        }
      });
    };

    // Initialize first service as active
    updateActiveService(0);

    // Clean up
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div id='aboutus' className='bg-white dark:bg-black dark:text-white min-h-screen py-16'>
      <div className='max-w-6xl mx-auto px-8'>
        <div className='mb-16'>
          <div className='text-black font-semibold mb-4'>WHAT WE DO</div>
          <h2 className='font-recoleta text-[#02357A] text-5xl font-semibold leading-snug mb-8 max-w-2xl'>
            All in one service for your business.
          </h2>
        </div>
      </div>
      <div style={{ 
        backgroundImage: 'url("/assets/white-brush.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className='max-w-6xl mx-auto px-8'>
          <div className='text-black relative py-10'>   
            <div className='flex flex-col lg:flex-row justify-between' ref={servicesRef}>
              <div className='lg:w-2/3 lg:pr-12 mb-12 lg:mb-0'>
                <div 
                  ref={setServiceRef(0)}
                  className='border-l-4 border-primary pl-6 mb-10'
                >
                  <h3 className='font-recoleta text-xl font-semibold mb-2 text-[#262A2F]'>
                    Cloud Consulting Service
                  </h3>
                  <p className='text-gray-600 mb-4'>
                    Reduce costs, accurate deployments, and scale effortlessly with our expert cloud consulting services.
                  </p>
                  <Link href="/cloud" className='font-semibold text-[#046BF5] flex items-center'>
                    <motion.span  whileTap={{scale:0.9}}
                      whileHover={{
                        scale:1.1,

                      }}
                      className='flex'
                      >                      
                      Learn More <ArrowRight className="ml-2" />
                    </motion.span>
                  </Link>
                </div>
                
                <div 
                  ref={setServiceRef(1)}
                  className='border-l-4 border-transparent pl-6 mb-10'
                >
                  <h3 className='font-recoleta text-xl font-semibold mb-2 text-[#262A2F]'>
                    Build Custom Solutions
                  </h3>
                  <p className='text-gray-600'>
                    We craft tailored solutions to meet business needs. Our expertise extends to modernizing legacy systems and facilitating smooth technology transitions.
                  </p>
                </div>

                <div 
                  ref={setServiceRef(2)}
                  className='border-l-4 border-transparent pl-6 mb-10'
                >
                  <h3 className='font-recoleta text-xl font-semibold mb-2 text-[#193E2F]'>
                    Web developments
                  </h3>
                  <p className='text-gray-600'>
                    Build or upgrade a digital product that should have A-grade performance and scale quickly.
                  </p>
                </div>

                <div 
                  ref={setServiceRef(3)}
                  className='border-l-4 border-transparent pl-6'
                >
                  <h3 className='font-recoleta text-xl font-semibold mb-2 text-[#262A2F]'>
                    Data & Analytics
                  </h3>
                  <p className='text-gray-600'>
                    Unlock insights and drive decisions with our advanced data solutions. We help you collect, process, and visualize data to fuel innovation and growth.
                  </p>
                </div>
              </div>

              <div className='lg:w-1/3 relative h-64 lg:h-auto'>
                <div className='sticky top-32 w-full h-[400px]'>
                  <Image
                    className='service-image rounded-lg shadow-lg w-full h-full object-cover'
                    src={currentImage}
                    alt="Service Illustration"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;