import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='flex'>
      <div className='lg:w-1/2 w-full'>
        <p className='font-semibold text-4.5xl lg:text-5xl lg:mt-2'>Navigating the</p>
        <p className='font-semibold text-4.5xl lg:text-5xl lg:mt-2'>digital landscape</p>
        <p className='font-semibold text-4.5xl lg:text-5xl lg:mt-2'>for success</p>

        <div className='lg:hidden w-full flex justify-center items-center'>
          <Image
              src={'/images/hero-illustration.png'}
              width={400}
              height={400}
              alt="Picture of the author"
          />
        </div>

        <p className='mt-6 pr-10'>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
        <button className='mt-6 bg-dark rounded-lg border text-white hover:bg-white hover:text-black hover:border-black px-4 py-3'>Book a consultation</button>
      </div>
      <div className='hidden w-1/2 lg:flex justify-end items-center'>
        <Image
            src={'/images/hero-illustration.png'}
            width={400}
            height={400}
            alt="Picture of the author"
        />
      </div>

    </div>
  )
}

export default Hero