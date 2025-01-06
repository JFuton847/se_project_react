import React, { useState, useRef } from "react";
import ModalWithForm from "./ModalWithForm";

const RegisterModal = ({ onClose, onRegister, isOpen, openLoginModal }) => {
  const [createUserValues, setCreateUserValues] = useState({
    name: "",
    email: "",
    password: "",
    avatarUrl: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setCreateUserValues((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    onRegister(createUserValues).finally(() => setIsSubmitting(false));
    console.log("Submitting form with:", createUserValues);
  };

  return (
    <ModalWithForm
      title="Register"
      buttonText={isSubmitting ? "Submitting Registration." : "Register"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name{" "}
        <input
          type="text"
          className="modal__input"
          id="name"
          placeholder="Name"
          name="name"
          value={createUserValues.name}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="email" className="modal__label">
        Email{" "}
        <input
          type="email"
          className="modal__input"
          id="login-email"
          placeholder="Email"
          name="email"
          value={createUserValues.email}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="password" className="modal__label">
        Password{" "}
        <input
          type="text"
          className="modal__input"
          id="login-password"
          name="password"
          placeholder="Password"
          value={createUserValues.password}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="avatarUrl" className="modal__label">
        Avatar URL{" "}
        <input
          type="text"
          className="modal__input"
          id="avatarUrl"
          placeholder="Avatar URL"
          name="avatarUrl"
          value={createUserValues.avatarUrl}
          onChange={handleChange}
          required
        />
      </label>
      <div>
        <button type="button" className="modal__signup">
          Sign up
        </button>
        <button
          type="button"
          className="modal__submit-other"
          onClick={openLoginModal}
        >
          or Log in
        </button>
      </div>
    </ModalWithForm>
  );
};

export default RegisterModal;
