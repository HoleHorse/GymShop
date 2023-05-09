import { ItemProp } from "../../models/Item";

function ItemCard({ item }: ItemProp) {
  return (
    <div
      className="column is-2-desktop is-4-tablet is-6-mobile"
      style={{ paddingLeft: 0 }}
    >
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img alt="Product" src={item.img} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="card-text">{item.title}</p>
              <p className="card-text">{item.price} KZT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
