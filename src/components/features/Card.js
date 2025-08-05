import React from "react";
import { HiArrowRight } from "react-icons/hi";

const Card = ({ title, des, icon }) => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-10 lg:py-10 h-auto lg:h-80 rounded-lg 
      shadow-[0_8px_30px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_25px_rgba(255,255,255,0.08)]
      flex items-center bg-white dark:bg-gradient-to-r dark:from-bodyColor dark:to-[#202327] 
      group hover:shadow-lg hover:shadow-black/30 dark:hover:shadow-white/20 
      transition-all duration-300 text-black dark:text-white">
      
      <div className="h-auto overflow-y-hidden">
        <div className="flex flex-col gap-6 sm:gap-8 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">

          {/* Icon or Bars */}
          <div className="w-10 h-8 flex flex-col justify-between">
            {icon ? (
              <span className="text-3xl sm:text-4xl md:text-5xl text-designColor">{icon}</span>
            ) : (
              <>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
              </>
            )}
          </div>

          {/* Title, Description, Arrow */}
          <div className="flex flex-col gap-4 sm:gap-6">
            <h2 className="text-base sm:text-lg md:text-xl font-titleFont font-bold text-gray-700 dark:text-gray-300">
              {title}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
              {des}
            </p>
            <span className="text-xl sm:text-2xl text-designColor">
              <HiArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
