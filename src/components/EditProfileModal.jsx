import { useContext, useEffect, useState } from "react";
import "../blocks/EditProfileModal.css";
// import CurrentUserContext from "../contexts/CurrentUserContext";

function EditProfileModal({ isOpen, onClose, onUpdateProfile, currentUser }) {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name || "");
      setAvatar(currentUser.avatar || "");
    }
  }, [currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentUser) {
      const updatedData = {
        name,
        avatar,
      };
      onUpdateProfile(updatedData);
      onClose();
    } else {
      console.error("No user data found.");
    }
  };

  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div className="modal__content">
        <button
          onClick={onClose}
          type="button"
          className="modal__close"
        ></button>
        <h2 className="modal__header">Change profile data</h2>
        <form className="modal__form" onSubmit={handleSubmit}>
          <label className="modal__label">
            Name *
            <input
              type="text"
              className="modal__input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label className="modal__label">
            Avatar *
            <input
              type="url"
              className="modal__input"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
              required
            />
          </label>
          <button type="submit" className="modal__save-btn">
            Save changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditProfileModal;
