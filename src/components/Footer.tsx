import React from 'react'
import FooterNavbar from './FooterComponents/FooterNavbar'
import FooterContactUs from './FooterComponents/FooterContactUs'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bg-dark text-white rounded-t-3xl p-8 space-y-8'>
      <FooterNavbar />
      <FooterContactUs />
      <div className='md:space-x-8 text-sm flex flex-col md:flex-row text-center'>
        <span>© 2023 Positivus. All Rights Reserved.</span>
        <Link href='#' className='underline'>Privacy Policy</Link>
      </div>
    </div>
  )
}

export default Footer