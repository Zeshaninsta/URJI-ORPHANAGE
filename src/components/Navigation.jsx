import {useState, useEffect} from 'react'
import { IoMdStarOutline } from "react-icons/io";
import Logo from '../assets/Images/logo.png'
import useScrollPosition from '../Hooks/useScrollPosition';
import { MdOutlineMenuOpen } from "react-icons/md";
import { MdClose } from "react-icons/md";
import FramerMotion from '../Animation/FramerMotion';

const Navigation = () => {
  const [isMobile, setisMobile] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const toggleMobile = () => {
    setisMobile(!isMobile);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
    className={`sticky top-0 py-4 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" : "bg-[#f1f8ff]"}`}
  >
            <div className='hidden md:flex w-full max-w-8xl mx-auto  justify-between items-center px-10'>
                <div className='relative flex justify-between items-center '>
                <img src={Logo} alt="logo" className='w-14 rounded-full' />
                <span className='flex justify-center items-center gap-5'>
                {/* <h1 className='text-white font-rubik text-xl font-bold'>URJI</h1> */}
                {/* <p className='text-md text-gray-300 capitalize'>
                being an Orphan Father is being a Father of Opportunity.
                </p> */}
                </span>
                </div>

                <div className=' '>
                 <ul className='flex justify-center items-center gap-10 text-xl  text-black w-full'>
                    <li className='font-inter font-light cursor-pointer text-sm uppercase'>Home</li>
                    <li className='font-inter font-light cursor-pointer text-sm uppercase'>About</li>
                    <li className='font-inter font-light cursor-pointer text-sm uppercase'>Services</li>
                    <li className='font-inter font-light cursor-pointer text-sm uppercase'>Contact</li>
                    </ul>
                    </div>
               
                <span className=''>
                  <button className='rounded-md  bg-primary hover:bg-primary/70 duration-500 text-white font-rubik px-4 py-2 z-20'>Donate Now</button>
                </span>
            </div>
            {/* Mobile */}
            <div className='w-full flex justify-between items-center p-2 md:hidden'>
              <div className='flex justify-between items-center'>
                <img src={Logo} alt="logo" className='w-8 rounded-full' />
              </div>
              <div className=''>
                <button onClick={toggleMobile} className='text-4xl text-black'>
                  {isMobile ? <MdClose className='text-primary' /> : <MdOutlineMenuOpen className='text-primary' />}
                </button>
              </div>
            </div>

            {/* Mobile */}
            {isMobile &&(
              <div className='md:hidden backdrop-blur-md h-svh bg-transparent  flex flex-col w-full z-50 md:max-w-8xl mx-auto  justify-between items-center px-10 py-2'>
                 <div className='flex gap-4 flex-col justify-center items-center'>
                 <ul className='flex flex-col justify-center items-center gap-10 text-xl  text-black w-full'>
                 <FramerMotion>
                    <li className='w-full border-b pb-1 border-primary font-inter font-normal cursor-pointer text-sm uppercase'>Home</li>
                  </FramerMotion>   
                  <FramerMotion>
                    <li className='w-full border-b pb-1 border-primary font-inter font-normal cursor-pointer text-sm uppercase'>About</li>
                    </FramerMotion>
                    <FramerMotion>
                    <li className='w-full border-b pb-1 border-primary font-inter font-normal cursor-pointer text-sm uppercase'>Services</li>
                    </FramerMotion>
                    <FramerMotion>
                    <li className='w-full border-b pb-1 border-primary font-inter font-normal cursor-pointer text-sm uppercase'>Contact</li>
                    </FramerMotion>
                    </ul>
                    <FramerMotion>
                    <div className='w-full m-auto h-[2px] bg-primary absolute bottom-0 rounded-full'></div>
                    </FramerMotion>
                    <FramerMotion>
                    <span className='my-5 flex justify-center w-full'>
                  <button className='rounded-md  w-full bg-primary hover:bg-primary/70 duration-500 text-white font-rubik px-4 py-2 z-20'>Donate Now</button>
                </span>
                </FramerMotion>
                <FramerMotion>
                    <div className='w-full my-2 m-auto h-[2px] bg-primary rounded-full'></div>
                    </FramerMotion>
                    <FramerMotion>
                    <h1 className='text-secondary text-center'>Newsletter</h1>
                    </FramerMotion>
                    <FramerMotion>
                    <p className='text-secondary text-sm text-center'>Stay updated with our latest news and events.</p>
                    </FramerMotion>
                    <div className='flex p-4'>
                    <FramerMotion>
                      <input type="text" placeholder='Your Email' className='outline-none focus:border-primary border p-2 border-primary/30 text-black ' />
                      </FramerMotion>
                      <FramerMotion>
                      <button className='bg-primary px-6 py-2 text-popover'>subscribe</button>
                      </FramerMotion>
                    </div>
                    </div>
              </div>
            )}
    </nav>
  )
}

export default Navigation