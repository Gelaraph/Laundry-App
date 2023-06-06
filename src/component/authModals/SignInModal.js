import React, { useContext } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { RiLock2Line } from "react-icons/ri";
import { ImGoogle } from "react-icons/im";
import "./modal.css";
import Input from "../Input";
import Button from "../Button";
import { FormValidationContext } from "../../hooks/FormValidationsContext";

const SignInModal = () => {
  const {
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
  } = useContext(FormValidationContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isEmailValid && isPasswordValid) {
      setEmailError("");
      setPasswordError("");
      setEmail("");
      setPassword("");
    }
  };
  return (
    <form className="signin-form" onSubmit={handleSubmit}>
      <p className="sigin-subtitle">Enjoy discounts & track your delivery</p>
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

      <Button className="auth-btn">Sign In</Button>

      <div className="or-container">
        <hr className="line" />
        <span className="or-text">or</span>
        <hr className="line" />
      </div>

      <Button className="auth-btn google-btn">
        <ImGoogle />
        Continue with Google
      </Button>
    </form>
  );
};

export default SignInModal;
