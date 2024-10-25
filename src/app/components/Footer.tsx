import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import ModalButton from './ModalButton'

const Footer = () => {
  return (

    <div className='bg-white'>
      <div className='max-w-6xl mx-auto px-4 flex flex-col lg:flex-row justify-between gap-4 py-16'>
          <div className='flex flex-col w-1/2 gap-3'>
            <div className='font-recoleta text-[#02357A] font-semibold text-3xl'>
            Upgrade your business today with Loomstech
            </div>
            <div>
               
                <ModalButton className="bg-[#046BF5] text-xs text-white px-3 py-2 rounded-xl hidden lg:flex ">
                Reach Out To Us
                <ArrowRight className="ml-2 size-4" />
                </ModalButton>
            </div>
          </div>
          <div className=' w-1/2 lg:text-right'>
            <div className='flex flex-col align-middle gap-2'>
              <a href="/" className='text-[#0347A3]'>Home</a>
              <a href="/#aboutus" className='hover-[#0347A3]'>About us</a>
              <a href="/#contactus" className='hover-[#0347A3]'>Contact us</a>
            </div>
            <ModalButton className="bg-[#046BF5] text-xs text-white px-3 py-2 rounded-xl flex lg:hidden lg:items-center lg:mx-auto md:mx-0">
                Reach Out To Us
                <ArrowRight className="ml-2 size-4" />
            </ModalButton>
          </div>
        </div>



        <div className='relative w-full h-64 md:h-96 lg:h-[500px]'>
      
      
          <Image 
              src="/assets/image 1.png" 
              alt="Foot" 
              layout="fill" 
              objectFit="cover" 
          />
      </div>
    </div>
   
  )
}

export default Footer
