import React from "react";

const Heading = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="space-y-8 lg:space-y-0 lg:flex lg:space-x-10 items-start">
      <div className="flex items-center justify-center">
        <span className="lg:flex lg:items-center lg:justify-center bg-green rounded px-4 font-semibold text-2xl p-1">
          {title}
        </span>
      </div>

      <p className="text-center lg:text-left  lg:flex-none lg:w-2/4">{description}</p>
    </div>
  );
};

export default Heading;
