import Logo from "../assets/logo.svg";
import "../blocks/header.css";
import Avatar from "../assets/avatar.png";

function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  return (
    <header className="header">
      <img className="header__logo" src={Logo} alt="WTWR Logo" />
      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <div className="button"></div>
      <button
        onClick={handleAddClick}
        type="button"
        className="header__add-clothes-btn"
      >
        + Add Clothes
      </button>
      <div className="header__user-container">
        <p className="header__username">James Petersen</p>
        <img src={Avatar} alt="James Petersen" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;
