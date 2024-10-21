"use client"

import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Sidebar from './Sidebar';
import { AnimatePresence } from 'framer-motion';

const Hero = () => {
    const [isActive, setIsActive] = useState(false);

  return (    
    <div className="bg-[#BDD4E9] min-h-screen ">
    <header className=" flex justify-between items-center md:bg-white md:mt-9 md:mx-[3rem] p-5 rounded-3xl">
        <div className="flex items-center">
            <span className="text-green-700 text-2xl font-bold">
            <Image src="/assets/logo.png" width={150} height={50} alt="Logo" />            
            </span>
        </div>
       
        <nav className='hidden md:block'>
            <ul className="flex space-x-10">
            <li><a href="#" className="text-[#0347A3] font-semibold">Home</a></li>
            <li><a href="#aboutus" className="text-gray-600 hover:text-[#0347A3]">About us</a></li>
            <li><a href="#contactus" className="text-gray-600 hover:text-[#0347A3]">Contact us</a></li>
            </ul>
        </nav>
       
      <div></div>
      <button data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <div onClick={()=>{setIsActive(!isActive)}} className='text-right' >
                <svg className={` w-5 h-5`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </div>
            <AnimatePresence mode="wait">
            {isActive && <Sidebar isActive={isActive} setIsActive={setIsActive} />}
            </AnimatePresence>
        </button>
    </header>
    
    <main className="container mx-auto">
        <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0 px-0">
                <div className='mx-5'>
                <h1 className="text-3xl md:text-5xl lg:text-6xl lg:-mt-24 font-semibold text-[#02357A] mb-4 font-recoleta">
                Your Strategic Partner for Scalable Solutions
                </h1>
                <p className="text-md md:text-lg lg:text-2xl text-[#262A2F] mb-6 font-lota">
                At loomstech, we go beyond conventional consulting. We are your 
                trusted partner in designing and crafting powerful software 
                solutions for seamless business growth.
                </p>
                <button className="bg-[#046BF5] text-white px-6 py-3 rounded-md flex items-center mx-auto md:mx-0">
                Connect with us
                <ArrowRight className="ml-2" />
                </button>
                </div>
            </div>
            <div className="w-full md:w-1/2 h-[450px] md:h-screen relative">
                <Image 
                src="/assets/g8.svg"
                alt="Hero"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                priority
                />
            </div>
        </div>
    </main>
  </div>
  )
}

export default Hero