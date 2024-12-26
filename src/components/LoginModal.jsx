import React, { useState, useRef } from "react";
import ModalWithForm from "./ModalWithForm";

const LoginModal = ({ onClose, onLogin, isOpen }) => {
  const [loginValues, setLoginValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(loginValues);
    console.log("Submitting login with:", loginValues);
  };

  return (
    <ModalWithForm
      title="Login"
      buttonText="Login"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label htmlFor="email" className="modal__label">
        Email
        <input
          type="email"
          className="modal__input"
          id="email"
          name="email"
          placeholder="Email"
          value={loginValues.email}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="password" className="modal__label">
        Password
        <input
          type="password"
          className="modal__input"
          id="password"
          name="password"
          placeholder="Password"
          value={loginValues.password}
          onChange={handleChange}
          required
        />
      </label>
    </ModalWithForm>
  );
};

export default LoginModal;
