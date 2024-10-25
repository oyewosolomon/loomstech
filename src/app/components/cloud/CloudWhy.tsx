"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const CloudWhy = () => {
//   const containerRef = React.useRef(null)

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const slideIn = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } }
  }

  return (
    <div className='bg-primary text-white dark:bg-black dark:text-white py-12'>       
        <div className='max-w-6xl mx-auto px-4'>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className='flex flex-col gap-8 text-center mx-auto w-2/3'
            >
                <h1 className='font-recoleta font-semibold text-3xl'> 
                    Reach incomparable cloud-based scalability that works for thousands of users
                </h1> 
                
                <motion.div variants={fadeInUp}>  
                    Your DevOps and other cloud developers can learn by experimenting with cloud environment if there's time and money. Or you can jump-start your cloud development in weeks (not months) with our team rich in cross-industry cloud development experience.
                </motion.div>
            </motion.div>

            <div className='flex flex-col lg:flex-row my-16 gap-12'>
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={staggerChildren}
                  className='w-full lg:w-1/2 font-recoleta font-medium space-y-6 md:pr-36'
                >
                   <motion.div variants={slideIn} className='flex gap-3 bg-white text-black p-4 rounded-lg mr-10'>
                        <Image src="/assets/icon-11.svg" width={20} height={20} alt='icon' /> 
                        Never Overspend
                   </motion.div>
                   <motion.div variants={slideIn} className='flex gap-3'>
                        <Image src="/assets/icon-12.svg" width={20} height={20} alt='icon' /> 
                        Cloud maintenance
                   </motion.div>
                   <motion.div variants={slideIn} className='flex gap-3'>
                        <Image src="/assets/icon-13.svg" width={20} height={20} alt='icon' /> 
                        Cloud migration
                   </motion.div>
                   <motion.div variants={slideIn} className='flex gap-3'>
                        <Image src="/assets/icon-14.svg" width={20} height={20} alt='icon' /> 
                        Cloud tool development
                   </motion.div>
                   <motion.div variants={slideIn} className='flex gap-3'>
                        <Image src="/assets/icon-15.svg" width={20} height={20} alt='icon' /> 
                        Team augmentation
                   </motion.div>
                </motion.div>

                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeInUp}
                  className='w-full lg:w-1/2 h-64 sm:h-80 lg:h-[400px]'
                >
                    <div className='w-full h-full relative'>
                        <h2 className='font-recoleta font-semibold text-xl text-white my-4'>
                            Why build for the cloud?
                        </h2>
                        <motion.div variants={fadeInUp} className='my-3'>
                            Your DevOps and other cloud developers can learn by experimenting with cloud environment if there's time and money. Or you can jump-start your cloud development in weeks (not months) with our team rich in cross-industry cloud development experience.
                        </motion.div>

                        <motion.div 
                          variants={fadeInUp}
                          className='flex flex-col gap-3 p-6 text-base text-black rounded-lg bg-[#BDD4E9]'
                        >
                            <h2 className='text-xl font-recoleta text-secondary'>
                                Key merits of cloud-native architecture
                            </h2>
                            
                            <motion.div variants={slideIn} className='flex gap-3'>
                                <Image src="/assets/Check icon.svg" width={16} height={16} alt='icon' />
                                Deploy frequently and roll back easily
                            </motion.div> 

                            <motion.div variants={slideIn} className='flex gap-3'>
                                <Image src="/assets/Check icon.svg" width={16} height={16} alt='icon' />                                    
                                Build faster using hundred of production-ready services
                            </motion.div>

                            <motion.div variants={slideIn} className='flex gap-3'>
                                <Image src="/assets/Check icon.svg" width={16} height={16} alt='icon' />                                    
                                Auto-scale software based on demand
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default CloudWhy