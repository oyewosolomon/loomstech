import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const sections = [
  {
    title: "Who we are",
    content: "We are passionate experts dedicated to transforming businesses through innovative technology solutions. We partner with you to navigate the complexities of the digital landscape",
    imageUrl: "/assets/Union.png"
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

const Aboutus = () => {
  return (
    <div id='aboutus' className='bg-white dark:bg-black dark:text-white min-h-screen py-16'>
      <div className='max-w-6xl mx-auto px-8'>
        <div className='mb-16'>
          <div className='text-[#193E2F] font-semibold mb-4'>WHAT WE DO</div>
          <h2 className='font-recoleta text-5xl font-semibold leading-snug mb-8 max-w-2xl'>
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
        <div 
          className='text-black relative py-10' 
          
        >   
          <div className='flex flex-col lg:flex-row justify-between'>
            {/* Left section with text */}
            <div className='lg:w-2/3 lg:pr-12 mb-12 lg:mb-0'>
              {/* Cloud Consulting Service */}
              <div className='border-l-4 border-black pl-6 mb-10'>
                <h3 className='font-recoleta text-xl font-semibold mb-2 text-[#193E2F]'>
                  Cloud Consulting Service
                </h3>
                <p className='text-gray-600 mb-4'>
                  Reduce costs, accurate deployments, and scale effortlessly with our expert cloud consulting services.
                </p>
                <a href="#" className='font-semibold text-green-600 flex items-center'>
                  Learn More <ArrowRight className="ml-2" />
                </a>
              </div>
              {/* Build Custom Solutions */}
              <div className='pl-6 mb-10'>
                <h3 className='font-recoleta text-xl font-semibold mb-2 text-[#193E2F]'>Build Custom Solutions</h3>
                <p className='text-gray-600'>
                  We craft tailored solutions to meet business needs. Our expertise extends to modernizing legacy systems and facilitating smooth technology transitions.
                </p>
              </div>
              <div className='pl-6 mb-10'>
                <h3 className='font-recoleta text-xl font-semibold mb-2 text-[#193E2F]'>Web developments</h3>
                <p className='text-gray-600'>
                Build or upgrade a digital product that should have A-grade performance and scale quickly.
                 </p>
              </div>
              {/* Data & Analytics */}
              <div className='pl-6'>
                <h3 className='font-recoleta text-xl font-semibold mb-2 text-[#193E2F]'>Data & Analytics</h3>
                <p className='text-gray-600'>
                  Unlock insights and drive decisions with our advanced data solutions. We help you collect, process, and visualize data to fuel innovation and growth.
                </p>
              </div>
            </div>
            {/* Right section with image */}
            <div className='lg:w-1/3 relative h-64 lg:h-auto'>
              <Image
                className='rounded-lg shadow-lg'
                src="/assets/Frame 49.png"
                layout="fill"
                objectFit="cover"
                alt="Technology Illustration"
              />
            </div>
          </div>

          <div className='my-9'>
            <div className='text-center'>
              <div className='font-lota font-semibold text-sm  text-[#193E2F]'>
                Loomstech
              </div>
              <div className='font-recoleta text-5xl font-semibold my-7'>
                Business Excellence Reimagined
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between gap-3">
              {sections.map((item, index) => (
                <div key={index} className="flex-1 rounded-lg bg-[#D1EE7C] py-5 pl-5 pr-20 flex flex-col relative">
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
                  <h2 className="font-recoleta text-xl font-semibold mb-3 pr-8">{item.title}</h2>
                  <p className="flex-grow text-left">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
</div>
        
      </div>
    </div>
  );
};

export default Aboutus;