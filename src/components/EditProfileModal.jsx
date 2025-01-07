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

    // Ensure onUpdateProfile is correctly called and returns a promise
    onUpdateProfile(updatedData)
      .then((result) => {
        console.log("Profile updated successfully:", result);
        onClose(); // Close modal after successful update
      })
      .catch((error) => {
        console.error("Failed to update profile:", error);
        alert("Failed to update profile. Please try again.");
      })
      .finally(() => {
        setIsSubmitting(false); // Stop loading indicator
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
