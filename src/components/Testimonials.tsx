"use client";

import React, { useEffect, useRef, useState } from "react";
import Heading from "./dynamic/Heading";
import { HiArrowLongDown } from "react-icons/hi2";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

const Testimonials = () => {
  const parentDivRef = useRef<HTMLDivElement>(null); // Reference to the div
  const childDivRef = useRef<HTMLDivElement>(null);
  const [divSize, setDivSize] = useState({ width: 0, height: 0 }); // State to store div size
  const [childDivSize, setChildDivSize] = useState(0);
  // Function to update the div size
  const updateDivSize = () => {
    if (parentDivRef.current) {
      const { width, height } = parentDivRef.current.getBoundingClientRect();
      setDivSize({ width, height });
      let childWidth = childDivRef.current?.getBoundingClientRect().width;
      if (!childWidth) childWidth = 466;
      setChildDivSize(childWidth);
      
      let Translate: number = -((childWidth - (width - (childWidth+64)) / 2));
      Translate = Translate - (childWidth+32);
      setTranslate(Translate);
      setActiveIndex(2);
      Translate = divSize.width;
    }
  };

  // useEffect to get size on mount and resize
  useEffect(() => {
    // Initial size
    updateDivSize();

    // Listen for window resize to update size dynamically
    window.addEventListener("resize", updateDivSize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", updateDivSize);
    };
  }, []); // Empty dependency array means this runs on mount and unmount

  const [activeIndex, setActiveIndex] = useState(2);
  const [translate, setTranslate] = useState(0);
  const testimonials = [
    {
      review:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      name: "Michael Johnson",
      designation: "Founder, GHI Startups",
    },
    {
      review:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      name: "Jane Smith",
      designation: "Marketing Manager, DEF Agency",
    },
    {
      review:
        '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
      name: "John Smith",
      designation: "Marketing Director at XYZ Corp",
    },
    {
      review:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      name: "Emily Brown",
      designation: "Digital Marketing Specialist, JKL Media",
    },
    {
      review:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
      name: "Brian Davis",
      designation: "CTO, MNO Tech",
    },
  ];

  const handleRightArrow = () => {
    if (activeIndex > 3) return;
    setActiveIndex(activeIndex + 1);
    setTranslate(translate - (childDivSize+32));
  };

  const handleLeftArrow = () => {
    if (activeIndex === 0) return;
    setActiveIndex(activeIndex - 1);
    setTranslate(translate + (childDivSize+32));
  };

  return (
    <div className="space-y-8">
      <Heading
        title="Testimonials"
        description="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
      />

      <div ref={parentDivRef} className="bg-dark space-y-16 rounded-3xl py-8 text-white">
        <div className="flex gap-8 overflow-hidden">
          {testimonials.map((testimonial, index) => (
            <div
              ref={childDivRef}
              key={index}
              className="min-w-80 md:min-w-testimonial flex flex-col transition-transform ease-out duration-500"
              style={{ transform: `translateX(${translate}px)` }}
            >
              <div className="border border-green rounded-3xl p-8 flex-grow">
                <p>{testimonial.review}</p>
              </div>
              <div className="ml-16 mt-4">
                <HiArrowLongDown className="text-green text-3xl -translate-x-3" />
                <p className="mt-2 text-green font-semibold">
                  {testimonial.name}
                </p>
                <p className="text-sm">{testimonial.designation}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <div className="flex justify-between items-center w-1/2">
            <FaLongArrowAltLeft
              onClick={handleLeftArrow}
              className={`text-2xl ${
                activeIndex === 0
                  ? "text-white/20"
                  : "hover:cursor-pointer hover:text-green text-white/70"
              }`}
            />
            <div className="flex items-center justify-center gap-2">
              {testimonials.map((_, i) => (
                <div
                  key={i}
                  className={`
                transition-all w-3 h-3 bg-green rounded-full
                ${activeIndex === i ? "p-2" : "bg-white/50"}
                `}
                />
              ))}
            </div>
            <FaLongArrowAltRight
              onClick={handleRightArrow}
              className={`text-2xl ${
                activeIndex > 3
                  ? "text-white/20"
                  : "hover:cursor-pointer hover:text-green text-white/70"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
