import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';


interface SidebarProps {
    isActive: boolean;
    setIsActive: (isActive: boolean) => void;
  }

const Sidebar = ({ isActive, setIsActive }:SidebarProps) => {
  const [aboutExpanded, setAboutExpanded] = useState(false);

  const sidebarVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  };

  const handleLinkClick = () => {
    setIsActive(false);
  };



  return (
    <motion.div
      className="fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg z-50"
      initial="closed"
      animate={isActive ? "open" : "closed"}
      variants={sidebarVariants}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col h-full">
        <div className="flex justify-end p-4">
          <button onClick={() => setIsActive(false)} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <nav className="flex-grow">
          <ul className="space-y-2 p-4">
            <li>
              <Link href="/" onClick={handleLinkClick} className="block py-2 px-4 text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                Home
              </Link>
            </li>
           
            <li>
              <Link href="#aboutus" onClick={handleLinkClick} className="block py-2 px-4 text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                About us
              </Link>
            </li>
            <li>
              <Link href="#contactus" onClick={handleLinkClick} className="block py-2 px-4 text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                Contact us
              </Link>
            </li>
           
          </ul>
        </nav>
        
      </div>
    </motion.div>
  );
};

export default Sidebar;