import React from "react";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
} from "react-icons/ti";

const FooterContactUs = () => {
  return (
    <div className="flex flex-col md:flex-row border-b pb-8 border-white">
      <div className="text-center md:text-left mb-6 md:mb-0 md:w-1/2 text-sm space-y-4">
        <span className="text-base bg-green rounded-lg text-dark p-1 font-semibold">
          Contact us:
        </span>
        <p>Email: info@positivus.com</p>
        <p>Phone: 555-567-8901</p>
        <p>Address: 1234 Main St Moonstone City, Stardust State 12345</p>
      </div>
      <div
        className="flex flex-row py-8 px-4 items-center justify-center w-full md:w-1/2 rounded-xl"
        style={{ backgroundColor: "#292A32" }}
      >
        <div className="flex flex-col md:flex-row gap-4 ">
          <input
            type="text"
            placeholder="Email"
            className="border-2 bg-inherit rounded-lg"
          />
          <button className="bg-green text-dark rounded-lg text-sm py-3 md:px-6">
            Subscribe to news
          </button>
        </div>
      </div>
      <div className="md:hidden flex justify-center mt-6" >
        <div className="gap-6 flex text-dark text-xl">
          <div className="bg-white rounded-full p-1 hover:cursor-pointer hover:bg-green">
            <TiSocialLinkedin />
          </div>
          <div className="bg-white rounded-full p-1 hover:cursor-pointer hover:bg-green">
            <TiSocialFacebook />
          </div>
          <div className="bg-white rounded-full p-1 hover:cursor-pointer hover:bg-green">
            <TiSocialTwitter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContactUs;
