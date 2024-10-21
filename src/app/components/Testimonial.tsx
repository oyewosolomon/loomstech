import React from 'react'
import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const Testimonial = () => {
  return (
    <div id='testimonial' className='bg-[#193E2F] text-white dark:bg-black dark:text-white py-12'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex flex-col lg:flex-row gap-8'>
          <div className='w-full lg:w-1/2 space-y-6 md:pr-36'>
            <div>
              <Image src="/assets/Stars.png" width={100} height={20} alt='Testimonials' />
            </div>
            <div className='text-2xl sm:text-3xl lg:text-4xl '>
              They are more than just a software company. They are the partner who will help you achieve what you want to achieve.
            </div>
            <div className='flex flex-col sm:flex-row justify-between items-center gap-4'>
              <div className='flex items-center gap-4'>
                <Image src="/assets/Avatar.png" width={56} height={56} alt='Avatar' className='rounded-full'/>
                <div>
                  <div className='font-semibold'>Jordan Ajibola</div>
                  <div className='text-sm'>CEO, Ship bubble</div>
                </div>
              </div>
              <div className='flex gap-3 mt-4 sm:mt-0'>
                <button className='rounded-full bg-white text-black p-2 hover:bg-gray-200 transition-colors'>
                  <ArrowLeft size={24} />
                </button>
                <button className='rounded-full bg-white text-black p-2 hover:bg-gray-200 transition-colors'>
                  <ArrowRight size={24} />
                </button>
              </div>
            </div>
          </div>
          <div className='w-full lg:w-1/2 h-64 sm:h-80 lg:h-[400px]'>
            <div className='w-full h-full relative'>
              <Image 
                src="/assets/Contents.png"   
                layout="fill"
                objectFit="cover"
                alt="Testimonials"
                className='rounded-lg'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial