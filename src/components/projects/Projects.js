import React from 'react';
import Title from '../layouts/Title';
import { exam, hostel, rural } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section id="projects" className="w-full py-16 border-b border-b-gray-300 dark:border-b-black px-[2px] sm:px-0">
      <div className="flex justify-center items-center text-center mb-6 sm:mb-10">
        <Title des="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 xl:gap-14">
        <ProjectsCard
          title="Exam Slot Booking System"
          des="A web application to manage and book exam slots, built with MERN stack. Admin and student panels included."
          src={exam}
          githubLink="https://github.com/Aswinth21/mini-project"
        />
        <ProjectsCard
          title="Rural Rise"
          des="An AI-powered interview preparation assistant tailored for rural students, offering mock interviews, feedback, and skill-building resources to enhance job readiness."
          src={rural}
          githubLink="https://github.com/Aadhithyadevendran/RuralRise-Project"
        />
        <ProjectsCard
          title="Hostel Management System (Python)"
          des="Built using Python, this tool helps manage student hostels, room allocation, and records tracking efficiently."
          src={hostel}
          githubLink="https://github.com/yourusername/hostel-management"
        />
      </div>
    </section>
  );
};

export default Projects;
