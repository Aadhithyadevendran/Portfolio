import React, { useState } from "react";
import Title from "../layouts/Title";
import Education from "./Education";
import Skills from "./Skills";
import Achievement from "./Achievement";
import Experience from "./Experience";

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);
  const [achievementData, setAchievementData] = useState(false);

  return (
<section id="resume" className="w-full pt-16 lgl:pt-10"
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
            className={`${
              educationData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
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
            className={`${
              skillData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            Professional Skills
          </li>
          <li
            onClick={() => {
              const projectSection = document.getElementById("projects");
              projectSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="resumeLi border-transparent"
          >
            Projects
          </li>
          <li
            onClick={() => {
              setEducationData(false);
              setSkillData(false);
              setExperienceData(true);
              setAchievementData(false);
            }}
            className={`${
              experienceData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
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
            className={`${
              achievementData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
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
    </section>
  );
};

export default Resume;
