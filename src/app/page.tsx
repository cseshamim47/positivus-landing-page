import CaseStudies from '@/components/CaseStudies'
import ContactUs from '@/components/ContactUs'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import OurWorkingProcess from '@/components/OurWorkingProcess'
import Services from '@/components/Services'
import Sponsor from '@/components/Sponsor'
import Team from '@/components/Team'
import Testimonials from '@/components/Testimonials'
import React from 'react'

const page = () => {
  return (
    <div className='space-y-12'>
      <Hero />
      <Sponsor />
      <Services />
      <CaseStudies />
      <OurWorkingProcess />
      <Team />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default page