import React from "react";
import "../Style/header.css";
import DLC from "../Extra/DLC";
import ME from "../Assets/me.png";
import HeaderSocials from "../Extra/HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Mashrur Ul Huq</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <DLC />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          scroll down
        </a>
      </div>
    </header>
  );
};

export default Header;
