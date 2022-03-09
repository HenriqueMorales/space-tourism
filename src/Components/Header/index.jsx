import React from "react";

import StyledHeader from "./styles";

import logo from "@/assets/shared/logo.svg";
import menu from "@/assets/shared/icon-hamburger.svg";
import Navbar from "./NavBar";

const Header = () => {
  return (
    <StyledHeader>
      <img className="logo" src={logo} alt="Logo" />

      <img className="menu" src={menu} alt="Menu" />

      <Navbar />
    </StyledHeader>
  );
};

export default Header;
