"use client";

import { AiTwotonePlusCircle, AiTwotoneMinusCircle } from "react-icons/ai";
import Heading from "./dynamic/Heading";
import { useState } from "react";

const OurWorkingProcess = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);

  const accordion = [
    {
      heading: "Consultation",
      desc: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      heading: "Research and Strategy Development",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nam aliquam, repellendus consequatur commodi, ea necessitatibus voluptatum, delectus minima quidem eius consectetur aliquid. Minus veritatis inventore dolores porro voluptate blanditiis.",
    },
    {
      heading: "Implementation",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nam aliquam, repellendus consequatur commodi, ea necessitatibus voluptatum, delectus minima quidem eius consectetur aliquid. Minus veritatis inventore dolores porro voluptate blanditiis.",
    },
    {
      heading: "Monitoring and Optimization",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nam aliquam, repellendus consequatur commodi, ea necessitatibus voluptatum, delectus minima quidem eius consectetur aliquid. Minus veritatis inventore dolores porro voluptate blanditiis.",
    },
    {
      heading: "Reporting and Communication",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nam aliquam, repellendus consequatur commodi, ea necessitatibus voluptatum, delectus minima quidem eius consectetur aliquid. Minus veritatis inventore dolores porro voluptate blanditiis.",
    },
    {
      heading: "Continual Improvement",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nam aliquam, repellendus consequatur commodi, ea necessitatibus voluptatum, delectus minima quidem eius consectetur aliquid. Minus veritatis inventore dolores porro voluptate blanditiis.",
    },
  ];
  const setAccordion = (index: number) => {
    if (activeAccordion === index) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(index);
    }
  };
  return (
    <div className="space-y-8">
      <Heading
        title="Our Working Process"
        description="Step-by-Step Guide to Achieving Your Business Goals"
      />

      <div className="space-y-4">
        {accordion.map((content, index) => (
          <div key={index} onClick={() => setAccordion(index)}>
            <div
              className={`${
                activeAccordion === index ? "bg-green" : "bg-gray"
              } border border-b-4 border-dark hover:cursor-pointer p-6 rounded-3xl transition-all duration-500 ease-in-out`}
            >
              <div
                className={`${
                  activeAccordion === index && "border-b border-dark pb-4"
                } flex justify-between items-center`}
              >
                <div className="flex space-x-5">
                  <p>0{index + 1}</p>
                  <p>{content.heading}</p>
                </div>
                <div>
                  {activeAccordion === index ? (
                    <AiTwotoneMinusCircle className="text-3xl" />
                  ) : (
                    <AiTwotonePlusCircle className="text-3xl" />
                  )}
                </div>
              </div>
              {activeAccordion === index && (
                <p className="pt-3 bg-">{content.desc}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWorkingProcess;
