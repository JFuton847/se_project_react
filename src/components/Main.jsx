import WeatherCard from "./WeatherCard";
import { defaultClothingItems } from "../utils/constants.js";
import ItemCard from "./ItemCard";
import "../blocks/cards.css";
import "../vendor/normalize.css";

function Main({ weatherData }) {
  return (
    <main>
      <WeatherCard />
      <section className="cards">
        <p className="cards__text">
          Today is 75&deg; F / You may want to wear:
        </p>
        <ul className="cards__list">
          {defaultClothingItems
            // .filter((item) => {
            //   return item.weather === weatherData.type;
            // })
            .map((item) => {
              return <ItemCard key={item._id} item={item} />;
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
