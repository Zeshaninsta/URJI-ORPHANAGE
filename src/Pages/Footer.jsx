import React from 'react';
import Logo from '../assets/Images/logo.png'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { GrOrganization } from "react-icons/gr";
const Footer = () => {
  return (
    <footer className="relative w-full flex justify-center items-center flex-col bg-[#f1f8ff] text-black py-10 px-6 md:px-12">
       <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.09)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black,transparent)]" />
      <div className='flex flex-col justify-center items-center my-3 gap-2'>
      <img src={Logo} alt="logo" className='w-14 object-cover object-center' />
      <h1 className='flex items-center gap-2 justify-center'><GrOrganization /> Urji Orphanage Organization</h1>
      </div>
      <div className='w-full h-[1px] bg-gray-400 my-2'></div>
      <div className="max-w-6xl flex flex-col mx-auto justify-center items-center gap-4 ">
        {/* Contact Info */}
           {/* Quick Links */}
           <div  className='flex justify-center items-center flex-col'>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="flex items-center gap-2 ">
            <li><a href="/" className="hover:text-teal-400 transition">Home</a></li>
            <li><a href="/about" className="hover:text-teal-400 transition">About Us</a></li>
            <li><a href="/services" className="hover:text-teal-400 transition">Services</a></li>
            <li><a href="/contact" className="hover:text-teal-400 transition">Contact</a></li>
          </ul>
        </div>

        <div className='w-full p-4 flex justify-center items-center flex-col'>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <ul className="flex items-center flex-col md:flex-row justify-center gap-4 w-full">
            <li className="flex items-center space-x-3 cursor-pointer">
              <FaPhoneAlt className="text-teal-400" />
              <span>+123 456 7890</span>
            </li>
            <li className="flex items-center space-x-3 cursor-pointer">
              <FaEnvelope className="text-teal-400" />
              <span>urjiorphanageorganization@gamil.com</span>
            </li>
            <li className="flex items-center space-x-3  cursor-pointer">
              <FaMapMarkerAlt className="text-teal-400" />
              <span>Robe Bale, Ethiopia</span>
            </li>
          </ul>
        </div>
        </div>
      {/* Social Media Links */}
      <div className="mt-8 text-center">
        <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
        <div className="flex justify-center space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition">
            <FaFacebookF className="text-2xl" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition">
            <FaTwitter className="text-2xl" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition">
            <FaLinkedinIn className="text-2xl" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition">
            <FaInstagram className="text-2xl" />
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 text-center border-t border-gray-700 pt-4">
        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Urji Orphanage Organization. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
