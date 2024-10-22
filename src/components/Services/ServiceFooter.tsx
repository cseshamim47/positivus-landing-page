import React from 'react'
import Image from 'next/image'

const ServiceFooter = () => {
  return (
    <div className='grid md:grid-cols-2 bg-gray rounded-3xl p-8 relative'>
      <div className='space-y-3'>
        <p className='font-semibold text-lg'>Let&apos;s make things happen</p>
        <p>
          Contact us today to learn more about how our digital marketing services can help your
          business grow and succeed online.
        </p>
        <button className='px-4 py-2 rounded-lg bg-dark border border-dark text-white hover:bg-gray hover:text-black'>
          Get your free proposal
        </button>
      </div>
      <div className='hidden relative md:block'>
        <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 ml-4'>
          <Image
            src={'/images/servicesFooter.png'}
            height={210} // Adjust height as needed
            width={210} // Adjust width as needed
            alt='services footer image'
          />
        </div>
      </div>
    </div>
  )
}

export default ServiceFooter
