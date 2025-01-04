import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import "../blocks/header.css";
import ToggleSwitch from "../components/ToggleSwitch";
// import Avatar from "../assets/avatar.png";
import { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext.jsx";

function Header({ handleAddClick, weatherData, isLoggedIn, setActiveModal }) {
  const currentUser = useContext(CurrentUserContext);

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const getInitials = (name) => {
    return name ? name.charAt(0).toUpperCase() : "";
  };

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/">
          <img className="header__logo" src={Logo} alt="WTWR Logo" />
        </Link>
        <p className="header__date-and-location">
          {currentDate}, {weatherData.city}
        </p>

        <div className="header__user-container">
          <ToggleSwitch />
          {isLoggedIn && ( // Conditionally render the Add Clothes button
            <button
              onClick={handleAddClick}
              type="button"
              className="header__add-clothes-btn"
            >
              + Add Clothes
            </button>
          )}

          {isLoggedIn ? (
            currentUser && (
              <Link to="/profile" className="header__link">
                <p className="header__username">
                  {currentUser?.name || "Anonymous"}
                </p>
                {currentUser.avatar ? (
                  <img
                    src={currentUser.avatar}
                    alt={currentUser.name}
                    className="header__avatar"
                  />
                ) : (
                  <div className="header__avatar-placeholder">
                    {getInitials(currentUser.name)}
                  </div>
                )}
              </Link>
            )
          ) : (
            <div className="header__auth-buttons">
              <button
                className="header__button"
                onClick={() => setActiveModal("register")}
              >
                Sign Up
              </button>
              <button
                className="header__button"
                onClick={() => setActiveModal("login")}
              >
                Log In
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
