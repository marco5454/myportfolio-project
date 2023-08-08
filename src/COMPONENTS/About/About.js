import React from "react";
import "../../COMPONENTS/About/About.css";
import "../../COMPONENTS/About/AboutQueries.css";

const Header2 = () => {
  return (
    <div className="about-me-wrapper">
      <div className="title">
        <h1>
          This is &nbsp;<span>me</span>
        </h1>
      </div>

      <div className="about-me">
        <p>
          "Hi everyone! My name is Marco, and I'm an Information Technology
          Graduate from Partido State University, where I specialized in
          computer programming and the project management cycle. Currently, I
          have 2 years of professional experience as a Team Manager in the
          Social Media department of our company, leading projects and managing
          a dynamic team. My proficiency includes tools like Google Suites,
          Airtable, and various database software. I'm also honing my
          programming skills in JavaScript, focusing on REACT JS. Although I'm
          working full-time in project management, I'm passionate about
          collaboration and connecting with others who share my interests and
          enthusiasm for productivity."
        </p>
      </div>

      <div className="positions">
        <h1>
          <span>*Bachelor of Science</span> in Information Technology
        </h1>
        <h1>
          *Team <span>Manager</span> (Social Media System)
        </h1>
        <h1>
          *<span>Senior</span> Migration Specialist
        </h1>
        <h1>
          *Computer <span>Techncian</span> (Software)
        </h1>
        <h1>
          *Web Developer <span>Front-End</span>
        </h1>
      </div>

      <div className="download-cv">
        <button>Download CV</button>
      </div>
    </div>
  );
};

export default Header2;
