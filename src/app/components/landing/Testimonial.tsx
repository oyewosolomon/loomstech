"use client"

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { SectionProps } from "@/app/types";

const Testimonial = ({id}:SectionProps) => {
  const testimonials = [
    {
      name: "Emily Richards",
      title: "Land Buyer",
      feedback: "JOED Properties made purchasing my land an absolute breeze. Their team guided me through every step, providing detailed information and great support. I couldn’t be happier with my new property!",
      image: "https://readymadeui.com/profile_2.webp",
    },
    {
      name: "Michael O’Neal",
      title: "Apartment Owner",
      feedback: "I recently bought an apartment through JOED Properties, and the experience was excellent. They found me the perfect place, and the entire process was seamless and stress-free. Highly recommended!",
      image: "https://readymadeui.com/profile_3.webp",
    },
    {
      name: "Sarah Thompson",
      title: "Homeowner",
      feedback: "Purchasing my first home with JOED Properties was a dream come true. Their team handled everything professionally, ensuring I got the best deal. I love my new home, and JOED Properties made it all possible!",
      image: "https://readymadeui.com/profile_4.webp",
    },
  ];

  const [scrollPosition, setScrollPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];
  const intervalRef = useRef(null);

  useEffect(() => {
    const startScrolling = () => {
      intervalRef.current = setInterval(() => {
        setScrollPosition((prevPosition) => {
          const newPosition = prevPosition + 1; // Scroll speed
          const containerWidth = testimonials.length * 400;
          return newPosition >= containerWidth ? 0 : newPosition;
        });
      }, 50);
    };

    if (!isPaused) {
      startScrolling();
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, testimonials.length]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <section id={id} className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="flex align-middle place-items-center px-5 text-center text-3xl font-bold text-gray-800 mb-12 font-sora">
          What our clients say about 
         <Image src="/assets/logo.png" width={130} height={30} alt="Logo" />
        </h2>
        <div className="relative py-10 mt-32 mb-20">
          {/* Gradient background */}
          <div className="bg-gradient-to-tr from-[#EF4724] via-[#EE8329] to-[#EF4724] max-w-[95%] md:max-w-[65%] h-[145%] w-full absolute -top-16 left-0 right-0 mx-auto rounded-3xl max-md:hidden" />
          
          {/* Scrolling container */}
          <div 
            className="relative z-10 overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div 
              className={`flex gap-6 ${!isPaused ? 'transition-transform duration-100' : ''}`}
              style={{
                transform: `translateX(-${scrollPosition}px)`,
                width: 'fit-content'
              }}
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-96 bg-gradient-to-r from-blue-100 via-white to-blue-100 px-6 py-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow "
                >
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-md text-gray-600">{testimonial.title}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-md">{testimonial.feedback}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
