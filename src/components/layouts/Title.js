import React from 'react';

const Title = ({ title, des }) => {
  return (
    <div className="flex flex-col gap-4 font-titleFont mb-14">
      {/* Upper small title (like "CONTACT") */}
      <h3 className="text-sm uppercase font-light text-designColor tracking-wide">
        {title}
      </h3>

      {/* Main heading (like "Contact With Me") */}
      <h1 className="text-4xl md:text-5xl text-gray-900 dark:text-gray-300 font-bold capitalize">
        {des}
      </h1>
    </div>
  );
};

export default Title;
