import React from "react";
import "../../COMPONENTS/Footer/Footer.css";
import email from "./Icons/email.png";
import linkedin from "./Icons/linkedin.png";
import fb from "./Icons/facebook.png";
import phone from "./Icons/phone.png";
import "../../COMPONENTS/Footer/FooterQueries.css";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="logos">
        <ul>
          <li>
            <a href="/">
              <img src={email} alt="email" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={linkedin} alt="linkedin" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={fb} alt="fb" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={phone} alt="phone" />
            </a>
          </li>
        </ul>
      </div>

      <div className="nav">
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

      <div className="last-footer">
        <p>© 2023 Marco A. Melgar | All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
