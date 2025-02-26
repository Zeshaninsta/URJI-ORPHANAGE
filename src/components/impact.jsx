import React, { useEffect, useState } from 'react';

const Impact = () => {
  const [counts, setCounts] = useState({
    orphanHelped: 0,
    mealProvided: 0,
    clothProvided: 0,
  });

  useEffect(() => {
    const animateCounts = (target, start, end, duration) => {
      let startTime = null;

      const step = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = currentTime - startTime;
        const progressPercentage = Math.min(progress / duration, 1);

        const value = Math.floor(progressPercentage * (end - start) + start);
        setCounts((prevCounts) => ({
          ...prevCounts,
          [target]: value,
        }));

        if (progressPercentage < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    };

    animateCounts('orphanHelped', 0, 100, 2000);
    animateCounts('mealProvided', 0, 500, 2000);
    animateCounts('clothProvided', 0, 300, 2000);
  }, []);

  return (
    <section className="w-full flex flex-col justify-center items-center bg-white p-10 lg:h-[450px] text-black rounded-lg">
      <h1 className="font-inter font-extrabold text-5xl mb-5 capitalize text-center tracking-wide">
        Our Impact in Numbers
      </h1>
      <p className="font-inter font-light text-lg text-gray-950 mb-6 text-center">
Our dedicated efforts have touched countless lives, creating a brighter future for orphaned children.
</p>

      <div className="flex flex-col lg:flex-row justify-around items-center w-full max-w-6xl gap-10">
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="font-bold font-inter text-7xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500">
            {counts.orphanHelped}+
          </h1>
          <p className="font-inter font-light text-lg text-gray-950">Orphans Helped</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="font-bold font-inter text-7xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-500">
            {counts.mealProvided}+
          </h1>
          <p className="font-inter font-light text-lg text-gray-950">Meals Provided</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="font-bold font-inter text-7xl bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500">
            {counts.clothProvided}+
          </h1>
          <p className="font-inter font-light text-lg text-gray-950">Clothes Provided</p>
        </div>
      </div>
    </section>
  );
};

export default Impact;
