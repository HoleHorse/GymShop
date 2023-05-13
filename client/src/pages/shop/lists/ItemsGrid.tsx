import ItemCard from "../../../components/cards/ItemCard";
import { Item } from "../../../models/models";

type Props = {
  data: Item[];
};

function ItemsGrid({ data }: Props) {
  return (
    <div className="section-products" style={{ width: 100 + "%" }}>
      <div className="container is-fluid">
        <div className="columns is-multiline" style={{ marginTop: 0 }}>
          {data.map((item) => {
            return <ItemCard item={item} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default ItemsGrid;
