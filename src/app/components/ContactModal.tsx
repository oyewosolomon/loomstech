"use client"

import React, { useState, FormEvent, ChangeEvent } from 'react';
import { X } from 'lucide-react';
import { useModal } from '@/contexts/ModalContext';
import { AnimatePresence, motion } from 'framer-motion';
import Swal from 'sweetalert2';

interface FormData {
  email: string;
  message: string;
}

const ContactModal = () => {
  const { isOpen, closeModal } = useModal();
  const [formData, setFormData] = useState<FormData>({
    email: '',
    message: ''
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      console.log('Submitted:', formData);
      
      // Show success message
      await Swal.fire({
        icon: 'success',
        title: 'Thank you!',
        text: 'Your message has been sent successfully.',
        confirmButtonColor: '#2563eb', // matches the blue-600 color
        timer: 3000,
        timerProgressBar: true
      });
      
      closeModal();
      setFormData({ email: '', message: '' }); // Reset form
    } catch (error) {
      console.error('Error submitting form:', error);
      
      // Show error message
      await Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong! Please try again.',
        confirmButtonColor: '#2563eb'
      });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3 }}
          className="fixed max-w-[95vw] md:max-w-xl bottom-0 m-auto z-50 left-0 right-0 bg-white p-6 shadow-lg rounded-t-xl"
          style={{ 
            backgroundImage: 'url("/assets/white-brush.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'top',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="mx-auto flex flex-col gap-4">
            <div className="flex justify-between items-center mb-4">
              <div></div>
              <h2 className="text-3xl font-sora font-bold text-center text-blue-900">
                Connect with us
              </h2>
              <button
                onClick={closeModal}
                type="button"
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>
            <p className="text-gray-600 text-center mb-4">
              At loomstech, we go beyond conventional consulting. We are your trusted partner in designing and crafting powerful.
            </p>
            <form onSubmit={handleSubmit} className="pr-6">
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border text-gray-800 border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  className="w-full px-3 py-2 border text-gray-800 border-gray-300 rounded-md"
                  rows={4}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Send a message →
              </button>
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;