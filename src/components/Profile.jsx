import SideBar from "../components/SideBar";
import ClothesSection from "../components/ClothesSection";
import "../blocks/Profile.css";

function Profile() {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar />
      </section>
      <section className="profile__clothing-items">
        <ClothesSection />
      </section>
    </div>
  );
}

export default Profile;
