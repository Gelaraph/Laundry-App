import React, { createContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

export const FormValidationContext = createContext();

const ValidationProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const validateEmail = () => {
    if (!email) {
      setEmailError("Email is required.");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Invalid email format.");
      return false;
    }
    setEmailError("");
    return true;
  };

  const validateName = () => {
    if (name.trim() === "") {
      setNameError("First Name is required.");
      return false;
    }
    setNameError("");
    return true;
  };

  const validatePassword = () => {
    if (!password) {
      setPasswordError("Password is required.");
      return false;
    }
    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long.");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const validateConfirmPassword = () => {
    if (!confirmPassword) {
      setConfirmPasswordError("Confirm password is required.");
      return false;
    }
    if (confirmPassword !== password) {
      setConfirmPasswordError("Passwords do not match.");
      return false;
    }
    setConfirmPasswordError("");
    return true;
  };
  const value = useMemo(
    () => ({
      email,
      setEmail,
      emailError,
      setEmailError,
      validateEmail,
      name,
      setName,
      nameError,
      setNameError,
      validateName,
      password,
      setPassword,
      passwordError,
      setPasswordError,
      validatePassword,
      confirmPassword,
      setConfirmPassword,
      confirmPasswordError,
      setConfirmPasswordError,
      validateConfirmPassword,
    }),
    [
      email,
      setEmail,
      emailError,
      setEmailError,
      validateEmail,
      name,
      setName,
      nameError,
      setNameError,
      validateName,
      password,
      setPassword,
      passwordError,
      setPasswordError,
      validatePassword,
      confirmPassword,
      setConfirmPassword,
      confirmPasswordError,
      setConfirmPasswordError,
      validateConfirmPassword,
    ],
  );

  return (
    <FormValidationContext.Provider value={value}>
      {children}
    </FormValidationContext.Provider>
  );
};

ValidationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ValidationProvider;
