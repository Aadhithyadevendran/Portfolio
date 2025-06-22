import React from "react";
import Title from "../layouts/Title";
import ResumePDF from "./resume_aadhithya.pdf";
import image from "./WhatsApp_Image_2025-06-22_at_11.59.35_c1a2465d-removebg-preview.png";

const About = () => {
  return (
<section
  id="about"
  className="w-full py-10 sm:py-10 md:py-16 lgl:py-20 border-b-[1px] border-b-black"
>
      <Title title="About Me" des="Who I Am" />
      <div className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20">
        {/* Left: Image */}
        <div className="w-full lgl:w-[30%] h-[450px] rounded-lg overflow-hidden shadow-shadowOne mx-auto lgl:mx-0">
          <img
            src={image}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: About Me Text */}
        <div className="w-full lgl:w-[60%] flex flex-col gap-6 px-4 sm:px-6 lgl:px-0">
          <h3 className="text-3xl font-bold text-white">I’m Aadhithya</h3>
          <p className="text-base font-bodyFont leading-7 text-gray-400">
            I’m a final-year Information Technology student at Saveetha Engineering College, driven by curiosity and a genuine interest in how technology can solve real-world problems. Being part of a tech-driven environment has helped me stay curious, proactive, and eager to learn beyond the classroom.<br /><br />
            I enjoy working with Java, Python, and the MERN stack to build clean, efficient, and user-focused web applications. Over time, I’ve taken part in hackathons, completed cloud certifications, and built projects that helped me grow both technically and personally. <br /><br />
            I’m currently looking for opportunities where I can apply what I’ve learned, take on new challenges, and continue growing as a developer. Whether it’s a collaborative project or a new learning experience, I’m excited to contribute and keep improving every step of the way.
          </p>

          {/* Download CV Button */}
          <a
            href={ResumePDF}
            download
            className="mt-4 w-40 text-center px-4 py-2 border border-designColor text-designColor rounded-md hover:bg-designColor hover:text-white duration-300"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
