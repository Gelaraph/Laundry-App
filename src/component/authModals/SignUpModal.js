import React, { useContext } from "react";
import { BsPerson } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { RiLock2Line } from "react-icons/ri";
import { ImGoogle } from "react-icons/im";
import "./modal.css";
import Input from "../Input";
import Button from "../Button";
import { FormValidationContext } from "../../hooks/FormValidationsContext";

const SignUpModal = () => {
  const {
    name,
    setName,
    nameError,
    setNameError,
    validateName,
    email,
    setEmail,
    emailError,
    validateEmail,
    password,
    setPassword,
    passwordError,
    validatePassword,
    setEmailError,
    setPasswordError,
    confirmPassword,
    setConfirmPassword,
    confirmPasswordError,
    setConfirmPasswordError,
    validateConfirmPassword,
  } = useContext(FormValidationContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();

    if (
      isNameValid &&
      isEmailValid &&
      isPasswordValid &&
      isConfirmPasswordValid
    ) {
      setNameError("");
      setEmailError("");
      setPasswordError("");
      setConfirmPasswordError("");
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }
  };
  return (
    <form className="signin-form" onSubmit={handleSubmit}>
      <p className="sigin-subtitle">Enjoy discounts & track your delivery</p>
      <div>
        <Input
          required
          icon={BsPerson}
          spellCheck="false"
          type="text"
          placeholder="Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="validation-error-div">
          {nameError && <span className="validation-error">{nameError}</span>}
        </div>
      </div>

      <div>
        <Input
          required
          icon={HiOutlineMail}
          spellCheck="false"
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="validation-error-div">
          {emailError && <span className="validation-error">{emailError}</span>}
        </div>
      </div>

      <div>
        <Input
          required
          icon={RiLock2Line}
          spellCheck="false"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="validation-error-div">
          {passwordError && (
            <span className="validation-error">{passwordError}</span>
          )}
        </div>
      </div>

      <div>
        <Input
          required
          icon={RiLock2Line}
          spellCheck="false"
          type="password"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <div className="validation-error-div">
          {confirmPasswordError && (
            <span className="validation-error">{confirmPasswordError}</span>
          )}
        </div>
      </div>
      <Button className="auth-btn">Create account</Button>
      <div className="or-container">
        <hr className="line" />
        <span className="or-text">or</span>
        <hr className="line" />
      </div>
      <Button className="auth-btn google-btn">
        <ImGoogle />
        Continue with Google
      </Button>

      <div className="sigin-agreement">
        <p>
          By creating an account, you agree to our <span>Terms of Service</span>{" "}
          and
          <span> Privacy Policy</span>
        </p>
      </div>
    </form>
  );
};

export default SignUpModal;
