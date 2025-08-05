import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2010 - Present
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full  border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.Tech in Information Technology"
            subTitle="Saveetha Engineering College (2022 - Present)"
            result="CGPA: 8.3/10"
            des="Pursuing Bachelor of Technology in IT with a focus on software development, problem-solving, and full-stack engineering."
          />
         <ResumeCard
  title="Higher Secondary Education"
  subTitle="Sri Ramakrishna Matric Hr. Sec. School (2020 - 2022)"
  result="Percentage: 85%"
  des="Completed Higher Secondary with Biology and Mathematics as core subjects, building a strong foundation in analytical and life sciences."
/>


          <ResumeCard
            title="Secondary Education"
            subTitle="Sri Ramakrishna Matric Hr. Sec. School (2011 - 2020)"
            result="Percentage: 80%"
            des="Built foundational academic skills and discipline during school-level education."
          />
        </div>
      </div>
      {/* part Two */}

     
    </motion.div>
  );
};

export default Education;
