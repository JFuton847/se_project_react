import "../blocks/itemcard.css";

function ItemCard({ item }) {
  return (
    <div>
      <h2>{item.name}</h2>
      <img className="item-card" src={item.link} />
    </div>
  );
}

export default ItemCard;
