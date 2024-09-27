import "../blocks/itemcard.css";

function ItemCard({ item }) {
  return (
    <li className="card">
      <h2 className="card__name">{item.name}</h2>
      <img className="card__image" src={item.link} />
    </li>
  );
}

export default ItemCard;
