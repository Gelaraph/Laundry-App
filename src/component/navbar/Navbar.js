import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import LogoImg from "../../assets/logo.png";
import Button from "../Button";

// eslint-disable-next-line react/prop-types
const Navbar = ({ clicked, isClicked }) => {
  const handleClicked = () => {
    isClicked(!clicked);
  };
  return (
    <div className="Nav">
      <ul className="NavbarWrapper">
        <li className="NavLogo">
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            <img src={LogoImg} alt="" />
          </Link>
        </li>
        <li className="NavElements">
          <NavLink className="Link" to="/">
            Home
          </NavLink>
        </li>
        <li className="NavElements">
          <NavLink className="Link" to="/services">
            Services
          </NavLink>
        </li>
        <li className="NavElements">
          <NavLink className="Link" to="/team">
            Team
          </NavLink>
        </li>

        <li className="NavElements">
          <NavLink className="Link" to="/contact">
            Contact
          </NavLink>
        </li>
        <li className="NavButton">
          {/* <NavLink className="Link" to="/sign-up"> */}
          <Button type="submit"> Create account</Button>
          {/* </NavLink> */}
        </li>
        <li
          className="NavElements"
          style={{ float: "right", margin: "-8px 2px 1px 2px" }}>
          <NavLink className="Link sign-in-link" to="/sign-in">
            Sign In
          </NavLink>
        </li>
      </ul>
      {!clicked ? (
        <GiHamburgerMenu onClick={handleClicked} className="Icon" />
      ) : (
        <ImCross onClick={handleClicked} className="Icon" />
      )}
    </div>
  );
};

export default Navbar;
