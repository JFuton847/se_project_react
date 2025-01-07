import { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext.jsx";
import "../blocks/itemcard.css";
import "../blocks/card.css";

function ItemCard({
  item,
  onCardClick,
  onCardLike = () => console.warn("onCardLike is not defined"),
  isLoggedIn,
}) {
  const currentUser = useContext(CurrentUserContext);
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
      isLiked,
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
        <button
          className={itemLikeButtonClassName}
          onClick={handleLike}
        ></button>
      )}
    </li>
  );
}

export default ItemCard;
