import React from 'react';
import { HiOutlineLightBulb, HiOutlineGlobeAlt, HiOutlinePuzzle, HiOutlineChartBar, HiOutlineHeart, HiOutlineAcademicCap, HiOutlineTrendingUp, HiOutlineUsers } from "react-icons/hi";
import FramerMotion from '../Animation/FramerMotion';
const futurePrograms = [
  {
    title: 'Innovative Education',
    description: 'Revolutionizing education through innovative digital learning platforms and resources.',
    icon: <HiOutlineLightBulb className="text-primary text-4xl" />,
  },
  {
    title: 'Global Connectivity',
    description: 'Connecting communities worldwide through advanced communication technologies.',
    icon: <HiOutlineGlobeAlt className="text-primary text-4xl" />,
  },
  {
    title: 'Cognitive Development',
    description: 'Fostering cognitive skills with puzzles, games, and strategic thinking exercises.',
    icon: <HiOutlinePuzzle className="text-primary text-4xl" />,
  },
  {
    title: 'Data Analytics',
    description: 'Empowering decision-making with advanced data analytics and visualization tools.',
    icon: <HiOutlineChartBar className="text-primary text-4xl" />,
  },
  {
    title: 'Health & Wellness',
    description: 'Promoting health and wellness through fitness programs and mental health initiatives.',
    icon: <HiOutlineHeart className="text-primary text-4xl" />,
  },
  {
    title: 'Academic Excellence',
    description: 'Encouraging academic achievement through scholarships and mentorship programs.',
    icon: <HiOutlineAcademicCap className="text-primary text-4xl" />,
  },
  {
    title: 'Leadership Development',
    description: 'Developing future leaders through targeted leadership training and opportunities.',
    icon: <HiOutlineTrendingUp className="text-primary text-4xl" />,
  },
  {
    title: 'Community Engagement',
    description: 'Building strong communities through volunteer work and social initiatives.',
    icon: <HiOutlineUsers className="text-primary text-4xl" />,
  },
  {
    title: 'Innovative Education',
    description: 'Promoting interest in space sciences through interactive programs and workshops.',
    icon: <HiOutlineLightBulb className="text-primary text-4xl" />,
  },
];

const FutureProgram = () => {
  return (
    <div className="relative  min-h-screen bg-white flex flex-col items-center justify-center p-2 md:p-8">
      {/* Background */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-700 opacity-70 z-0"></div> */}

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-screen-xl mx-auto text-center px-2 md:px-4">
      <FramerMotion>
        <h1 className="text-4xl md:text-4xl font-extrabold text-secondary font-inter mb-12">Future Programs</h1>
        </FramerMotion>
        {/* Grid Layout */}
        <FramerMotion>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {futurePrograms.map((program, index) => (
            <FramerMotion>
            <div key={index} className="hover:shadow-md cursor-pointer border border-border p-2 md:p-6 rounded-lg relative  duration-300 ease-in-out">
              <div className="absolute inset-0 opacity-50 z-0 rounded-lg"></div>
              <div className="relative z-10 flex flex-col items-center">
                <div className="mb-4">
                  {program.icon}
                </div>
                <FramerMotion>
                <h2 className="text-xl font-inter  text-gray-800 mb-4">{program.title}</h2>
                </FramerMotion>
                <FramerMotion>
                <p className="text-gray-600 font-inter text-sm font-light">{program.description}</p>
                </FramerMotion>
              </div>
            </div>
            </FramerMotion>
          ))}
        </div>
        </FramerMotion>
      </div>
    </div>
  );
};

export default FutureProgram;
