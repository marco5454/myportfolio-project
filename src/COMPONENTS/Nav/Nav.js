import React from "react";
import "../../COMPONENTS/Nav/Nav.css";
import "../../COMPONENTS/Nav/NavQueries.css";

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
            <a href="/#">Role</a>
          </li>
          <li>
            <a href="/#">About</a>
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
