import { useEffect, useState } from "react";
import "../blocks/EditProfileModal.css";
import ModalWithForm from "./ModalWithForm";

function EditProfileModal({ isOpen, onClose, onUpdateProfile, currentUser }) {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name || "");
      setAvatar(currentUser.avatar || "");
    }
  }, [currentUser]);

  console.log(isOpen);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const updatedData = { name, avatar };

    console.log("Submitting updatedData:", updatedData);

    onUpdateProfile(updatedData).finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <ModalWithForm
      title="Edit Profile"
      isOpen={isOpen}
      onSubmit={handleSubmit}
      onClose={onClose}
    >
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
        Avatar (URL) *
        <input
          type="url"
          className="modal__input"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
          required
        />
      </label>
      <button type="submit" className="modal__save-btn" disabled={isSubmitting}>
        {isSubmitting ? "Updating..." : "Save changes"}
      </button>
    </ModalWithForm>
  );
}

export default EditProfileModal;
