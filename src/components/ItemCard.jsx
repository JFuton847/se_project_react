import "../blocks/itemcard.css";
import "../blocks/card.css";

function ItemCard({ item, onCardClick }) {
  const handleCardClick = () => {
    onCardClick(item);
  };
  return (
    <li className="card">
      <h2 className="card__name">{item.name}</h2>
      <img
        onClick={handleCardClick}
        alt={`Image of ${item.name}`}
        className="card__image"
        src={item.imageUrl}
      />
    </li>
  );
}

export default ItemCard;
