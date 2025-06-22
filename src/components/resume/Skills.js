import React from "react";
import { motion } from "framer-motion";

const SkillBar = ({ label, level }) => {
  return (
    <div className="overflow-x-hidden">
      <p className="text-xs sm:text-sm uppercase font-medium text-gray-300">{label}</p>
      <span className="w-full h-1 sm:h-2 bgOpacity rounded-md inline-flex mt-1 sm:mt-2">
        <motion.span
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ width: level }}
          className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
        >
          <span className="absolute -top-5 right-0 text-xs sm:text-sm text-white">{level}</span>
        </motion.span>
      </span>
    </div>
  );
};

const Skills = () => {
  return (
    <>
      {/* Row 1 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        className="w-full flex flex-col lgl:flex-row gap-8 lgl:gap-20"
      >
        {/* Programming Skills */}
        <div className="w-full lgl:w-1/2">
          <div className="py-6 sm:py-12 font-titleFont flex flex-col gap-2 sm:gap-4">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-white">Programming Skills</h2>
          </div>
          <div className="mt-2 sm:mt-4 w-full flex flex-col gap-4 sm:gap-6">
            <SkillBar label="Java" level="90%" />
            <SkillBar label="Python" level="80%" />
            <SkillBar label="C" level="70%" />
            <SkillBar label="JavaScript" level="80%" />
          </div>
        </div>

        {/* Development Skills */}
        <div className="w-full lgl:w-1/2">
          <div className="py-6 sm:py-12 font-titleFont flex flex-col gap-2 sm:gap-4">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-white">Development Skills</h2>
          </div>
          <div className="mt-2 sm:mt-4 w-full flex flex-col gap-4 sm:gap-6">
            <SkillBar label="React" level="80%" />
            <SkillBar label="HTML5" level="100%" />
            <SkillBar label="CSS3" level="95%" />
            <SkillBar label="Node.js" level="80%" />
            <SkillBar label="JavaScript" level="80%" />
          </div>
        </div>
      </motion.div>

      {/* Row 2 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        className="w-full flex flex-col lgl:flex-row gap-8 lgl:gap-20 mt-10 sm:mt-12"
      >
        {/* Database Skills */}
        <div className="w-full lgl:w-1/2">
          <div className="py-6 sm:py-12 font-titleFont flex flex-col gap-2 sm:gap-4">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-white">Database Skills</h2>
          </div>
          <div className="mt-2 sm:mt-4 w-full flex flex-col gap-4 sm:gap-6">
            <SkillBar label="SQL" level="80%" />
            <SkillBar label="NoSQL" level="75%" />
          </div>
        </div>

        {/* Tools and Technologies */}
        <div className="w-full lgl:w-1/2">
          <div className="py-6 sm:py-12 font-titleFont flex flex-col gap-2 sm:gap-4">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-white">Tools and Technologies</h2>
          </div>
          <div className="mt-2 sm:mt-4 w-full flex flex-col gap-4 sm:gap-6">
            <SkillBar label="Postman" level="80%" />
            <SkillBar label="Github" level="80%" />
            <SkillBar label="VS Code" level="95%" />
            <SkillBar label="Canva" level="80%" />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Skills;
