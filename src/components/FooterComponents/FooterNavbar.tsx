import React from "react";
import Image from "next/image";
import LogoWhite from "../../../public/images/logo-white.png";
import Link from "next/link";
import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter } from "react-icons/ti";

const items: string[] = [
  "About Us",
  "Services",
  "Use Cases",
  "Pricing",
  "Blog",
];

const FooterNavbar = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div>
        <Link href="#">
          <Image src={LogoWhite} width={100} height={0} alt="logo white" />
        </Link>
      </div>
      <div className="text-center mt-8 md:mt-0 gap-3 md:gap-8 flex flex-col md:flex-row">
        {items.map((item, index) => (
          <Link href="#" key={index} className="underline hover:text-green">
            {item}
          </Link>
        ))}
      </div>
      <div className="hidden md:flex gap-2 text-dark text-xl">
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
  );
};

export default FooterNavbar;
