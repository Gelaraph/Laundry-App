/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from "react";
import "./menu.css";
import { NavLink } from "react-router-dom";
import Modal from "../authModals/Modal";
import SignUpModal from "../authModals/SignUpModal";
import SignInModal from "../authModals/SignInModal";

const Menu = () => {
  const [isModalOpen, setIsModalOpen] = useState({
    signUp: false,
    signIn: false,
  });

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
    <div className="Navbars">
      <ul className="NavbarWrappers">
        <li className="NavbarElement">
          <NavLink className="link" to="/">
            Home
          </NavLink>
        </li>
        <li className="NavbarElement">
          <NavLink className="link" to="/about-us">
            About Us
          </NavLink>
        </li>
        <li className="NavbarElement">
          <NavLink className="link" to="/contact-us">
            Contact Us
          </NavLink>
        </li>
        <li
          className="NavbarElement link"
          onClick={() => handleOpenModal("signIn")}>
          Sign In
        </li>
        <li
          className="Navbutton linkbtn signup-btn"
          onClick={() => handleOpenModal("signUp")}>
          Sign Up
        </li>
      </ul>

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

export default Menu;
