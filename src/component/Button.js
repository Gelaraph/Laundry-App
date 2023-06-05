import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Button = ({ text, onClick, children, className, type }) => (
  <ButtonStyle>
    {/* eslint-disable-next-line react/button-has-type */}
    <button type={type} onClick={onClick} className={className}>
      {text}
      {children}
    </button>
  </ButtonStyle>
);

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.string,
};
Button.defaultProps = {
  children: null,
};

const ButtonStyle = styled.div`
  margin: 0 auto;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    cursor: pointer;
    outline: none;
    font-size: 0.9rem;
    width: 150px;
    height: 40px;
    border-radius: 8px;
    border: none;
    border-radius: 4px;
    background-color: transparent;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #2d7f73;
    text-align: center;
    letter-spacing: 0.015em;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  button:hover {
    opacity: 0.8;
    transition: 0.4s ease-in-out;
  }
`;

export default Button;
