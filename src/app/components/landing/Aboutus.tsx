"use client"

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import ModalButton from '../ModalButton';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface Service {
  title: string;
  content: string;
  link?: string;
  image: string;
}


const serviceImages = [
  "/assets/cloud-service.png", 
  "/assets/custom-solutions.png",
  "/assets/web-dev.png",
  "/assets/data-analytics.png"
];


const Aboutus = () => {
  const sections = [
    {
      title: "Who we are",
      content: "We are passionate experts dedicated to transforming businesses through innovative technology solutions. We partner with you to navigate the complexities of the digital landscape",
      imageUrl: "/assets/Logomark.png"
    },
    {
      title: "Our Mission",
      content: "To help businesses recalibrate, ensuring they navigate their industries with precision and foresight.",
      imageUrl: "/assets/Vector.png"
    },
    {
      title: "Our Focus",
      content: "From start-ups to large-scale companies, we empower organizations across all sectors with tailored solutions",
      imageUrl: "/assets/our-focus.png"
    }
  ];
  
  const servicesRef = useRef<HTMLDivElement>(null);
  const [currentImage, setCurrentImage] = useState(serviceImages[0]);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  const setServiceRef = (index: number) => (el: HTMLDivElement | null) => {
    serviceRefs.current[index] = el;
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      // Clean up any existing ScrollTriggers
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      return;
    }

    const services = serviceRefs.current;

    if (!services.length) return;

    services.forEach((service, index) => {
      if (!service) return;

      ScrollTrigger.create({
        trigger: service,
        start: "top 60%",
        end: "bottom 40%",
        markers: false,
        onEnter: () => updateActiveService(index),
        onEnterBack: () => updateActiveService(index),
        scrub: false,
        toggleActions: "play none none reverse"
      });
    });

    const updateActiveService = (activeIndex: number) => {
      services.forEach((service) => {
        if (service) {
          gsap.to(service, {
            borderLeftColor: "transparent",
            duration: 0.3
          });
        }
      });

      if (services[activeIndex]) {
        gsap.to(services[activeIndex], {
          borderLeftColor: "#046BF5",
          duration: 0.3
        });
      }

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

    updateActiveService(0);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [isMobile]);

  const services: Service[] = [
    {
      title: "Cloud Consulting Service",
      content: "Reduce costs, accurate deployments, and scale effortlessly with our expert cloud consulting services.",
      link: "/cloud",
      image: serviceImages[0]
    },
    {
      title: "Build Custom Solutions",
      content: "We craft tailored solutions to meet business needs. Our expertise extends to modernizing legacy systems and facilitating smooth technology transitions.",
      image: serviceImages[1]
    },
    {
      title: "Web developments",
      content: "Build or upgrade a digital product that should have A-grade performance and scale quickly.",
      image: serviceImages[2]
    },
    {
      title: "Data & Analytics",
      content: "Unlock insights and drive decisions with our advanced data solutions. We help you collect, process, and visualize data to fuel innovation and growth.",
      image: serviceImages[3]
    }
  ];
  
  const MobileServiceCard = ({ service }: { service: Service }) => (
    <div className="mb-12">
      <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="pl-0">
        <h3 className="font-recoleta text-xl font-semibold mb-2 text-[#262A2F]">
          {service.title}
        </h3>
        <p className="text-gray-600 mb-4">
          {service.content}
        </p>
        {service.link && (
          <Link href={service.link} className="font-semibold text-[#046BF5] flex items-center">
            <motion.span
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              className="flex"
            >
              Learn More <ArrowRight className="ml-2" />
            </motion.span>
          </Link>
        )}
      </div>
    </div>
  );
  
  return (
    <div id='aboutus' className='bg-white dark:text-white min-h-screen py-16 overflow-x-hidden'>
      <div className='max-w-6xl mx-auto px-0 md:px-5'>
        <div className='mb-8 text-center md:text-left'>
          <div className='text-black font-semibold mb-4'>WHAT WE DO</div>
          <h2 className='font-recoleta text-[#02357A] text-4xl md:text-5xl font-semibold leading-snug mb-3 md:mb-8 max-w-2xl'>
            All in one service for your business.
          </h2>

          <div className='block md:hidden px-5'>
            At loomstech, we go beyond conventional consulting. We are your trusted partner in designing and crafting powerful software solutions for seamless business growth.
            <ModalButton className="bg-[#046BF5] mt-5 text-white px-6 py-3 rounded-xl flex items-center mx-auto md:mx-0">
              Connect with us
              <ArrowRight className="ml-2" />
            </ModalButton>
          </div>
        </div>
      </div>
      <div style={{ 
        backgroundImage: 'url("/assets/white-brush.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className='max-w-6xl mx-auto px-0 md:px-3'>
          <div className='text-black relative py-10'>   
            {isMobile ? (
              // Mobile Layout
              <div className="px-5">
                {services.map((service, index) => (
                  <MobileServiceCard key={index} service={service} />
                ))}
              </div>
            ) : (
              // Desktop Layout
              <div className='flex flex-col lg:flex-row justify-between' ref={servicesRef}>
                <div className='lg:w-2/3 lg:pr-12 mb-12 lg:mb-0'>
                  {services.map((service, index) => (
                    <div 
                      key={index}
                      ref={setServiceRef(index)}
                      className='border-l-4 border-transparent pl-6 mb-10'
                    >
                      <h3 className='font-recoleta text-xl font-semibold mb-2 text-[#262A2F]'>
                        {service.title}
                      </h3>
                      <p className='text-gray-600 mb-4'>
                        {service.content}
                      </p>
                      {service.link && (
                        <Link href={service.link} className='font-semibold text-[#046BF5] flex items-center'>
                          <motion.span
                            whileTap={{scale:0.9}}
                            whileHover={{scale:1.1}}
                            className='flex'
                          >
                            Learn More <ArrowRight className="ml-2" />
                          </motion.span>
                        </Link>
                      )}
                    </div>
                  ))}
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
            )}
          </div>
          <div className='py-11'>
            <div className='text-center'>
              <div>
                Loomstech
              </div>
              <div className='font-recoleta text-secondary text-4xl md:text-5xl font-semibold my-7'>
                Business Excellence Reimagined
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between gap-3">
              {sections.map((item, index) => (
                <div key={index} className="flex-1 rounded-xl bg-tertiary mx-5 md:mx-0 py-6 pl-5 pr-20 flex flex-col relative">
                  <div className="absolute top-2 right-2 w-20 h-20">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      width={80}
                      height={80}
                      objectFit="cover"
                      className="rounded-full"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <h2 className="font-recoleta text-xl text-black font-semibold mb-3 mt-2 pr-8">{item.title}</h2>
                  <p className="flex-grow text-left text-gray-800 text-xs">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;