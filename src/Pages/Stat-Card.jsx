import { useEffect, useState } from "react";
import { FaHandsHelping } from "react-icons/fa";
import { GiHotMeal, GiClothes } from "react-icons/gi";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { useInView } from "react-intersection-observer";

const StatCard = ({ icon: Icon, target, label }) => {
  const count = useMotionValue(0);
  const rounded = useSpring(count, { stiffness: 50, damping: 20 });
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    if (inView) {
      count.set(target);
    }
  }, [inView, count, target]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayCount(Math.floor(latest));
    });
    return () => unsubscribe();
  }, [rounded]);

  return (
    <div
      ref={ref}
      className="flex flex-col justify-center items-center border border-primary/50 p-4 gap-4 rounded-md"
    >
      <Icon className="text-7xl text-primary p-3 md:p-5 rounded-full bg-primary/20" />
      <motion.h1 className="text-4xl md:text-6xl font-inter text-primary">
        {displayCount}+
      </motion.h1>
      <p className="text-md">{label}</p>
    </div>
  );
};

const StatsGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 w-full my-5 md:my-8 md:max-w-4xl mx-auto md:h-auto">
      <StatCard icon={FaHandsHelping} target={100} label="Orphan Helps" />
      <StatCard icon={GiHotMeal} target={500} label="Meals Provided" />
      <div className="col-span-2 md:col-span-1">
        <StatCard icon={GiClothes} target={300} label="Cloth Provided" />
      </div>
    </div>
  );
};

export default StatsGrid;
