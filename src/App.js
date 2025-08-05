import React from "react";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import About from "./components/about/about";
function App() {
  return (
    <div className="w-full h-auto px-4 bg-white text-black dark:bg-[#1e2024] dark:text-white">
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <About />
        <Features />
        <Resume />
        <Projects />
        <Contact />
        <Footer />
        <FooterBottom />
      </div>
    </div>
  );
}


export default App;
