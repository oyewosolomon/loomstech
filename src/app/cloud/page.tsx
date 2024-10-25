import React from 'react'
import { ArrowRight } from "lucide-react";
import Image from 'next/image';
import CloudHero from '@/app/components/cloud/CloudHero';
import { Scale, Rocket, Zap, DollarSign, Code, Shield } from 'lucide-react';
import CloudDevelopment from '../components/cloud/CloudDevelopment';
import CloudProcess from '../components/cloud/CloudProcess';
import CloudWhy from '../components/cloud/CloudWhy';
import Footer from '../components/Footer';

const index = () => {
  return (
    <div>
        <CloudHero/>  
        <CloudDevelopment/>
        <CloudProcess/> 
        <CloudWhy/>  
        <Footer/> 
    </div>
    
  )
}

export default index