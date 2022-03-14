import React from "react";
import StyledNavBar from "./styles";
import closeMenuIcon from "@/assets/shared/icon-close.svg";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <StyledNavBar showMenu={props.showMenu}>
      <img src={closeMenuIcon} onClick={props.handleClick} />
      <ul>
        <li>
          <Link to="/">
            <span>00</span> <p>HOME</p>
          </Link>
        </li>
        <li>
          <Link to="/destination">
            <span>01</span> <p>DESTINATION</p>
          </Link>
        </li>
        <li>
          <Link to="/crew">
            <span>02</span> <p>CREW</p>
          </Link>
        </li>
        <li>
          <Link to="/technology">
            <span>03</span> <p>TECHNOLOGY</p>
          </Link>
        </li>
      </ul>
    </StyledNavBar>
  );
};

export default Navbar;
