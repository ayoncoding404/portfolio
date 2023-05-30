import React from "react";
import "../Style/about.css";
import ABOUT from "../../src/Assets/about.jpg";
import { GoBriefcase } from "react-icons/go";
import { VscFolderLibrary } from "react-icons/vsc";
import { HiWrenchScrewdriver } from "react-icons/hi2";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h1>About Me</h1>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ABOUT} alt="About Image" />
          </div>
        </div>
        
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <GoBriefcase className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years Of Working</small>
            </article>

            <article className="about__card">
              <HiWrenchScrewdriver className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years Of Working</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>2+ Years Of Working</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            perferendis voluptate, possimus tempora quae totam alias
            consequuntur expedita aliquam deleniti velit sequi optio aut laborum
            odit voluptatum exercitationem iste in.
          </p>

          <a href="#contact" className="btn btn-primary">
            {" "}
            Let's Talk{" "}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
