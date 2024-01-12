import React from "react";

// ICONS
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const Links = () => {
  return (
    <div className="menuBar-r-links-container">
      <a
        className="menuBar-r-links-a"
        href="https://www.linkedin.com/in/alessandro-milos-8a96aa258/"
        target="_blank"
      >
        <AiFillLinkedin className="links-icon links-linkedin-icon" href="" />
      </a>
      <a
        className="menuBar-r-links-a"
        href="https://github.com/AleMilos"
        target="_blank"
      >
        <AiFillGithub className="links-icon links-github-icon" />
      </a>
    </div>
  );
};

export default Links;
