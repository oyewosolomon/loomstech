import React, { useState } from 'react'
import Image from 'next/image';
import Sidebar from './landing/Sidebar';
import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const Nav = () => {

    const [isActive, setIsActive] = useState(false);
    
    return (
        <div>
            <header className=" flex justify-between items-center md:bg-white md:mt-9 md:mx-[3rem] p-5 rounded-3xl">
            <div className="flex items-center">
                <Link href="/" className="text-green-700 text-2xl font-bold">
                <Image src="/assets/logo.png" width={150} height={50} alt="Logo" />            
                </Link>
            </div>
        
            <nav className='hidden md:block'>
                <ul className="flex space-x-10">
                <li><Link href="/" className="text-[#0347A3] font-semibold">Home</Link></li>
                <li><Link href="/#aboutus" className="text-gray-600 hover:text-[#0347A3]">About us</Link></li>
                <li><Link href="/cloud" className="text-gray-600 hover:text-[#0347A3]">Cloud services</Link></li>
                <li><Link href="/#contactus" className="text-gray-600 hover:text-[#0347A3]">Contact us</Link></li>
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
        
        </div>
    )
}

export default Nav