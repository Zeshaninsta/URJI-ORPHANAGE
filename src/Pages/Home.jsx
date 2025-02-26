import React from "react";
import heroImage from "../assets/Images/1.jpg"; // Adjust the path as needed
import banner from "../assets/Images/nav.jpg";
import Button from "../components/Button";
import { GrOrganization } from "react-icons/gr";
import { FaHandsHelping } from "react-icons/fa";
import { GiHotMeal } from "react-icons/gi";
import { GiClothes } from "react-icons/gi";
import { PiHandPointing } from "react-icons/pi";
import { FcDonate } from "react-icons/fc";
import { MdOutlineExpandMore } from "react-icons/md";
import BG from "/public/Images/1.jpg";
import StatCard from '../Pages/Stat-Card'
import FramerMotion from '../Animation/FramerMotion'
const Home = () => {
  return (
    <div className="min-h-screen w-full h-full bg-[#f1f8ff]">
      <div className="flex  flex-col  items-center justify-center relative "
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.09)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black,transparent)]" />
        <div className="bg-transparent bg-opacity-50 p-4 md:p-8  rounded-lg text-center z-20 md:h-screen w-full flex flex-col justify-start items-center relative">
          <h1 className=" text-xs md:text-sm font-rubik py-2 px-4 border border-black text-black rounded-full cursor-pointer z-50 flex items-center gap-2 mt-4">
            <GrOrganization />
            Urji Orphanage Organization
          </h1>
          <FramerMotion>
          <h1 className="z-50 text-4xl md:text-7xl text-black font-bold mb-4 font-inter leading-10 my-5 md:my-6">
            Empowering <span className="text-primary ">Lives</span>,{" "}
            <br /> One <span className="text-primary ">Child</span>{" "}
            at a Time
          </h1>
          </FramerMotion>
          <FramerMotion>
          <p className="z-50 text-sm text-gray-800 w-full md:max-w-3xl mx-auto font-inter">
            Our mission is to provide care, education, and opportunities to
            orphaned children, ensuring they thrive and succeed in life. Join us
            in our mission to bring hope and a brighter future to those in need.
          </p>
          </FramerMotion>
          <FramerMotion>
          <div className="space-x-4 mt-5 md:mt-10 flex justify-center items-center z-50">
            {/* <PiHandPointing className="hidden md:block text-4xl rotate-90" /> */}
            <button className="px-6 py-3 bg-primary hover:bg-primary/60 duration-500 ease-in flex items-center gap-2 justify-center text-white rounded-md">
              Donate Now
            </button>

            {/* <a href="/donate" className="bg-blue-500 text-white p-4 rounded-lg shadow hover:bg-blue-700 transition duration-300">Donate Now</a> */}
            <a
              href="/learn-more"
              className="bg-[#191919] hover:bg-black text-white px-6 border border-white  flex items-center gap-2 py-3 rounded-lg shadow transition duration-300"
            >
              Our Program 
            </a>
          </div>
          </FramerMotion>
          <FramerMotion>
         <StatCard />
         </FramerMotion>
        </div>
        {/* impact */}
      </div>
    </div>
  );
};

export default Home;
