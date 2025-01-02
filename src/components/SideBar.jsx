import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "../assets/avatar.png";
import "../blocks/SideBar.css";
import EditProfileModal from "./EditProfileModal";

function SideBar({ isLoggedIn, handleLogout }) {
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();

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

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
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
      <button className="sidebar__logout-btn" onClick={handleLogout}>
        Log out
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
