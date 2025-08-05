import React, { useState, useEffect } from "react";
import Title from "../layouts/Title";
import Education from "./Education";
import Skills from "./Skills";
import Achievement from "./Achievement";
import Experience from "./Experience";
import { motion } from "framer-motion";

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);
  const [achievementData, setAchievementData] = useState(false);

  useEffect(() => {
    const handleSwitchTab = (e) => {
      const tab = e.detail;
      switch (tab) {
        case "education":
          setEducationData(true);
          setSkillData(false);
          setExperienceData(false);
          setAchievementData(false);
          break;
        case "skills":
          setEducationData(false);
          setSkillData(true);
          setExperienceData(false);
          setAchievementData(false);
          break;
        case "experience":
          setEducationData(false);
          setSkillData(false);
          setExperienceData(true);
          setAchievementData(false);
          break;
        case "achievement":
          setEducationData(false);
          setSkillData(false);
          setExperienceData(false);
          setAchievementData(true);
          break;
        default:
          break;
      }
    };

    window.addEventListener("switchTab", handleSwitchTab);
    return () => window.removeEventListener("switchTab", handleSwitchTab);
  }, []);

  return (
    <motion.section
  id="resume"
  className="w-full pt-16 lgl:pt-10"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4 }}
  viewport={{ once: true, amount: 0.3 }}
>

      <div className="flex justify-center items-center text-center">
        <Title des="" />
      </div>

      {/* Navigation */}
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-4 mb-4">
          <li
            onClick={() => {
              setEducationData(true);
              setSkillData(false);
              setExperienceData(false);
              setAchievementData(false);
            }}
            className={`resumeLi ${
              educationData
                ? "border-designColor dark:border-red-500 rounded-lg"
                : "border-transparent"
            }`}
          >
            Education
          </li>
          <li
            onClick={() => {
              setEducationData(false);
              setSkillData(true);
              setExperienceData(false);
              setAchievementData(false);
            }}
            className={`resumeLi ${
              skillData
                ? "border-designColor dark:border-red-500 rounded-lg"
                : "border-transparent"
            }`}
          >
            Professional Skills
          </li>
          <li
            onClick={() => {
              setEducationData(false);
              setSkillData(false);
              setExperienceData(true);
              setAchievementData(false);
            }}
            className={`resumeLi ${
              experienceData
                ? "border-designColor dark:border-red-500 rounded-lg"
                : "border-transparent"
            }`}
          >
            Experience
          </li>
          <li
            onClick={() => {
              setEducationData(false);
              setSkillData(false);
              setExperienceData(false);
              setAchievementData(true);
            }}
            className={`resumeLi ${
              achievementData
                ? "border-designColor dark:border-red-500 rounded-lg"
                : "border-transparent"
            }`}
          >
            Achievements
          </li>
        </ul>
      </div>

      {/* Section Rendering */}
      {educationData && <Education />}
      {skillData && <Skills />}
      {achievementData && <Achievement />}
      {experienceData && <Experience />}
    </motion.section>
  );
};

export default Resume;
