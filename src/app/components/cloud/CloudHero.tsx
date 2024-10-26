"use client"

import React from 'react'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Nav from '../Nav'
import ModalButton from '../ModalButton'
import { motion } from 'framer-motion'


const cloudServicesVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition:{
      staggerChildren:0.25
    },
  },
};

const serviceImageVariant = {hidden:{opacity:0}, show:{opacity:1}};
const CloudHero = () => {
  return ( 
  
    <div className="min-h-screen">
      <Nav />
      <main className="mx-auto min-h-[calc(100vh-4rem)]">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 h-full py-12">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="space-y-6 px-12">
              <motion.h1
              initial={{opacity:0, y:-100}}
              animate={{opacity:1, y:0}}
              transition={{duration:0.8, ease:"easeInOut", delay:0.2}}
               className="font-recoleta text-3xl md:text-5xl lg:text-6xl font-semibold text-secondary">
                Lead your cloud development like the best in business do
              </motion.h1>
              <motion.p className="font-lota text-base md:text-lg lg:text-xl text-gray-800">
                Partnering with you, we&apos;ll craft a streamlined cloud strategy that optimizes costs, enhances operational efficiency, and future-proofs your infrastructure. Our tailored approach will automate key processes, provide real-time insights, and create a flexible architecture that adapts to your evolving business needs.
              </motion.p>
              <ModalButton className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl flex items-center mx-auto md:mx-0 transition-colors">
                Book a consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </ModalButton>
              <div className="flex items-center gap-4">
                <div className="flex items-center h-[68px]">
                  <Image 
                    src="/assets/aws-partner-network.png" 
                    width={127} 
                    height={35} 
                    alt='AWS Partner Network'
                    className="object-contain"
                  />
                </div>
                <motion.div variants={cloudServicesVariant} initial="hidden" animate="show" className="flex gap-4">
                  <motion.div 
                  variants={serviceImageVariant}>
                  <Image 
                    src="/assets/aws-practitional.png" 
                    width={68} 
                    height={68} 
                    alt='AWS Practitioner'
                    className="object-contain"
                  /></motion.div>
                  <motion.div  variants={serviceImageVariant}>
                  <Image 
                    src="/assets/aws-architech.png" 
                    width={68} 
                    height={68} 
                    alt='AWS Architect'
                    className="object-contain"
                  /></motion.div>
                  <motion.div  variants={serviceImageVariant}>
                  <Image 
                    src="/assets/aws-developer.png" 
                    width={68} 
                    height={68} 
                    alt='AWS Developer'
                    className="object-contain"
                  /></motion.div>
                  <motion.div variants={serviceImageVariant}>
                  <Image 
                    src="/assets/aws-security.png" 
                    width={68} 
                    height={68} 
                    alt='AWS Security'
                    className="object-contain"
                  />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="relative w-full md:w-3/4 h-full aspect-square md:aspect-[4/3] rounded-lg overflow-hidden">
              <Image 
                src="/assets/image 3.png"
                alt="Cloud Development Solutions"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>

     
      </main>
    </div>
   
  )
}

export default CloudHero