import React from 'react';
import Image from 'next/image';

const Timeline = () => {
  const steps = [
    {
      title: "Asses",
      description: "Our process starts with assessing your organization's needs and identifying the business case",
      image: "/assets/image 7.png"
    },
    {
      title: "Mobilise",
      description: "Our team collaborates with yours to develop a strategic roadmap, aligning cloud initiatives with your business objectives and preparing for seamless execution.",
      image: "/assets/image 8.png"
    },
    {
      title: "Design",
      description: "We architect tailored solutions that address your specific challenges, leveraging cutting-edge technologies to maximize efficiency and scalability",
      image: "/assets/image 10.png"
    },
    {
      title: "Optimize",
      description: "Through continuous monitoring and refinement, we ensure your infrastructure evolves with your business, optimizing performance and cost-effectiveness over time.",
      image: "/assets/image 9.png"
    }
  ];

  return (
    <div className="container mx-auto py-8 bg-white">
        <div className='font-lota font-semibold text-center text-sm text-[#193E2F]'>
            HOW WE WORK
        </div>              
               
        <h1 className="font-recoleta text-5xl font-semibold text-center text-[#21272A] mb-12">Our process</h1>
      
      <div className='max-w-6xl mx-auto px-4 md:px-8'>
        <div className="relative">
          {/* Timeline line (hidden on mobile) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full opacity-50" 
              style={{ backgroundImage: 'linear-gradient(to bottom, #4ade80 50%, rgba(255,255,255,0) 50%)', backgroundPosition: 'right', backgroundSize: '2px 12px', backgroundRepeat: 'repeat-y' }}>
          </div>
          {steps.map((step, index) => (
            <div key={index} className={`mb-16 md:flex md:items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-16':'md:pl-12'} mb-4 md:mb-0`}>
                <div className="relative w-full h-64">
                  <Image
                    src={step.image}
                    alt={step.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </div>
              
              <div className={`hidden md:flex w-8 h-8 ${index % 2 === 0 ? 'md:mr-8':'md:ml-4'} bg-green-400 rounded-full items-center justify-center text-white font-bold z-10`}>
                {index + 1}
              </div>
              
              <div className="w-full md:w-1/2 md:px-4">
                <h2 className="font-recoleta text-2xl font-semibold mb-2">{step.title}</h2>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;