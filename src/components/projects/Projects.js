import React, { useState } from 'react';
import Title from '../layouts/Title';
import { exam, hostel, rural ,whats} from "../../assets/index";
import ProjectsCard from './ProjectsCard';
import { motion } from "framer-motion";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  // All project data (add more here)
  const projects = [
    {
      title: "Exam Slot Booking System",
      des: "A web application to manage and book exam slots, built with MERN stack. Admin and student panels included.",
      src: exam,
      githubLink: "https://github.com/Aswinth21/mini-project",
    },
    {
      title: "Rural Rise",
      des: "An AI-powered interview preparation assistant tailored for rural students, offering mock interviews, feedback, and skill-building resources.",
      src: rural,
      githubLink: "https://github.com/Aadhithyadevendran/RuralRise-Project",
    },
    {
      title: "what's Chat",
      des: "Whats Chat is a web-based real-time chat app with email login, offering fast one-on-one messaging—unlike WhatsApp, it's browser-focused.",
      src: whats,
      githubLink: "https://github.com/yourusername/hostel-management",
    },
    {
      title: "Hostel Management System (Python)",
      des: "Built using Python, this tool helps manage student hostels, room allocation, and records tracking efficiently.",
      src: hostel,
      githubLink: "https://github.com/yourusername/hostel-management",
    },
    
  ];

  return (
    <motion.section
  id="projects"
  className="w-full py-10 border-b-[1px] border-b-black px-2 sm:px-0"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true, amount: 0.2 }}
>
      <div className="flex justify-center items-center text-center mb-6 sm:mb-10">
        <Title des="My Projects" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 xl:gap-14">
        {(showAll ? projects : projects.slice(0, 3)).map((project, index) => (
          <ProjectsCard
            key={index}
            title={project.title}
            des={project.des}
            src={project.src}
            githubLink={project.githubLink}
          />
        ))}
      </div>

      {!showAll && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-2 text-sm sm:text-base font-medium text-white bg-designColor rounded-md hover:bg-opacity-80 transition duration-300"
          >
            + More
          </button>
        </div>
      )}
    </motion.section>
  );
};

export default Projects;
