"use client"

import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#262A2F] text-white pt-16 pb-8">
      <div className=" mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <img 
                src="/assets/logo-white.png" 
                alt="Jo'ed Properties" 
                className="h-24 mb-4"
              />
              <p className="font-satoshi text-gray-300 mb-6">
                Professional real estate company dedicated to delivering exceptional property 
                services to individuals, families, and investors.
              </p>
            </div>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-[#EF4724] transition-colors">
                <Facebook size={24} />
              </Link>
              <Link href="#" className="hover:text-[#EF4724] transition-colors">
                <Instagram size={24} />
              </Link>
              <Link href="#" className="hover:text-[#EF4724] transition-colors">
                <Twitter size={24} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-sora font-bold text-xl mb-6">Quick Links</h3>
            <ul className="space-y-4 font-satoshi">
              <li>
                <Link href="#" className="hover:text-[#EF4724] transition-colors">
                  Available Properties
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#EF4724] transition-colors">
                  Land Sales
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#EF4724] transition-colors">
                  Shortlet Services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#EF4724] transition-colors">
                  Property Management
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#EF4724] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#EF4724] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-sora font-bold text-xl mb-6">Contact Us</h3>
            <ul className="space-y-4 font-satoshi">
              <li className="flex items-start space-x-3">
                <MapPin className="mt-1 flex-shrink-0 text-[#EF4724]" size={20} />
                <span>123 Property Lane, Real Estate District, Lagos, Nigeria</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="flex-shrink-0 text-[#EF4724]" size={20} />
                <span>+234 123 456 7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="flex-shrink-0 text-[#EF4724]" size={20} />
                <span>info@joedproperties.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-sora font-bold text-xl mb-6">Newsletter</h3>
            <p className="font-satoshi text-gray-300 mb-4">
              Subscribe to our newsletter for the latest property updates and offers.
            </p>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 px-4 py-2 rounded-l-lg flex-grow focus:outline-none focus:ring-2 focus:ring-[#EF4724] font-satoshi"
              />
              <button className="bg-[#EF4724] p-2 rounded-r-lg hover:bg-[#EE8329] transition-colors">
                <ArrowRight className="text-white" size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-satoshi text-sm text-gray-400">
            <p>© 2024 Jo'ed Properties and Consultancy Limited. All rights reserved.</p>
            <div className="flex space-x-6 md:justify-end">
              <Link href="#" className="hover:text-[#EF4724] transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-[#EF4724] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;