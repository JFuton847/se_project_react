import { defaultClothingItems } from "../utils/constants.js";
import ItemCard from "../components/ItemCard";
import "../blocks/ClothesSection.css";

function ClothesSection() {
  return (
    <div className="clothes-section">
      <div className="clothes-section__top">
        <p className="clothes-section__header">Your items</p>
        <button className="clothes-section__btn">+ Add New</button>
      </div>
      <ul className="cards__list">
        {defaultClothingItems.map((item) => {
          return (
            <ItemCard
              key={item._id}
              item={item}
              // To Do - pass as prop
              // onCardClick={handleCardClick}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ClothesSection;
