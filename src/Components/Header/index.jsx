import React, { useState } from "react";

import StyledHeader from "./styles";

import logo from "@/assets/shared/logo.svg";
import menu from "@/assets/shared/icon-hamburger.svg";
import Navbar from "./NavBar";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu((prevValue) => !prevValue);
  };

  return (
    <StyledHeader>
      <img className="logo" src={logo} alt="Logo" />

      <img className="menu" src={menu} alt="Open menu" onClick={handleClick} />

      <Navbar handleClick={handleClick} showMenu={showMenu ? showMenu : null} />
    </StyledHeader>
  );
};

export default Header;
