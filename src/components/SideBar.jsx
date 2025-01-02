import { useState } from "react";
import Avatar from "../assets/avatar.png";
import "../blocks/SideBar.css";
import EditProfileModal from "./EditProfileModal";

function SideBar() {
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);

  const openEditProfileModal = () => {
    setIsEditProfileModalOpen(true);
  };

  const closeEditProfileModal = () => {
    setIsEditProfileModalOpen(false);
  };

  const handleUpdateProfile = (updatedData) => {
    console.log("Updated profile:", updatedData);
    closeEditProfileModal();
  };

  return (
    <div className="sidebar">
      <div className="sidebar__top-section">
        <img className="sidebar__avatar" src={Avatar} alt="Default avatar" />
        <p className="sidebar__username">James Petersen</p>
      </div>
      <button className="sidebar__edit-btn" onClick={openEditProfileModal}>
        Change profile data
      </button>
      <EditProfileModal
        isOpen={isEditProfileModalOpen}
        onClose={closeEditProfileModal}
        onUpdateProfile={handleUpdateProfile}
      />
    </div>
  );
}

export default SideBar;
