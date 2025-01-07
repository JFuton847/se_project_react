import React, { useContext } from "react";
import WeatherCard from "./WeatherCard";
// import { defaultClothingItems } from "../utils/constants.js";
import ItemCard from "./ItemCard";
import "../blocks/cards.css";
import "../vendor/normalize.css";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext.js";
import CurrentUserContext from "../contexts/CurrentUserContext.jsx";

function Main({
  weatherData,
  handleCardClick,
  clothingItems,
  onDeleteItem,
  onCardLike,
  isLoggedIn,
}) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const { currentUser } = useContext(CurrentUserContext) || {};
  return (
    <main>
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">
          Today is {weatherData.temp[currentTemperatureUnit]} &deg;
          {currentTemperatureUnit} / You may want to wear:
        </p>
        <ul className="cards__list">
          {clothingItems
            .filter((item) => {
              return item.weather === weatherData.type;
            })
            .map((item) => {
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  onCardClick={handleCardClick}
                  onDeleteItem={onDeleteItem}
                  onCardLike={onCardLike}
                  currentUser={currentUser}
                  isLoggedIn={isLoggedIn}
                />
              );
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
