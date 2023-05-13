import { ItemProp } from "../../../models/models";
import { useNavigate } from "react-router-dom";
import "./itemcard.style.scss";

function ItemCard({ item }: ItemProp) {
  const navigate = useNavigate();
  return (
    <div
      className="column is-2-widescreen is-3-desktop is-4-tablet is-6-mobile"
      style={{ padding: 0 }}
      onClick={() => {
        navigate("/product", { state: { item: item } });
      }}
    >
      <div className="card item-card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img alt="Product" src={item.imgs[0]} />
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
