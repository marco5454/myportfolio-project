import React from "react";
import "../../COMPONENTS/Header/Header.css";
import profile from "../../Images/meme.png";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="qoutes">
        <h1>I am looking for</h1>
        <h1>oppurtunity</h1>
        <h1>
          to <span>work</span> with.
        </h1>
      </div>

      <div className="profile-image">
        <img src={profile} alt="profile-ko" />
      </div>
    </div>
  );
};

export default Header;
