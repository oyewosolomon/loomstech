"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'

interface BenefitContent {
  title: string;
  description: string;
  benefits: string[];
}

interface ButtonContent {
  [key: string]: BenefitContent;
}

type ButtonType = 'overspend' | 'maintenance' | 'migration' | 'development' | 'augmentation';

interface ImageMapping {
  src: string;
  activeVersion: string;
}

const CloudWhy: React.FC = () => {
  const [activeButton, setActiveButton] = useState<ButtonType>('overspend')

  const imageMapping: Record<ButtonType, ImageMapping> = {
    overspend: {
      src: '/assets/icon-11.svg',
      activeVersion: '/assets/icon-11-black.svg'
    },
    maintenance: {
      src: '/assets/icon-12.svg',
      activeVersion: '/assets/icon-12-black.svg'
    },
    migration: {
      src: '/assets/icon-13.svg',
      activeVersion: '/assets/icon-13-black.svg'
    },
    development: {
      src: '/assets/icon-14.svg',
      activeVersion: '/assets/icon-14-black.svg'
    },
    augmentation: {
      src: '/assets/icon-15.svg',
      activeVersion: '/assets/icon-15-black.svg'
    }
  }

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const staggerChildren: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const slideIn: Variants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } }
  }

  const buttonContent: ButtonContent = {
    overspend: {
      title: "Never Overspend on Cloud Resources",
      description: "Optimize your cloud costs with our efficient resource management strategies. We help you monitor usage, implement cost-saving measures, and ensure you only pay for what you need.",
      benefits: [
        "Automated cost optimization",
        "Resource usage monitoring",
        "Budget forecasting and planning"
      ]
    },
    maintenance: {
      title: "Cloud Maintenance Made Simple",
      description: "Keep your cloud infrastructure running smoothly with our comprehensive maintenance solutions. We handle updates, security patches, and performance optimization.",
      benefits: [
        "24/7 monitoring and support",
        "Regular security updates",
        "Performance optimization"
      ]
    },
    migration: {
      title: "Seamless Cloud Migration",
      description: "Transform your existing infrastructure with our expert cloud migration services. We ensure a smooth transition with minimal downtime and maximum efficiency.",
      benefits: [
        "Zero-downtime migration",
        "Data integrity protection",
        "Legacy system integration"
      ]
    },
    development: {
      title: "Custom Cloud Tool Development",
      description: "Build powerful cloud-native tools tailored to your specific needs. Our experienced developers create scalable, efficient solutions that drive your business forward.",
      benefits: [
        "Custom automation tools",
        "API development",
        "Microservices architecture"
      ]
    },
    augmentation: {
      title: "Expert Team Augmentation",
      description: "Enhance your existing team with our cloud experts. We provide skilled professionals who integrate seamlessly with your team and bring valuable expertise.",
      benefits: [
        "Skilled cloud architects",
        "DevOps specialists",
        "Flexible scaling"
      ]
    }
  }

  const getButtonClass = (buttonId: ButtonType): string => {
    return `flex items-center gap-3 lg:hover:bg-white lg:hover:text-black lg:hover:p-4 lg:hover:rounded-lg lg:hover:pr-12 transition-all duration-300 ${
      activeButton === buttonId 
        ? 'lg:bg-white lg:text-black lg:p-4 lg:rounded-lg lg:pr-12' 
        : ''
    } justify-center lg:justify-start w-full`
  }

  const renderButtonImage = (buttonType: ButtonType) => {
    const imageSrc = activeButton === buttonType 
      ? imageMapping[buttonType].activeVersion 
      : imageMapping[buttonType].src;
    
    return (
      <Image 
        src={imageSrc} 
        width={20} 
        height={20} 
        alt='icon'
      />
    );
  };

  // Content box component
  const ContentBox: React.FC<{ buttonType: ButtonType }> = ({ buttonType }) => (
    <motion.div 
      variants={fadeInUp}
      className='w-full mt-4 mb-8 lg:hidden'
    >
      <div className='text-center'>
        <h2 className='font-recoleta font-semibold text-xl text-white mb-3'>
          {buttonContent[buttonType].title}
        </h2>
        <p className='mb-4'>{buttonContent[buttonType].description}</p>
        <div className='flex flex-col gap-3 p-6 text-left text-base text-black rounded-lg bg-[#BDD4E9]'>
          <h3 className='text-xl font-recoleta text-center md:text-left text-secondary'>
            Key benefits
          </h3>
          {buttonContent[buttonType].benefits.map((benefit, index) => (
            <div key={index} className='flex gap-3'>
              <Image src="/assets/Check icon.svg" width={16} height={16} alt='icon' />
              {benefit}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className='bg-primary text-white dark:bg-black dark:text-white py-12'>       
        <div className='max-w-6xl md:mx-auto p-7'>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className='flex flex-col gap-8 text-center mx-auto w-full md:w-2/3'
            >
                <h1 className='font-recoleta font-semibold text-3xl'> 
                    Reach incomparable cloud-based scalability that works for thousands of users
                </h1> 
                
                <motion.div variants={fadeInUp}>  
                    Your DevOps and other cloud developers can learn by experimenting with cloud environment if there&apos;s time and money. Or you can jump-start your cloud development in weeks (not months) with our team rich in cross-industry cloud development experience.
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
                  {/* Button and content section for overspend */}
                  <div>
                    <motion.button 
                      variants={slideIn} 
                      className={getButtonClass('overspend')}
                      onClick={() => setActiveButton('overspend')}
                    >
                      {renderButtonImage('overspend')}
                      Never Overspend
                    </motion.button>
                    <ContentBox buttonType="overspend" />
                  </div>

                  {/* Button and content section for maintenance */}
                  <div>
                    <motion.button 
                      variants={slideIn} 
                      className={getButtonClass('maintenance')}
                      onClick={() => setActiveButton('maintenance')}
                    >
                      {renderButtonImage('maintenance')}
                      Cloud maintenance
                    </motion.button>
                    <ContentBox buttonType="maintenance" />
                  </div>

                  {/* Button and content section for migration */}
                  <div>
                    <motion.button 
                      variants={slideIn} 
                      className={getButtonClass('migration')}
                      onClick={() => setActiveButton('migration')}
                    >
                      {renderButtonImage('migration')}
                      Cloud migration
                    </motion.button>
                    <ContentBox buttonType="migration" />
                  </div>

                  {/* Button and content section for development */}
                  <div>
                    <motion.button 
                      variants={slideIn} 
                      className={getButtonClass('development')}
                      onClick={() => setActiveButton('development')}
                    >
                      {renderButtonImage('development')}
                      Cloud tool development
                    </motion.button>
                    <ContentBox buttonType="development" />
                  </div>

                  {/* Button and content section for augmentation */}
                  <div>
                    <motion.button 
                      variants={slideIn} 
                      className={getButtonClass('augmentation')}
                      onClick={() => setActiveButton('augmentation')}
                    >
                      {renderButtonImage('augmentation')}
                      Team augmentation
                    </motion.button>
                    <ContentBox buttonType="augmentation" />
                  </div>
                </motion.div>

                {/* Desktop content panel */}
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeInUp}
                  className='hidden lg:block lg:w-1/2 lg:h-[400px]'
                >
                    <div className='w-full h-full relative text-center md:text-left'>
                        <h2 className='font-recoleta font-semibold  text-center md:text-left text-xl text-white my-4'>
                            {buttonContent[activeButton].title}
                        </h2>
                        <motion.div 
                          key={activeButton} 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          className='my-3 text-center md:text-left px-5 md:px-0'
                        >
                            {buttonContent[activeButton].description}
                        </motion.div>

                        <motion.div 
                          variants={fadeInUp}
                          className='flex flex-col gap-3 p-6 text-left text-base text-black rounded-lg bg-[#BDD4E9]'
                        >
                            <h2 className='text-xl font-recoleta text-center md:text-left text-secondary'>
                                Key benefits
                            </h2>
                            
                            {buttonContent[activeButton].benefits.map((benefit, index) => (
                              <motion.div key={index} variants={slideIn} className='flex gap-3'>
                                  <Image src="/assets/Check icon.svg" width={16} height={16} alt='icon' />
                                  {benefit}
                              </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default CloudWhy