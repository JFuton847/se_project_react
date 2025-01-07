import React from "react";
import "../blocks/ModalWithForm.css";

const ModalWithForm = React.forwardRef(
  ({ title, isOpen, onClose, children, onSubmit }, ref) => {
    return (
      <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
        <div className="modal__content">
          <button
            onClick={onClose}
            type="button"
            className="modal__close"
          ></button>
          <h2 className="modal__header">{title}</h2>
          <form className="modal__form" onSubmit={onSubmit} ref={ref}>
            {children}
          </form>
        </div>
      </div>
    );
  }
);

export default ModalWithForm;
