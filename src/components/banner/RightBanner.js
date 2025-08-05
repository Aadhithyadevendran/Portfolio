import React from 'react';
import myImage from "../../assets/images/IMG20241105124758.png";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[70%] h-auto sm:w-[280px] sm:h-auto lgl:w-[500px] lgl:h-[680px] object-contain z-10"
        src={myImage}
        alt="bannerImg"
      />
      {/* Background glow box */}
      <div className="absolute bottom-0 w-[75%] h-[60%] sm:w-[300px] sm:h-[280px] lgl:w-[500px] lgl:h-[500px]
        bg-gradient-to-r from-white to-gray-200 dark:from-[#1e2024] dark:to-[#202327]
        shadow-lg dark:shadow-shadowOne flex justify-center items-center"
      ></div>
    </div>
  );
};

export default RightBanner;
