import React from 'react';
import { BsGithub } from "react-icons/bs";

const ProjectsCard = ({ title, des, src, githubLink }) => {
  return (
    <div className="w-full p-2 sm:p-4 xl:px-12 h-auto sm:py-6 xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      <div className="w-full h-40 sm:h-60 overflow-hidden rounded-lg">
        <img
          className="w-full h-full object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt="project thumbnail"
        />
      </div>
      <div className="w-full mt-2 sm:mt-5 flex flex-col gap-3 sm:gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-sm sm:text-base uppercase text-designColor font-medium">
              {title}
            </h3>
            <div className="flex gap-2">
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300"
              >
                <BsGithub />
              </a>
            </div>
          </div>
          <p className="text-xs sm:text-sm tracking-wide mt-2 sm:mt-3 hover:text-gray-100 duration-300">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
