import React from "react";
import Title from "../layouts/Title";
import ResumePDF from "./resume_aadhithya.pdf";
import image from "./WhatsApp_Image_2025-06-22_at_11.59.35_c1a2465d-removebg-preview.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
  id="about"
  className="w-full py-10 sm:py-10 md:py-16 lgl:py-20 border-b-[1px] border-b-black"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4}}
  viewport={{ once: true, amount: 0.2 }}
>
      <Title title="About Me" des="Who I Am" />

      <div className="w-full flex flex-col mdl:flex-row gap-10 lgl:gap-20">
        {/* Left: Image */}
        <div
          className="w-full md:w-[420px] lgl:w-[30%] h-[450px] rounded-lg overflow-hidden 
  shadow-[0_10px_40px_rgba(0,0,0,0.25)] 
  dark:shadow-[0_10px_40px_rgba(255,255,255,0.08)] 
  transition-shadow duration-300 mx-auto lgl:mx-0"
        >
          <img
            src={image}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: About Me Text */}
        <div className="w-full lgl:w-[60%] flex flex-col gap-6 px-4 sm:px-6 lgl:px-0">
          <h3 className="text-3xl font-bold text-black dark:text-white">
            I’m Aadhithya
          </h3>

          {/* ✅ Mobile and Tablet Only */}
          <div className="block mdl:hidden text-base font-bodyFont leading-7 text-gray-500">
            <p>
              I’m a final-year IT student at Saveetha Engineering College.
              Passionate about tech, I enjoy building user-focused web apps
              using Java, Python, and the MERN stack.
            </p>
            <br />
            <p>
              I’m currently looking for opportunities where I can apply what
              I’ve learned, take on new challenges, and continue growing as a
              developer. Whether it’s a collaborative project or a new learning
              experience, I’m excited to contribute and keep improving every
              step of the way.
            </p>
          </div>

          {/* ✅ Laptop and Larger Only */}
          <p className="hidden mdl:block text-base font-bodyFont leading-7 text-gray-500">
            I’m a final-year Information Technology student at Saveetha
            Engineering College, driven by curiosity and a genuine interest in
            how technology can solve real-world problems. Being part of a
            tech-driven environment has helped me stay curious, proactive, and
            eager to learn beyond the classroom.
            <br />
            <br />
            I enjoy working with Java, Python, and the MERN stack to build
            clean, efficient, and user-focused web applications. Over time, I’ve
            taken part in hackathons, completed cloud certifications, and built
            projects that helped me grow both technically and personally.
            <br />
            <br />
            I’m currently looking for opportunities where I can apply what I’ve
            learned, take on new challenges, and continue growing as a
            developer. Whether it’s a collaborative project or a new learning
            experience, I’m excited to contribute and keep improving every step
            of the way.
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
    </motion.section>
  );
};

export default About;
