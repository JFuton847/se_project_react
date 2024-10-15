import SideBar from "../components/SideBar";
import ClothesSection from "../components/ClothesSection";
import "../blocks/Profile.css";

function Profile({ onCardClick, clothingItems }) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar />
      </section>
      <section className="profile__clothing-items">
        <ClothesSection
          onCardClick={onCardClick}
          clothingItems={clothingItems}
        />
      </section>
    </div>
  );
}

export default Profile;
