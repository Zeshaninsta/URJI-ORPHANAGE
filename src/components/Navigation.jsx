import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineMenuOpen, MdClose } from "react-icons/md";
import Logo from "../assets/Images/logo.png";
import FramerMotion from "../Animation/FramerMotion";

const Navigation = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobile = () => {
    setIsMobile(!isMobile);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 py-2 px-2 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          : "bg-[#f1f8ff]"
      }`}
    >
      {/* Desktop Navigation */}
      <div className="hidden md:flex w-full max-w-8xl mx-auto justify-between items-center px-10">
        <div className="relative flex justify-between items-center ">
          <img src={Logo} alt="logo" className="w-14 rounded-full" />
        </div>

        <div>
          <ul className="flex justify-center items-center gap-10 text-xl text-black w-full">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <li key={item}>
                <NavLink
                  to={`/${item.toLowerCase()}`}
                  className={({ isActive }) =>
                    `font-inter font-light cursor-pointer text-sm uppercase px-4 py-2 rounded-md transition duration-300 ${
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "hover:text-primary"
                    }`
                  }
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <span>
          <button className="rounded-md bg-primary hover:bg-primary/70 duration-500 text-white font-rubik px-4 py-2 z-20">
            Donate Now
          </button>
        </span>
      </div>

      {/* Mobile Navigation */}
      <div className="w-full flex justify-between items-center p-2 md:hidden">
        <div className="flex justify-between items-center">
          <img src={Logo} alt="logo" className="w-8 rounded-full" />
        </div>
            {/* <div className='flex flex-col justify-center items-center border border-primary p-2 rounded-full'>
                <h1 className='text-sm'>URJI ORPHANAGE ORGANIZATION</h1>

                </div> */}
        <div>
          <button onClick={toggleMobile} className="text-4xl text-black">
            {isMobile ? (
              <MdClose className="text-primary" />
            ) : (
              <MdOutlineMenuOpen className="text-primary" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && (
        <div className="md:hidden backdrop-blur-md h-screen bg-transparent flex flex-col w-full z-50 mx-auto justify-between items-center px-10 py-2">
          <div className="flex flex-col justify-center items-center w-full gap-3">
            <FramerMotion>
              <ul className="mt-5 flex flex-col justify-center items-center gap-6 text-xl text-black w-full">
                {["Home", "About", "Services", "Contact"].map((item) => (
                  <li key={item} className="w-full text-start">
                    <NavLink
                      to={`/${item.toLowerCase()}`}
                      className={({ isActive }) =>
                        `w-full block text-sm uppercase border-b pb-1 border-primary font-inter font-normal px-4 py-2 transition duration-300 ${
                          isActive
                            ? "bg-primary/10 text-primary"
                            : "hover:text-primary"
                        }`
                      }
                      onClick={() => setIsMobile(false)} // Close mobile menu on click
                    >
                      {item}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </FramerMotion>
            <FramerMotion>
              <span className="my-5 flex justify-center w-full">
                <button className="rounded-md w-full bg-primary hover:bg-primary/70 duration-500 text-white font-rubik px-4 py-2">
                  Donate Now
                </button>
              </span>
            </FramerMotion>
            <div className="">
              {/* start */}
              <FramerMotion>
                <div className="w-full my-4 m-auto h-[2px] bg-primary rounded-full"></div>
              </FramerMotion>
              <FramerMotion>
                <h1 className="text-center text-3xl text-primary my-2">
                  Newsletter
                </h1>
              </FramerMotion>
              <FramerMotion>
                <p className="text-secondary text-sm text-center">
                  Stay updated with our latest news and events.
                </p>
              </FramerMotion>
              <div className="flex p-4">
                <FramerMotion>
                  <input
                    type="text"
                    placeholder="Your Email"
                    className="outline-none focus:border-primary border p-2 border-primary/30 text-black "
                  />
                </FramerMotion>
                <FramerMotion>
                  <button className="bg-primary px-6 py-2 text-popover">
                    subscribe
                  </button>
                </FramerMotion>
              </div>

              {/* last */}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
