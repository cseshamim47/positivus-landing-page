import React from 'react'
import Image from 'next/image'
import { BsArrowUpRightCircleFill } from 'react-icons/bs'

const EmailMarketing = () => {
  return (
    <div className="bg-dark rounded-3xl h-64">
          <div className="bg-gray rounded-3xl h-63 border border-dark">
            <div className="grid grid-cols-2 h-44 m-10 ">
              <div className="grid grid-cols-1 content-between h-full">
                <div>
                  <div className="h-6">
                    <span className="sm:max-lg:text-sm bg-green rounded font-semibold text-lg">
                      Email
                    </span>
                  </div>
                  <div>
                    <span className="sm:max-lg:text-sm bg-green rounded font-semibold text-lg">
                      Marketing
                    </span>
                  </div>
                </div>
                <div className="flex">
                    <div className="flex gap-2 items-center hover:cursor-pointer">

                    <BsArrowUpRightCircleFill className="bg-green rounded-full text-3xl" />
                    <span className='sm:max-lg:text-sm'>Learn more</span>
                    </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
              <Image
                src={'/images/emailmarketing.png'}
                width={200}
                height={0}
                alt="Picture of Search Engine"
               />
              </div>
            </div>
          </div>
        </div>
  )
}

export default EmailMarketing