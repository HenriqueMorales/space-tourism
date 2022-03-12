import React from "react";
import StyledNavBar from "./styles";
import closeMenuIcon from "@/assets/shared/icon-close.svg";

const Navbar = (props) => {
  return (
    <StyledNavBar showMenu={props.showMenu}>
      <img src={closeMenuIcon} onClick={props.handleClick} />
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
