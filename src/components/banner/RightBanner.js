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
      <div className="absolute bottom-0 w-[75%] h-[60%] sm:w-[300px] sm:h-[280px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
};

export default RightBanner;
