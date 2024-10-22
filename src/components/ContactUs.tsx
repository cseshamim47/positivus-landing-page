import React from "react";
import Heading from "./dynamic/Heading";
import Image from 'next/image'
import ContactUsIllustration from '../../public/images/contact-us.png'

const ContactUs = () => {
  return (
    <div className="space-y-8">
      <Heading
        title="Contact Us"
        description="Connect with Us: Lets Discuss Your Digital Marketing Needs"
      />

      <div className="flex justify-between bg-gray rounded-3xl py-8 pl-8">
        <div className="space-y-8 w-full md:w-1/2">
          <div className="flex gap-6">
            <div className="flex items-center justify-center gap-2">
              <input type="radio" className="form-radio h-4 w-4 checked:bg-green
              text-green focus:ring-1 focus:ring-dark" name="radio" value="1" />
              <label>Say Hi</label>
            </div>
            <div className="flex items-center justify-center gap-2">
              <input type="radio" className="form-radio h-4 w-4 checked:bg-green
              text-green focus:ring-1 focus:ring-dark" name="radio" value="1" />
              <label>Get a Quote</label>
            </div>
          </div>
          <div>
            <form action="#" className="pr-5 space-y-4">
              <div className="space-y-1">
                <p className="text-sm">Name</p>
                <input type="text" className="rounded-lg w-full focus:border-dark focus:ring-dark" placeholder="Name" />
              </div>
              <div className="space-y-1">
                <p className="text-sm">Email*</p>
                <input type="text" className="rounded-lg w-full focus:border-dark focus:ring-dark" placeholder="Email" />
              </div>
              <div className="space-y-1">
                <p className="text-sm">Message*</p>
                <textarea rows={5} className="rounded-lg w-full focus:border-dark focus:ring-dark" placeholder="Message" />
              </div>
              <button className="rounded-lg border border-dark hover:bg-white  hover:text-dark bg-dark text-white w-full py-3">Send Message</button>
            </form>
          </div>
        </div>
        <div className="hidden w-1/2 md:flex justify-center items-center overflow-hidden">
          <Image 
            src={ContactUsIllustration}
            height={0}
            width={0}
            alt="abstract illustration"
            style={{transform: 'translateX(47%)'}}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
