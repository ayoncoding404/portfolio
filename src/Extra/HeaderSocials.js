import React from "react";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        {" "}
        <IoLogoLinkedin />{" "}
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        {" "}
        <IoLogoGithub />{" "}
      </a>
    </div>
  );
};

export default HeaderSocials;
