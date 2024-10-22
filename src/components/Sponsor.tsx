import React from "react";
import Image from "next/image";
import amazon from "../../public/images/amazon.png";
import dribble from "../../public/images/dribble.png";
import hubspot from "../../public/images/hubspot.png";
import netflix from "../../public/images/netflix.png";
import notion from "../../public/images/notion.png";
import zoom from "../../public/images/zoom.png";

const images = [amazon, dribble, hubspot, notion, netflix, zoom];

const Sponsor = () => {
  return (
    <div className="grid grid-cols-3 justify-items-center gap-x-4 sm:flex sm:justify-between">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          height={0}
          width={0}
          alt={`sponsor logo ${index + 1}`}
          className="grayscale hover:grayscale-0 transition duration-300 hover:cursor-pointer"
        />
      ))}
    </div>
  );
};

export default Sponsor;
