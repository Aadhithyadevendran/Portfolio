import React from 'react';

const ResumeCard = ({ title, subTitle, result, des, className = '' }) => {
  return (
    <div className={`w-full h-auto group flex ${className}`}>
      {/* Timeline Indicator */}
      <div className="w-10 h-[6px] bg-opacity-20 dark:bg-opacity-30 bg-gray-400 mt-16 relative">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
          <span className="w-3 h-3 rounded-full bg-bodyColor group-hover:bg-designColor transition duration-300"></span>
        </span>
      </div>

      {/* Card Content */}
      <div className="w-full bg-white dark:bg-[#1e2024] hover:bg-gray-100 dark:hover:bg-[#2a2e33] transition duration-300 rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-[0_4px_20px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_20px_rgba(255,255,255,0.05)] border border-gray-300 dark:border-gray-700">
        {/* Header */}
        <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-black dark:text-white group-hover:text-designColor transition duration-300">
              {title}
            </h3>
            <p className="text-sm mt-2 text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition duration-300">
              {subTitle}
            </p>
          </div>
          <div>
            <p className="px-4 py-2 text-designColor bg-opacity-10 bg-black dark:bg-white dark:bg-opacity-10 rounded-lg text-sm font-medium shadow-sm">
              {result}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm md:text-base font-medium text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition duration-300">
          {des}
        </p>
      </div>
    </div>
  );
};

export default ResumeCard;
