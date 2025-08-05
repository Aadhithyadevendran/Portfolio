import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-white dark:bg-gradient-to-r dark:from-[#1e2024] dark:to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-[0_10px_40px_rgba(0,0,0,0.2)] dark:shadow-[0_10px_40px_rgba(255,255,255,0.05)] flex flex-col gap-8 justify-center text-black dark:text-white">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contact"
      />

      <div className="flex flex-col gap-4">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">Aadhithya D</h3>
        <p className="text-sm sm:text-base md:text-lg font-normal text-gray-700 dark:text-gray-400">
          Open to full-time roles, freelance projects, or internships in software development.
        </p>
        <p className="text-sm md:text-base text-gray-700 dark:text-gray-400">
          Phone: <span className="text-black dark:text-lightText">+91 7397381695</span>
        </p>
        <p className="text-sm md:text-base text-gray-700 dark:text-gray-400">
          Location: <span className="text-black dark:text-lightText">Chennai</span>
        </p>
        <p className="text-sm md:text-base text-gray-700 dark:text-gray-400">
          Email: <span className="text-black dark:text-lightText">aadhithya.sec@gmail.com</span>
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-xs sm:text-sm uppercase font-titleFont mb-3 sm:mb-4 text-gray-700 dark:text-gray-400">
          Find me in
        </h2>
        <div className="flex gap-3 sm:gap-4">
          <a href="https://www.linkedin.com/in/aadhithyad02" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/Aadhithyadevendran" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaGithub />
          </a>
          <a href="https://www.facebook.com/Aadhithyaa03" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/_aadhi__03_/" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
