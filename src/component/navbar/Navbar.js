/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import LogoImg from "../../assets/logo.png";
import Button from "../Button";
import Modal from "../authModals/Modal";
import SignUpModal from "../authModals/SignUpModal";
import SignInModal from "../authModals/SignInModal";

// eslint-disable-next-line react/prop-types
const Navbar = ({ clicked, isClicked }) => {
  const [isModalOpen, setIsModalOpen] = useState({
    signUp: false,
    signIn: false,
  });

  const handleClicked = () => {
    isClicked(!clicked);
  };

  const handleOpenModal = (modalType) => {
    setIsModalOpen((prevState) => ({
      ...prevState,
      [modalType]: true,
    }));
  };

  const handleCloseModal = (modalType) => {
    setIsModalOpen((prevState) => ({
      ...prevState,
      [modalType]: false,
    }));
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        event.target.classList.contains("modal-overlay") &&
        isModalOpen.signUp
      ) {
        handleCloseModal("signUp");
      } else if (
        event.target.classList.contains("modal-overlay") &&
        isModalOpen.signIn
      ) {
        handleCloseModal("signIn");
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isModalOpen]);

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
          <Button type="submit" onClick={() => handleOpenModal("signUp")}>
            Create account
          </Button>
        </li>
        <li
          className="NavElements Link sign-in-link"
          onClick={() => handleOpenModal("signIn")}
          style={{ float: "right", margin: "-8px 2px 1px 2px" }}>
          Sign In
        </li>
      </ul>
      {!clicked ? (
        <GiHamburgerMenu onClick={handleClicked} className="Icon" />
      ) : (
        <ImCross onClick={handleClicked} className="Icon" />
      )}

      {isModalOpen.signUp && (
        <Modal
          onCloseModal={() => handleCloseModal("signUp")}
          title="Create account">
          <SignUpModal />
        </Modal>
      )}

      {isModalOpen.signIn && (
        <Modal onCloseModal={() => handleCloseModal("signIn")} title="Sign In">
          <SignInModal />
        </Modal>
      )}
    </div>
  );
};

export default Navbar;
