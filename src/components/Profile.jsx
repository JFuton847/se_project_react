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
  openUpdateProfileModal,
  closeActiveModal,
  activeModal,
}) {
  const currentUser = useContext(CurrentUserContext);
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);

  const handleEditProfileClick = () => {
    openUpdateProfileModal();
  };

  const closeEditProfileModal = () => {
    closeActiveModal();
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
      {activeModal === "editProfile" && (
        <EditProfileModal
          isOpen={activeModal === "editProfile"}
          onClose={closeEditProfileModal}
          onUpdateProfile={onUpdateProfile}
          currentUser={currentUser}
        />
      )}
    </div>
  );
}

export default Profile;
