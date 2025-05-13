import React from "react";
import logo from "../assets/logo.png";
import hamburgerIcon from "../assets/hamburger.png";

const Header = () => (
  <header
    className="bg-[#ff6565] w-full flex items-center justify-between px-[50px] box-border"
    style={{ height: "121px" }}
  >
    <img
      src={logo}
      alt="Fable Logo"
      className="w-[138.07px] h-[49px] object-contain"
      draggable={false}
    />
    <img
      src={hamburgerIcon}
      alt="Menu"
      className="w-[31.79px] h-[24px] object-contain"
      draggable={false}
    />
  </header>
);

export default Header;