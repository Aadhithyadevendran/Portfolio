import React from 'react';
import { FaReact, FaPython, FaJava } from "react-icons/fa";
import Title from '../layouts/Title';
import Card from './Card';
import { motion } from "framer-motion";

const Features = () => {
  return (
<motion.section
  id="features"
  className="w-full pb-0 mt-10"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true, amount: 0.2 }}
>      <Title title="My Core Skills" des="Tech Expertise" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="React Development"
          des="Developing responsive and scalable web interfaces using React and Tailwind CSS, with a focus on user experience."
          icon={<FaReact />}
        />
        <Card
          title="Java Programming"
          des="Writing efficient, object-oriented code for building robust backend systems and solving algorithmic challenges."
          icon={<FaJava />}
        />
        <Card
          title="Python Scripting"
          des="Focused on writing clean Python code for scripting and problem-solving, with exposure to machine learning concepts."
          icon={<FaPython />}
        />
      </div>
    </motion.section>
  );
};

export default Features;
