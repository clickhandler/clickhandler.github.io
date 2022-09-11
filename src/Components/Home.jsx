import React from "react";
import "../Style/Home.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import About from "../Utils/About";
import Projects from "../Utils/Projects";
import Skills from "../Utils/Skills";
// import Work from "../Utils/Work";
import Contact from "../Utils/Contact";
const Home = () => {
  return (
    <div className="Home">
      <div>
        <Navbar />
      </div>
      <div>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        {/* <section id="work">
          <Work />
        </section> */}
        <section id="contact">
          <Contact />
        </section>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
