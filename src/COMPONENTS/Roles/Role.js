import React from "react";
import profile from "../../Images/role-image.jpg";
import "../../COMPONENTS/Roles/Role.css";
import "../../COMPONENTS/Roles/RoleQueries.css";

const Role = () => {
  return (
    <div className="role-wrapper">
      <div className="my-roles-desc">
        <div className="overall-role">
          <h1>
            I lead the member of Migrasia's investigation and case management
            projects. I also oversee the social media, client intake, and case
            support team and serve as a bridge between the organisation's social
            media support system and Migrasia's other teams.
          </h1>
        </div>

        <div className="role-desc">
          <p>
            At Migrasia, I hold a key leadership role with diverse
            responsibilities, including leading investigation and case
            management projects, managing social media presence, and overseeing
            client intake and support. My duties also include coordinating
            between social media support and other teams to ensure alignment
            across the organization. I focus on strategic planning, risk
            management, and quality control in all areas, working
            collaboratively to enhance Migrasia's reach, impact, and efficiency,
            and contributing to a work environment that aligns with the
            company's mission and values.
          </p>
        </div>

        <div className="btn">
          <button>
            <span>Contact me</span>
          </button>
        </div>
      </div>

      <div className="image">
        <img src={profile} alt="role" />
      </div>
    </div>
  );
};

export default Role;
