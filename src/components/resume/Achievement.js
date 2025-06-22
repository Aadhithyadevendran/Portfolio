import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Certifications Column */}
      <div className="w-full lgl:w-1/2">

        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
        </div>
        <div className="mt-6 lgl:mt-6 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Microsoft Azure - AI Associate Engineer"
            subTitle="ICT Academy - April 2024"
            result="Certified"
            des="Earned hands-on experience with Microsoft Azure AI tools. Implemented practical use cases using Azure Machine Learning and Azure Bot Services."
          />
          <ResumeCard
            title="Introduction to Internet of Things (IoT)"
            subTitle="NPTEL - April 2024"
            result="Completed"
            des="Explored IoT fundamentals including sensors, microcontrollers, cloud integration, and smart applications. Gained practical knowledge through Arduino-based projects."
          />
          <ResumeCard
            title="Microsoft Azure Fundamentals AZ-900 Exam Prep"
            subTitle="Coursera - December 2024"
            result="Completed"
            des="Acquired foundational knowledge of cloud services, Azure pricing, security, and support. Prepared extensively for AZ-900 certification with hands-on labs."
          />
          <ResumeCard
            title="Introduction to Microsoft Azure Cloud Services"
            subTitle="Microsoft - December 2024"
            result="Certified"
            des="Learned core cloud concepts including IaaS, PaaS, SaaS, and Azure tools. Understood deployment models and real-time monitoring of services."
          />
        </div>
      </div>

      {/* Hackathons Column */}
      <div className="w-full lgl:w-1/2">

        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Hackathons</h2>
        </div>
        <div className="mt-6 lgl:mt-6 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Qualcomm Hackathon"
            subTitle="Bangalore"
            result="Finalists"
            des="Developed a career guidance and interview assistant web app tailored for rural students. Used NLP APIs and dynamic mock interview simulations."
          />
          <ResumeCard
            title="IBM Z Hackathon"
            subTitle="Chennai"
            result="Participants"
            des="Created a health monitoring app that uses Flask for backend and React for frontend. Integrated ML models to detect anomalies from user health inputs."
          />
          <ResumeCard
            title="Gidy Hackathon"
            subTitle="Chennai"
            result="Finalists"
  des="Built a hostel management system with real-time complaint tracking and room booking using Python and Streamlit. Finalist among 50+ teams."
          />
          
          
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
