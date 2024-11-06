"use client"

import React from 'react'

import CloudHero from '@/app/components/cloud/CloudHero';
import CloudDevelopment from '../components/cloud/CloudDevelopment';
import CloudProcess from '../components/cloud/CloudProcess';
import CloudWhy from '../components/cloud/CloudWhy';
import Footer from '../components/Footer';
import PropertyManagement from '../components/services/Properties';
import Nav from '../components/Nav';

const index = () => {
  return (
    <div>
      <Nav/>
      <PropertyManagement/>
      <Footer/>
    </div>
    
  )
}

export default index