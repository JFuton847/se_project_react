import { useContext, useState } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext.jsx";
import SideBar from "../components/SideBar";
import ClothesSection from "../components/ClothesSection";
import EditProfileModal from "./EditProfileModal";
import "../blocks/Profile.css";

function Profile({
  onCardClick,
  clothingItems,
  handleAddClick,
  handleLogout,
  onUpdateProfile,
  isLoggedIn,
  onCardLike,
}) {
  const currentUser = useContext(CurrentUserContext);
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);

  const handleEditProfileClick = () => {
    setIsEditProfileOpen(true);
  };

  const closeEditProfileModal = () => {
    setIsEditProfileOpen(false);
  };

  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar
          handleLogout={handleLogout}
          onEditProfile={handleEditProfileClick}
        />
      </section>
      <section className="profile__clothing-items">
        <ClothesSection
          onCardClick={onCardClick}
          clothingItems={clothingItems}
          handleAddClick={handleAddClick}
          isLoggedIn={isLoggedIn}
          onCardLike={onCardLike}
        />
      </section>
      {isEditProfileOpen && (
        <EditProfileModal
          isOpen={isEditProfileOpen}
          onClose={closeEditProfileModal}
          onUpdateProfile={onUpdateProfile}
          currentUser={currentUser}
        />
      )}
    </div>
  );
}

export default Profile;
