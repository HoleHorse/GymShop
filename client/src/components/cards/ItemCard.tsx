import { ItemProp } from "../../models/models";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux";
import { setItem } from "../../slices/itemSlice";
import "./itemcard.style.scss";

function ItemCard({ item }: ItemProp) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  return (
    <div
      className="column is-2-widescreen is-3-desktop is-4-tablet is-6-mobile item-card"
      onClick={() => {
        dispatch(setItem(item));
        navigate("/product");
      }}
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
