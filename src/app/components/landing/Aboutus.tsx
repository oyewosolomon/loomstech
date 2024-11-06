"use client"

import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { SectionProps } from "@/app/types";

export default function AboutUs({id}:SectionProps) {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <section id={id} className="w-full bg-[#F3E9E5]">
      
      <motion.div
        className="max-w-7xl mx-auto py-16 px-6 lg:px-8"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="text-center mb-12">
        <motion.h2
          className="font-sora text-5xl font-bold text-gray-900 mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          About Us
        </motion.h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
         
            <div className="w-full py-0 md:py-10">
              <h3 className="text-sm font-semibold text-[#EE8329] font-sora">WHO WE ARE</h3>
              <h2 className="text-4xl font-bold text-black mt-2 font-sora">
                Making Life Smoother and Easier Every Day
              </h2>
            </div>
          
         
            <div className="py-2 md:py-10 w-full">
            We are dedicated to making life smoother and easier every day with practical and user-friendly solutions. Our focus is on simplifying your daily routines and enhancing your overall convenience. Experience seamless solutions designed to fit effortlessly into your lifestyle.
             
            </div>
         
        </div>

        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <motion.div
            className="relative overflow-hidden rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Image
              src="/assets/vision-image.jpg"
              alt="Our Vision"
              layout="responsive"
              width={600}
              height={400}
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-80 p-4 m-6 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900">Our Vision</h4>
              <p className="text-gray-600 mt-2 text-lg">
                To be the leading innovator, transforming industries with cutting-edge solutions that improve lives.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative overflow-hidden rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Image
              src="/assets/goal-image.jpg"
              alt="Our Goal"
              layout="responsive"
              width={600}
              height={400}
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-80 p-4 m-6 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900">Our Goal</h4>
              <p className="text-lg text-gray-600 mt-2">
                To consistently deliver exceptional value and achieve excellence in every project we undertake.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {["92%", "24", "14.2k+", "12+"].map((stat, index) => (
            <motion.div
              key={stat}
              className="p-6 bg-white rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              transition={{ delay: 1 + index * 0.2, duration: 0.6 }}
            >
              <p className="text-2xl font-bold text-[#EE8329]">{stat}</p>
              <p className="text-sm text-gray-600">
                {["Happy Clients", "Years of Experience", "Completed Projects", "Awards Won"][index]}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
