import React, { useContext } from "react";
import WeatherCard from "./WeatherCard";
// import { defaultClothingItems } from "../utils/constants.js";
import ItemCard from "./ItemCard";
import "../blocks/cards.css";
import "../vendor/normalize.css";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext.js";

function Main({ weatherData, handleCardClick, clothingItems, onDeleteItem }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  return (
    <main>
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">
          Today is {weatherData.temp[currentTemperatureUnit]} &deg; / You may
          want to wear:
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
                />
              );
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
