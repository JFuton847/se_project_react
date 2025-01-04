// import Avatar from "../assets/avatar.png";
import "../blocks/SideBar.css";
import EditProfileModal from "./EditProfileModal";
import { useState, useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext.jsx";

function SideBar({ handleLogout, onEditProfile }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="sidebar">
      <div className="sidebar__top-section">
        <img
          className="sidebar__avatar"
          src={currentUser?.avatar}
          alt="User Avatar"
        />
        <p className="sidebar__username">{currentUser?.name || "Anonymous"}</p>
      </div>
      <button className="sidebar__edit-btn" onClick={onEditProfile}>
        Change profile data
      </button>
      <button className="sidebar__logout-btn" onClick={handleLogout}>
        Log out
      </button>
    </div>
  );
}

export default SideBar;
