'use client';

import React, { ReactNode } from 'react';
import { useModal } from '@/contexts/ModalContext';
import { motion } from 'framer-motion';

interface ModalButtonProps {
  children: ReactNode;
  className?: string;
}

const ModalButton: React.FC<ModalButtonProps> = ({ 
  children, 
  className = "bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
}) => {
  const { openModal } = useModal();

  return (
    <motion.button
      whileTap={{scale:0.9}}
      whileHover={{
        scale:1.1,

      }}
      transition={{bounceDamping:10, bounceStiffness:600}}
      onClick={openModal}
      type="button"
      className={className}
    >
      {children}
    </motion.button>
  );
};

export default ModalButton;