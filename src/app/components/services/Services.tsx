"use client";

import Image from 'next/image';
import { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SectionProps } from "@/app/types";

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    id: 1,
    title: 'Land Sales',
    description: 'Discover our extensive range of land for sale, suitable for personal and investment purposes. Our team provides detailed information on zoning, accessibility, and potential uses, ensuring you make an informed decision for your future projects.',
    image: '/assets/land.png', // Path to image for Land Sales
  },
  {
    id: 2,
    title: 'Home Staging',
    description: 'Enhance your property’s appeal with our professional home staging services. We focus on highlighting your home’s best features, using stylish furnishings and decor to create inviting spaces that resonate with potential buyers.',
    image: '/assets/13.png', // Path to image for Home Staging
  },
  {
    id: 3,
    title: 'Property Rentals',
    description: 'Find a wide selection of rental properties tailored to suit diverse needs and budgets. Whether you are looking for a cozy apartment or a spacious family home, our listings include detailed information on amenities and neighborhood features.',
    image: '/assets/property-management.jpg', // Path to image for Property Rentals
  },
  {
    id: 4,
    title: 'Shortlet Services',
    description: 'Enjoy flexible short-term rentals that provide the comfort of home with hotel-like amenities. Our curated properties are perfect for business travelers, vacationers, or anyone needing a temporary stay in a welcoming environment.',
    image: '/assets/property-management.jpg', // Path to image for Shortlet Services
  },
  {
    id: 5,
    title: 'Property Valuations',
    description: 'Get accurate and reliable property valuations from our experienced team. We use a combination of market analysis and property assessments to provide you with a fair and competitive valuation, essential for buying, selling, or refinancing your property.',
    image: '/assets/property-management.jpg', // Path to image for Property Valuations
  },
  {
    id: 6,
    title: 'Property Management',
    description: 'Let us manage your property professionally, ensuring peace of mind for both you and your tenants. Our comprehensive services include tenant screening, rent collection, maintenance coordination, and regular property inspections to maintain your investment’s value.',
    image: '/assets/property-management.jpg', // Path to image for Property Management
  },
  {
    id: 7,
    title: 'Real Estate Consultancy',
    description: 'Receive expert guidance on all your real estate investments and decisions. Our consultancy services help you navigate the complexities of the market, providing insights into trends, financing options, and strategic investment opportunities.',
    image: '/assets/property-management.jpg', // Path to image for Real Estate Consultancy
  },
];

export default function Services({id}:SectionProps) {
  const [activeService, setActiveService] = useState<number | null>(1);
  const currentImage = services[activeService ? activeService - 1 : 0]?.image;
  
  // Scroll animations
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  if (inView) {
    controls.start({ opacity: 1, y: 0 });
  }

  return (
    <section id={id} className="w-full bg-white">
      <div className="max-w-7xl mx-auto py-16 px-6 lg:px-8">
        <motion.h2
          className="font-sora text-5xl font-bold text-gray-900 mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Services
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div
            ref={ref}
            className="flex-1"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={controls}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image 
              src={currentImage || '/assets/default-image.png'}
              alt="Services" 
              className="rounded-xl w-full h-auto"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD/4QBmRXhpZgAATU0AKgAAAAgAAkAAAAMAAAABAAEAAAAA..."
              width={500}
              height={500}
            />
          </motion.div>

          <div className="flex-1 space-y-8">
            {services.map((service) => (
              <motion.div
                key={service.id}
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                animate={controls}
                transition={{ delay: service.id * 0.1, duration: 0.5, ease: "easeOut" }}
                className="border-t border-gray-200 pt-6"
              >
                <button
                  onClick={() => setActiveService(activeService === service.id ? null : service.id)}
                  className="w-full text-left flex justify-between items-center text-lg font-semibold text-gray-800 focus:outline-none"
                >
                  <span><span className='pr-6'>{service.id < 10 ? `0${service.id}` : service.id}</span> {service.title}</span>
                  <span className="text-gray-500">
                    {activeService === service.id ? '↑' : '↓'}
                  </span>
                </button>
                {activeService === service.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="mt-2 text-gray-600 text-lg">{service.description}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
