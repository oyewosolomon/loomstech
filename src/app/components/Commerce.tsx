"use client"

import React, { useEffect } from 'react';
import { MdHome } from 'react-icons/md';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SectionProps } from "@/app/types";

const Commerce = ({id}:SectionProps) => {
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
    <section id='commerce' className="w-full bg-white">
      <motion.div
        className="max-w-7xl mx-auto py-16 px-3 lg:px-8"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="flex flex-col md:flex-row items-center justify-center my-8 md:my-16">
          <div
            className="md:w-1/2 lg:w-1/2 p-4"
         
          >
            <nav className="flex items-center mb-4">
              <a href="#" className="text-gray-600 hover:text-gray-800 flex items-center font-bold">
                <MdHome className='mr-2'/> Home
              </a>
              <span className="mx-2 text-gray-600">/</span>
              <a href="#" className="text-[#EF4724] hover:text-[#EF4724] font-bold">Properties</a>
              <span className="mx-2 text-gray-600">/</span>
              <a href="#" className="text-gray-600 hover:text-[#EF4724] font-bold">Duplex</a>
            </nav>
            <div className="bg-gray-300 rounded-2xl">
              <img src="/assets/duplex.png" alt="5-room Duplex" className="w-full h-auto" />
            </div>
          </div>
          <div
            className="md:w-1/2 lg:w-1/2 p-4"
          >
            <h2 className="text-2xl font-bold mb-4">Spacious 5-Room Duplex</h2>
            <p className="text-gray-600 mb-4">Prime Location in Lagos</p>
            <p className="text-gray-600 mb-4">Experience luxury living with this modern, well-designed 5-room duplex offering ample space, premium finishes, and privacy for the whole family.</p>
            <div className="mb-4">
              <p className="font-bold">Rental Price</p>
              <p className="text-2xl font-bold">₦200,000/Month</p>
            </div>
            <div className="mb-4">
              <p className="font-bold">Sale Price</p>
              <p className="text-2xl font-bold">₦30,000,000</p>
            </div>
         
            <div className="flex gap-4 mb-4">
              <button className="bg-[#EF4724] hover:bg-[#EE8329] text-white px-4 py-2 rounded-3xl">Contact Agent</button>
              <button className="bg-[#EF4724] hover:bg-[#EE8329] text-white px-4 py-2 rounded-3xl">Request Viewing</button>
            </div>
            <p className="text-gray-600 text-sm">*Contact us for flexible payment plans and mortgage options.</p>
            <div className="mt-4">
              <p className="font-bold">Property Details</p>
              <ul className="list-disc pl-4">
                <li>5 Bedrooms with En-suite Bathrooms</li>
                <li>Modern Kitchen and Living Area</li>
                <li>Private Garden and Parking Space</li>
                <li>24/7 Security and Gated Community</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Commerce;
