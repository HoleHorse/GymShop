import { ItemProp } from "../../../models/item";
import "./basketitem.style.scss"

function BasketItem({ item }: ItemProp) {
  return (
    <div className="card">
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-128x128">
              <img src={item.imgs[0]} alt="Img" />
            </figure>
          </div>
          <div className="media-content">
            <p className="title p-fluid">{item.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasketItem;
