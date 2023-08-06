import React from "react";
import "../../COMPONENTS/Nav/Nav.css";

const Nav = () => {
  return (
    <nav>
      <div className="left-info">
        <h1>I'm Marco A. Melgar</h1>
        <h3>A Team Manager, Web Developer - Front End, and a Pianist.</h3>
      </div>

      <div className="right-info">
        <ul>
          <li>
            <a href="/#">Home</a>
          </li>
          <li>
            <a href="/#">CV</a>
          </li>
          <li>
            <a href="/#">Projects</a>
          </li>
          <li>
            <a href="/#">Contacts</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
