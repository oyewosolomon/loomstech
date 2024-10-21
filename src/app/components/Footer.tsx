import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='relative w-full h-64 md:h-96 lg:h-[500px] bg-white'>
        <Image 
            src="/assets/image 1.png" 
            alt="Foot" 
            layout="fill" 
            objectFit="cover" // Ensures the image fills the space without distortion
        />
    </div>
  )
}

export default Footer
