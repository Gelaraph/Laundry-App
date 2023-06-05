import React from "react";
import { CgClose } from "react-icons/cg";
import "./modal.css";

// eslint-disable-next-line react/prop-types
const Modal = ({ onCloseModal, title, children }) => {
  const handleCloseModalClick = () => {
    onCloseModal();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="close-icon-div">
          <CgClose className="close-icon" onClick={handleCloseModalClick} />
        </div>

        <div>
          <h1 className="modal-title">{title}</h1>
          <div> {children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
