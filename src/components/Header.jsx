import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import "../blocks/header.css";
import ToggleSwitch from "../components/ToggleSwitch";
import Avatar from "../assets/avatar.png";

function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
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
          <button
            onClick={handleAddClick}
            type="button"
            className="header__add-clothes-btn"
          >
            + Add Clothes
          </button>
          <Link to="/profile" className="header__link">
            <p className="header__username">James Petersen</p>
            <img src={Avatar} alt="James Petersen" className="header__avatar" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
