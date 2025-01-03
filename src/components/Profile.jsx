import SideBar from "../components/SideBar";
import ClothesSection from "../components/ClothesSection";
import EditProfileModal from "./EditProfileModal";
import "../blocks/Profile.css";
import { useState } from "react";

function Profile({
  onCardClick,
  clothingItems,
  handleAddClick,
  onUpdateProfile,
  handleLogout,
}) {
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);

  const handleEditProfileClick = () => {
    setIsEditProfileOpen(true);
  };

  const closeEditProfileModal = () => {
    setIsEditProfileOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const profileData = {
      name: e.traget.name.value,
      avatar: e.target.avatar.value,
    };
    handleProfileUpdate(profileData);
  };

  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar handleLogout={handleLogout} />
      </section>
      <section className="profile__clothing-items">
        <ClothesSection
          onCardClick={onCardClick}
          clothingItems={clothingItems}
          handleAddClick={handleAddClick}
        />
      </section>
    </div>
  );
}

export default Profile;
