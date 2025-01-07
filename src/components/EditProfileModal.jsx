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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const updatedData = { name, avatar };

    console.log("Submitting updatedData:", updatedData);

    onUpdateProfile(updatedData)
      .then(() => {
        console.log("Profile update completed.");
      })
      .catch((error) => {
        console.error("Profile update failed:", error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <ModalWithForm
      title="Edit Profile"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
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
