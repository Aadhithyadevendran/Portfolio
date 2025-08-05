import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Link } from "react-scroll";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaReact,
  FaJava,
  FaPython,
  FaNodeJs,
} from "react-icons/fa";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Software Engineer.", "Full Stack Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-16 sm:gap-20">
      <div className="flex flex-col gap-4 sm:gap-5">
        <h4 className="text-[12px] sm:text-base font-normal text-gray-500 dark:text-gray-400">
          WELCOME TO MY WORLD
        </h4>
        <h1 className="text-[24px] sm:text-4xl lgl:text-6xl font-bold text-black dark:text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Aadhithya D</span>
        </h1>
        <h2 className="text-[18px] sm:text-3xl lgl:text-4xl font-bold text-black dark:text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking={false}
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-[13px] sm:text-base text-gray-700 dark:text-gray-300 leading-6 tracking-wide">
          A Final Year B.Tech Information Technology Student at Saveetha
          Engineering College, Chennai.
        </p>

        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="inline-block w-fit mt-4"
        >
          <button className="px-6 py-2 text-sm sm:text-base font-medium text-white bg-designColor rounded-md hover:bg-opacity-80 transition duration-300">
            Contact Me
          </button>
        </Link>
      </div>

      <div className="flex flex-col lgl:flex-row gap-6 justify-between">
        <div className="hidden lgl:block">
          <h2 className="text-[10px] sm:text-sm uppercase font-titleFont mb-3 sm:mb-4 text-gray-500 dark:text-gray-400">
            Find me in
          </h2>
          <div className="flex gap-3 sm:gap-4">
            <a
              href="https://github.com/Aadhithyadevendran"
              target="_blank"
              rel="noreferrer"
            >
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
            <a
              href="https://www.facebook.com/Aadhithyaa03"
              target="_blank"
              rel="noreferrer"
            >
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/aadhithyad02"
              target="_blank"
              rel="noreferrer"
            >
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-[10px] sm:text-sm uppercase font-titleFont mb-3 sm:mb-4 text-gray-500 dark:text-gray-400">
            Best Skill On
          </h2>
          <div className="flex gap-3 sm:gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <FaJava />
            </span>
            <span className="bannerIcon">
              <FaPython />
            </span>
            <span className="bannerIcon">
              <FaNodeJs />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
