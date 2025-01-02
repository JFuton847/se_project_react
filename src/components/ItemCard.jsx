import "../blocks/itemcard.css";
import "../blocks/card.css";

function ItemCard({
  item,
  onCardClick,
  onCardLike = () => console.warn("onCardLike is not defined"),
  currentUser,
  isLoggedIn,
}) {
  const isLiked = item.likes.some((id) => id === currentUser?._id);

  const itemLikeButtonClassName = `card__like-button ${
    isLiked ? "card__like-button_active" : ""
  }`;

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
      {isLoggedIn && (
        <button className={card__like - button} onClick={handleLike}>
          {isLiked ? "Unlike" : "Like:"}
        </button>
      )}
    </li>
  );
}

export default ItemCard;
