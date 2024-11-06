import React from 'react'
import Image from 'next/image'
import Link from 'next/dist/client/link'

const CloudDevelopment = () => {
  return (
    <div className='bg-white'>
        <div className="max-w-6xl mx-auto py-12" style={{ 
            backgroundImage: 'url("/assets/white-brush.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
                <div className='px-5'>
                    <p className="text-black font-semibold mb-4">The engine for in-demand applications</p>
                    <h1 className="text-4xl md:text-5xl font-sora text-blue-900 leading-tight mb-6">
                        Cloud development done right expands your software and team capabilities.
                    </h1>
                    <p className="text-gray-600 mb-6">
                        Using cloud based development resources to build and scale your app requires a rare skill set and an even more rare mentality.
                    </p>
                    <p className="text-gray-600 mb-6">
                        You need the sharpest knowledge from the worlds of cloud software development and infrastructure. That&apos;s a lot to handle.
                    </p>
                    <p className="text-gray-600">
                        Your DevOps and other cloud developers can learn by experimenting with cloud environment if there&apos;s time and money. Or you can jump-start your cloud development in weeks (not months) with our team rich in cross-industry cloud development experience.
                    </p>
                    <p className="text-gray-600 mt-6">
                        The Software House&apos;s cloud native development team offers just that.
                    </p>
                </div>
                <div className='relative h-[400px] w-full '>  {/* Added px-5 with md:px-0 */}
                    <div className='relative h-full mx-5 md:mx-0'> 
                        <Image 
                            src="/assets/cloud-img.png"
                            alt="Code editor screenshot" 
                            fill
                            className="rounded-lg shadow-lg"
                            sizes="(max-width: 768px) 100vw, 50vw"  // Helps Next.js optimize the image size
                            priority
                        />
                    </div>
                </div>
            </div>


            <div className="grid md:grid-cols-3 gap-8 px-5">
                {/* Full Scalability */}
                <div className="md:text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex md:items-center justify-center md:mx-auto mb-4">
                    {/* <Scale className="text-white" size={24} /> */}
                    <Image src="/assets/Frame-icon-1.svg" className="text-white" width={24} height={24} alt='h' />
                </div>
                <h3 className="text-xl font-sora text-secondary font-semibold  mb-4">Full Scalability</h3>
                <p className="text-gray-600">
                    Your application will automatically increase or decrease cloud computing resources in response to usage.
                </p>
                </div>

                {/* New Business Speed */}
                <div className="md:text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex md:items-center justify-center md:mx-auto mb-4">
                <Image src="/assets/Frame-icon-2.svg" className="text-white" width={24} height={24} alt='h' />
                </div>
                <h3 className="text-xl font-sora font-semibold text-secondary mb-4">New Business Speed</h3>
                <p className="text-gray-600">
                    Reducing time-to-market under a perfected continuous deployment model
                </p>
                </div>

                {/* Faster Delivery */}
                <div className="md:text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex md:items-center justify-center md:mx-auto mb-4">
                <Image src="/assets/Frame-icon-3.svg" className="text-white" width={24} height={24} alt='h' />
                </div>
                <h3 className="text-xl font-sora font-semibold text-secondary mb-4">Faster Delivery</h3>
                <p className="text-gray-600">
                    Cut cloud development time with hundreds of services from cloud providers
                </p>
                </div>

                {/* Never Overspend */}
                <div className="md:text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex md:items-center justify-center md:mx-auto mb-4">
                <Image src="/assets/Frame-icon-4.svg" className="text-white" width={24} height={24} alt='h' />
                </div>
                <h3 className="text-xl font-sora font-semibold text-secondary mb-4">Never Overspend</h3>
                <p className="text-gray-600">
                    Under the pay-per-use model, you avoid idle server time charges
                </p>
                </div>

                {/* Development Flexibility */}
                <div className="md:text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex md:items-center justify-center md:mx-auto mb-4">
                <Image src="/assets/Frame-icon-5.svg" className="text-white" width={24} height={24} alt='h' />
                </div>
                <h3 className="text-xl font-sora font-semibold text-secondary mb-4">Development Flexibility</h3>
                <p className="text-gray-600">
                    Swap, modify, or replace components on the go without refactoring
                </p>
                </div>

                {/* Outstanding Security */}
                <div className="md:text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex md:items-center justify-center md:mx-auto mb-4">
                <Image src="/assets/Frame-icon-6.svg" className="text-white" width={24} height={24} alt='h' />
                </div>
                <h3 className="text-xl font-sora font-semibold text-secondary mb-4">Outstanding Security</h3>
                <p className="text-gray-600">
                    The cloud offers first-class security services, so you won&apos;t have to build from scratch
                </p>
                </div>
            </div>
        </div>
    </div>
   
  )
}

export default CloudDevelopment