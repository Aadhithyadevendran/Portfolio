import React from 'react';
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full pt-10 pb-10 flex flex-col mdl:flex-row gap-10 xl:gap-0 items-center border-b-[1px] font-titleFont border-b-black dark:border-b-white"
    >
      <LeftBanner />
      <RightBanner />
    </section>
  );
};

export default Banner;
