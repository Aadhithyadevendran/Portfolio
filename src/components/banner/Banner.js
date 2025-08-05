import React from 'react';
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <motion.section
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true, amount: 0.3 }}
      id="home"
      className="w-full pt-36 pb-10 flex flex-col mdl:flex-row gap-10 xl:gap-0 items-center border-b-[1px] font-titleFont border-b-black dark:border-b-white"
    >
      <LeftBanner />
      <RightBanner />
    </motion.section>
  );
};

export default Banner;
