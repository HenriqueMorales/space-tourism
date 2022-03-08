import React from "react";
import StyledHeader from "./styles";

import logo from "@/assets/shared/logo.svg";
import menu from "@/assets/shared/icon-hamburger.svg";

const Header = () => {
  return (
    <StyledHeader>
      <img className="logo" src={logo} alt="Logo" />
      <img className="menu" src={menu} alt="Menu" />
    </StyledHeader>
  );
};

export default Header;
