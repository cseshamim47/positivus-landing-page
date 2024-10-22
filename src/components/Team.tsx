'use client'
import React, { useState } from 'react'
import Heading from './dynamic/Heading'
import TeamMember from './TeamMember';

interface Item {
    name: string;
    position: string;
    desc: string;
    image: string;
}
const data: Item[] = [
    {
        name: 'John Smith',
        position: 'CEO and Founder',
        desc: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
        image: 'john-smith'
    },
    {
        name: 'Jane Doe',
        position: 'Director of Operations',
        desc: '7+ years of experience in project management and team leadership. Strong organizational and communication skills',
        image: 'jane-doe'
    },
    {
        name: 'Michael Brown',
        position: 'Senior SEO Specialist',
        desc: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization',
        image: 'michael-brown'
    },
    {
        name: 'Emily Johnson',
        position: 'PPC Manager',
        desc: '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis',
        image: 'emily-johnson'
    },
    {
        name: 'Brian Williams',
        position: 'Social Media Specialist',
        desc: '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement',
        image: 'brian-williams'
    },
    {
        name: 'Sarah Kim',
        position: 'Senior SEO Specialist',
        desc: '2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries',
        image: 'sarah-kim'
    },
    {
        name: 'Md. Shamim Ahmed',
        position: 'Senior Web Developer',
        desc: '500+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization',
        image: 'dummy'
    },
    {
        name: 'Your Name Here',
        position: 'Best Buyer Ever',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non accusamus ad, nostrum hic',
        image: 'dummy'
    },
    {
        name: 'Your Parner Name',
        position: 'Best Partner',
        desc: 'Lorem, quia, pariatur soluta ut totam fugiat laborum quae adipisci! Ipsam, nihil dolores repellendus hic! ',
        image: 'dummy'
    }
];

const Team = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className='space-y-8'>
        <Heading title='Team' description='Meet the skilled and experienced team behind our successful digital marketing strategies' />
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {showAll ? data.map((info, index) => (
                <TeamMember key={index} info={info} index={index}/>
            )) : data.slice(0, 6).map((info, index) => (
                <TeamMember key={index} info={info} index={index}/>
            ))}
        </div>
        <div className='text-end'>
            <button onClick={() => setShowAll(!showAll)} className='bg-dark border border-dark hover:bg-white hover:text-dark text-white font-bold py-2 px-4 rounded-lg'>
                {!showAll ? "See All Team" : "See Less"}
            </button>
        </div>
    </div>
  )
}

export default Team