import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

// Skill tag component with mobile-specific adjustments


const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-6 sm:gap-10 lgl:gap-20 px-[2px] sm:px-0"
    >
      <div className="w-full">
        {/* Section Header */}
        <div className="py-4 sm:py-8 lgl:py-12 font-titleFont flex flex-col gap-1 sm:gap-4">
          <p className="text-xs sm:text-sm text-designColor tracking-[2px]">Experience</p>
         <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-black dark:text-white">
  Internships and Training
</h2>

        </div>

        {/* Internship Timeline */}
        <div className="mt-2 sm:mt-4 w-full h-auto border-l-[3px] sm:border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-6 sm:gap-10">

          {/* Data Science Intern */}
          <div className="flex flex-col gap-1 sm:gap-2">
            <ResumeCard
              title="Data Science Intern"
              subTitle="NSIC (June 2024 - July 2024)"
              result="Chennai, India"
              des="Worked on data preprocessing, visualization, and building machine learning models using Python.
Utilized libraries like Pandas and Scikit-learn for data handling and model development."
            />
            
          </div>

          {/* Web Development Intern */}
          <div className="flex flex-col gap-1 sm:gap-2">
            <ResumeCard
              title="Web Development Intern"
              subTitle="Interpe (Aug 2024 - Sep 2024)"
              result="Remote"
              des="Built responsive UIs with React and integrated REST APIs for dynamic functionality.
Collaborated using Git and GitHub for version control.
Deployed projects seamlessly on Netlify for production use."
            />
            
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
