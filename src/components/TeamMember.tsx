import React from "react";
import Image from 'next/image'
import Link from "next/link";
import { RiLinkedinFill } from "react-icons/ri";


interface TeamMemberInfo {
    image: string;
    name: string;
    position: string;
    desc: string;
}

const TeamMember = ({info, index}:{info: TeamMemberInfo, index: number}) => {
  return (
    <div
      key={index}
      className="border border-b-4 border-dark p-6 rounded-3xl space-y-3"
    >
      <div className="flex items-start justify-between border-b border-dark pb-4">
        <div>
          <Image
            src={`/images/team/${info.image}.png`}
            width={70}
            height={0}
            alt={`image of ${info.name}`}
          />
        </div>
        <div className="self-end">
          <p className="font-semibold">{info.name}</p>
          <p className="text-xs">{info.position}</p>
        </div>
        <div>
          <Link href="/#">
            <p className="border border-dark rounded-full p-2 bg-dark">
              <RiLinkedinFill className="text-green" />
            </p>
          </Link>
        </div>
      </div>
      <div>
        <p className="text-sm">{info.desc}</p>
      </div>
    </div>
  );
};

export default TeamMember;
