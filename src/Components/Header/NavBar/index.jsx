import React from "react";
import StyledNavBar from "./styles";

const Navbar = () => {
  return (
    <StyledNavBar>
      <ul>
        <li>
          <a href="#">
            <span>00</span> <p>HOME</p>
          </a>
        </li>
        <li>
          <a href="#">
            <span>01</span> <p>DESTINATION</p>
          </a>
        </li>
        <li>
          <a href="#">
            <span>02</span> <p>CREW</p>
          </a>
        </li>
        <li>
          <a href="#">
            <span>03</span> <p>TECHNOLOGY</p>
          </a>
        </li>
      </ul>
    </StyledNavBar>
  );
};

export default Navbar;
