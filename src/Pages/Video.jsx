import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import FramerMotion from '../Animation/FramerMotion'

export default function Video() {
  const videoSrc = [
    { src: "https://www.youtube.com/embed/S2jPO08zjCo" },
    { src: "https://www.youtube.com/embed/fIv-RNvAg_0" },
    { src: "https://www.youtube.com/embed/w7quqUco518" },
    {
      src: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Furjiorphanageorganization%2Fvideos%2F1101429860743656%2F&show_text=false&width=560&t=0",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next video
  const nextVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videoSrc.length);
  };

  // Function to go to the previous video
  const prevVideo = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? videoSrc.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide effect every 10 seconds
  useEffect(() => {
    const interval = setInterval(nextVideo, 10000); // Change video every 10 sec
    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex]);

  return (
    <section id="video" className="py-5 px-4 bg-white">
      <FramerMotion>
        <h2 className="text-4xl font-extrabold text-center text-secondary mb-10 tracking-wide">
          Our Impact
        </h2>
        </FramerMotion>
      <div className="container mx-auto px-6 lg:px-12 border border-border py-5 rounded-md">
        <div className="max-w-4xl mx-auto relative">
      <FramerMotion>
          {/* Video Frame with Motion */}
          <motion.div
            key={currentIndex} // Ensures re-render on index change
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="aspect-video mb-6 overflow-hidden rounded-lg shadow-xl border border-gray-200"
          >
            <iframe
              className="w-full h-full"
              src={videoSrc[currentIndex].src}
              title="Urji Impact Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>
          </FramerMotion>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-between w-full px-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevVideo}
              className="bg-primary text-white p-3 rounded-full shadow-md hover:scale-110 transition-transform"
            >
              <FaArrowLeft className="text-lg" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextVideo}
              className="bg-primary text-white p-3 rounded-full shadow-md hover:scale-110 transition-transform"
            >
              <FaArrowRight className="text-lg" />
            </motion.button>
          </div>
        </div>

        {/* Description */}
        <FramerMotion>
        <p className="text-sm md:text-md text-center  mt-6 text-gray-700 leading-relaxed">
          Watch how your support is changing lives and creating brighter futures for children in need.
        </p>
        </FramerMotion>
        {/* Call to Action */}
        <div className="text-center mt-8">
        <FramerMotion>
          <Button
            asChild
            size="lg"
            className="text-sm md:text-md px-6 py-3 font-medium rounded-md shadow-md hover:shadow-lg transition-shadow"
          >
            <a href="#support">Make a Difference Today</a>
          </Button>
          </FramerMotion>
        </div>
      </div>
    </section>
  );
}
