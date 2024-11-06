"use client";

import React from 'react';
import { HelpCircle, Phone, Mail, LucideIcon } from 'lucide-react';
import { MdOutlineWhatsapp } from 'react-icons/md';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import type { IconType } from 'react-icons';
import { SectionProps } from "@/app/types";

type IconComponent = LucideIcon | IconType;

interface ContactOptionProps {
  icon: IconComponent;
  title: string;
  description: string;
  action: () => void;
}

interface ContactInfo {
  icon: IconComponent;
  title: string;
  description: string;
  action: () => void;
}

const ContactOption: React.FC<ContactOptionProps> = ({ icon: Icon, title, description, action }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    viewport={{ once: true }}
    className="flex items-start p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
  >
    <div className="flex items-center justify-between w-full">
      <div className="flex items-start space-x-4">
        <div className="p-3 bg-indigo-50 rounded-lg">
          <Icon className="w-6 h-6 text-[#EE8329]" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 font-sora">{title}</h3>
          <p className="text-gray-600 mt-1">{description}</p>
        </div>
      </div>
      <button 
        className="px-6 py-2 bg-[#EF4724] text-white rounded-full hover:bg-[#EE8329] transition-colors focus:outline-none focus:ring-2 focus:ring-[#EF4724] focus:ring-offset-2"
        onClick={action}
      >
        Contact Us
      </button>
    </div>
  </motion.div>
);

const Contactsus: React.FC =({ id }: SectionProps) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const controls = useAnimation();

  if (inView) {
    controls.start({ opacity: 1, y: 0 });
  }

  const phoneNumber = '+234 123 456 7890';
  const email = 'info@joedproperties.com';
  const formattedPhone = phoneNumber.replace(/\s/g, '');

  const contactOptions: ContactInfo[] = [
    { icon: HelpCircle, title: "Help Center", description: "Get Question ? We have got an answer.", action: () => console.log('Opening help center') },
    { icon: Phone, title: "Call Us Now", description: "Get Question ? We have got an answer.", action: () => window.location.href = `tel:${formattedPhone}` },
    { icon: MdOutlineWhatsapp, title: "Chat with Us", description: "Get Question ? We have got an answer.", action: () => window.open(`https://wa.me/${formattedPhone}`, '_blank') },
    { icon: Mail, title: "Email Us Now", description: "Get Question ? We have got an answer.", action: () => window.location.href = `mailto:${email}` },
  ];

  return (
    <section id={id} className="w-full bg-white">
      <div className="py-16 px-4 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          ref={ref}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-4 font-sora">Contact Us</h2>
          <p className="text-gray-600">
            Feel free to contact us? submit your queries here and we will listen
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactOptions.map((option) => (
            <ContactOption
              key={option.title}
              icon={option.icon}
              title={option.title}
              description={option.description}
              action={option.action}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contactsus;
