import "../blocks/ModalWithForm.css";

function ModalWithForm({ title, isOpen, onClose, children }) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content">
        <button
          onClick={onClose}
          type="button"
          className="modal__close"
        ></button>
        <h2 className="modal__header">{title}</h2>
        {children}
      </div>
    </div>
  );
}

export default ModalWithForm;
