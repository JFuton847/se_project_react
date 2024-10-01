import "../blocks/itemcard.css";

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
        src={item.link}
      />
    </li>
  );
}

export default ItemCard;
