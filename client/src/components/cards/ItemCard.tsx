import { Item } from "../../models/Item";

function ItemCard({ item }: Item) {
  return (
    <div
      className="column is-2-desktop is-3-tablet is-6-mobile"
      style={{ paddingLeft: 0 }}
    >
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img alt="Product" src={item.img} />
          </figure>
        </div>
        <div className="card-content is-overlay">
          <h3 className="m-0 has-text-white">{item.title}</h3>
          <h3 className="m-0 has-text-white">{item.price}</h3>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
