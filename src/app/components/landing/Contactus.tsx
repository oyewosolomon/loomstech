import React from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import ModalButton from '../ModalButton'

const Contactus = () => {
  return (
    <div id='contactus' className='bg-white py-12'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex flex-col lg:flex-row gap-4'>
         
          <div className="flex-1 text-center  rounded-2xl border-[1px] border-[#E0E0E0EE] gap-4 py-12 px-10  flex flex-col justify-center place-items-center relative">
            <div className="">
                <Image
                  src= "/assets/Frame 4230.png"
                  alt="P"
                  width={170}
                  height={100}
                
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <h2 className="font-recoleta text-[#02357A] text-3xl font-semibold"> Our Diverse Portfolios</h2>
            <p className="flex-grow">
              We deliver tailored solutions with a focus on seamless integration,ease of use and scalability
            </p>
            <a href='#' className='flex font-semibold text-sm place-items-center'>
            Learn More <ArrowRight className='size-4 pl-2'/>
            </a>
          </div>


          <div className="flex-1 text-center  rounded-2xl border-[1px] border-[#E0E0E0EE] gap-4 py-12 px-10  flex flex-col justify-center place-items-center relative" style={{ 
              backgroundImage: 'url("/assets/majesticons_mail-line.png")',
              backgroundSize: '40%',
              backgroundPosition: 'bottom',
              backgroundRepeat: 'no-repeat'
            }}>
            <div className="">
               
            </div>
            <h2 className="font-recoleta text-[#02357A] text-3xl font-semibold"> Shoot us an Email</h2>
            <p className="flex-grow">
            We deliver tailored solutions with a focus on seamless integration,ease of use and scalability
            </p>
            <ModalButton className='flex font-semibold text-sm place-items-center'>
            Connect with us <ArrowRight className='size-4 pl-2'/>
            </ModalButton>
           
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contactus