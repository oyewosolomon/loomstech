import React from 'react'
import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const Contactus = () => {
  return (
    <div id='contactus' className='bg-white dark:bg-black dark:text-white py-12'>
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
            <h2 className="font-recoleta text-3xl font-semibold"> Our Diverse Portfolios</h2>
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
            <h2 className="font-recoleta text-3xl font-semibold"> Shoot us an Email</h2>
            <p className="flex-grow">
            We deliver tailored solutions with a focus on seamless integration,ease of use and scalability
            </p>
            <a href='#' className='flex font-semibold text-sm place-items-center'>
            Connect with us <ArrowRight className='size-4 pl-2'/>
            </a>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row justify-between gap-4 py-16'>
          <div className='flex flex-col w-1/2 gap-3'>
            <div className='font-recoleta font-semibold text-3xl'>
            Upgrade your business today with Loomstech
            </div>
            <div>
                <button className="bg-green-700 text-xs text-white px-3 py-2 rounded-xl hidden lg:flex ">
                Reach Out To Us
                <ArrowRight className="ml-2 size-4" />
                </button>
            </div>
          </div>
          <div className=' w-1/2 lg:text-right'>
            <div className='flex flex-col align-middle gap-2'>
              <a href="" className='text-[#21272A]'>Home</a>
              <a href="">About us</a>
              <a href="">Contact us</a>
            </div>
            <button className="bg-green-700 text-xs text-white px-3 py-2 rounded-xl flex lg:hidden lg:items-center lg:mx-auto md:mx-0">
                Reach Out To Us
                <ArrowRight className="ml-2 size-4" />
                </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contactus