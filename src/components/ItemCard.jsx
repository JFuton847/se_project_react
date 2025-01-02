import "../blocks/itemcard.css";
import "../blocks/card.css";

function ItemCard({
  item,
  onCardClick,
  onCardLike = () => console.warn("onCardLike is not defined"),
}) {
  const handleCardClick = () => {
    onCardClick(item);
  };

  const handleLike = () => {
    onCardLike({
      id: item._id,
      isLiked: item.isLiked,
    });
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
      <button
        className={`card__like-button ${
          item.isLiked ? "card__like-button_active" : ""
        }`}
        onClick={handleLike}
      >
        {item.isLiked ? "Unlike" : "like"}
      </button>
    </li>
  );
}

export default ItemCard;
