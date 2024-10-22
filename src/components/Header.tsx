'use client'
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseCircleOutline } from "react-icons/io5";

const items: string[] = [
  "About Us",
  "Services",
  "Use Cases",
  "Pricing",
  "Blog",
];

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <header className="bg-white">
      <div className="flex justify-between items-center py-2 mx-5 sm:mx-10 lg:mx-20">
        <div className="flex items-center">
          <Link href="/" className="hover:cursor-pointer">
            <Image
              src={"/images/logo-dark.png"}
              width={170}
              height={170}
              alt="Picture of the author"
            />
          </Link>
        </div>
        <div className="flex items-center space-x-5 lg:space-x-10">
          {items.map((item, index) => (
            <Link href="#" key={index} className="hidden md:block text-black hover:underline">
              {item}
            </Link>
          ))}
          <button className="hidden md:block text-black border border-black px-4 py-2 rounded hover:bg-dark hover:text-white">
            Request a Quote
          </button>
          <RxHamburgerMenu className="md:hidden text-2xl hover:cursor-pointer" onClick={()=>setShowMobileMenu(true)} />
        </div>

        <div className={`${showMobileMenu ? 'translate-x-0 opacity-100': 'translate-x-full opacity-0'} md:hidden items-start flex-start fixed top-0 right-0 h-screen w-full sm:w-64 z-50 bg-red-400/5 shadow-customized flex flex-col backdrop-blur-2xl transition-all ease-in-out duration-500`}>
          
          <div className="mt-4 w-full flex justify-center">
          <IoCloseCircleOutline className="text-3xl hover:cursor-pointer hover:text-red-500" onClick={()=>setShowMobileMenu(false)}/>

          </div>
          {items.map((item, index) => (
            <Link
              href="#"
              key={index}
              className="text-black hover:underline w-full hover:bg-green py-3 px-4"
            >
              {item}
            </Link>
          ))}
          <button className="text-black border border-black ml-4 px-4 py-2 rounded hover:bg-dark hover:text-white mt-2">
            Request a Quote
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
