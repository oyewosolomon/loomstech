"use client"


import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Testimonial = () => {
  const testimonials = [
    {
      text: "They are more than just a software company. They are the partner who will help you achieve what you want to achieve.",
      author: "Jordan Ajibola",
      role: "CEO, Ship bubble",
      avatar: "/assets/Avatar.png",
      image: "/assets/Contents.png"
    },
    {
      text: "Their expertise and dedication have transformed our business operations completely. Highly recommended!",
      author: "Sarah Chen",
      role: "CTO, TechFlow",
      avatar: "/assets/Avatar.png",
      image: "/assets/Contents.png"
    },
    {
      text: "Outstanding service and innovative solutions. They've exceeded our expectations in every way.",
      author: "Michael Rodriguez",
      role: "Founder, InnovateLab",
      avatar: "/assets/Avatar.png",
      image: "/assets/Contents.png"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div id='testimonial' className='bg-[#046BF5] text-white dark:bg-black dark:text-white py-12'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex flex-col lg:flex-row gap-8'>
          <div className='w-full lg:w-1/2 space-y-6 md:pr-36' id='testimonials'>
            <div>
              <Image src="/assets/Stars.png" width={100} height={20} alt='Testimonials' />
            </div>
            <div 
              className='text-2xl sm:text-3xl lg:text-4xl transition-opacity duration-500'
              key={currentIndex}
            >
              {testimonials[currentIndex].text}
            </div>
            <div className='flex flex-col sm:flex-row justify-between items-center gap-4'>
              <div className='flex items-center gap-4'>
                <Image 
                  src={testimonials[currentIndex].avatar} 
                  width={56} 
                  height={56} 
                  alt='Avatar' 
                  className='rounded-full'
                />
                <div>
                  <div className='font-semibold'>{testimonials[currentIndex].author}</div>
                  <div className='text-sm'>{testimonials[currentIndex].role}</div>
                </div>
              </div>
              <div className='flex gap-3 mt-4 sm:mt-0'>
                <button 
                  onClick={handlePrevious}
                  className='rounded-full bg-white text-black p-2 hover:bg-gray-200 transition-colors'
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft size={24} />
                </button>
                <button 
                  onClick={handleNext}
                  className='rounded-full bg-white text-black p-2 hover:bg-gray-200 transition-colors'
                  aria-label="Next testimonial"
                >
                  <ArrowRight size={24} />
                </button>
              </div>
            </div>
          </div>
          <div className='w-full lg:w-1/2 h-64 sm:h-80 lg:h-[400px]'>
            <div className='w-full h-full relative'>
              <Image 
                src={testimonials[currentIndex].image}
                layout="fill"
                objectFit="cover"
                alt="Testimonials"
                className='rounded-lg transition-opacity duration-500'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;