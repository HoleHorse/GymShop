import ItemCard from "../../../components/cards/ItemCard";

function PopularProducts() {
  const data = [
    {
      id: 1,
      title: "Title",
      img: "https://www.hammer-fitness.ch/ch-en/media/catalog/product/6/7/6720_kurzhantel-hauptbild-1200.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=",
      price: 3990,
      details: {},
    },
    {
      id: 2,
      title: "Title",
      img: "https://cdn.shopify.com/s/files/1/1182/3402/products/434386a.jpg?v=1656898941",
      price: 3990,
      details: {},
    },
    {
      id: 3,
      title: "Title",
      img: "https://www.hammer-fitness.ch/ch-en/media/catalog/product/6/7/6720_kurzhantel-hauptbild-1200.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=",
      price: 3990,
      details: {},
    },
    {
      id: 4,
      title: "Title",
      img: "https://cdn.shopify.com/s/files/1/1182/3402/products/434386a.jpg?v=1656898941",
      price: 3990,
      details: {},
    },
    {
      id: 5,
      title: "Title",
      img: "https://www.hammer-fitness.ch/ch-en/media/catalog/product/6/7/6720_kurzhantel-hauptbild-1200.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=",
      price: 3990,
      details: {},
    },
    {
      id: 6,
      title: "Title",
      img: "https://cdn.shopify.com/s/files/1/1182/3402/products/434386a.jpg?v=1656898941",
      price: 3990,
      details: {},
    },
    {
      id: 7,
      title: "Title",
      img: "https://www.hammer-fitness.ch/ch-en/media/catalog/product/6/7/6720_kurzhantel-hauptbild-1200.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=",
      price: 3990,
      details: {},
    },
    {
      id: 8,
      title: "Title",
      img: "https://cdn.shopify.com/s/files/1/1182/3402/products/434386a.jpg?v=1656898941",
      price: 3990,
      details: {},
    },
    {
      id: 9,
      title: "Title",
      img: "https://www.hammer-fitness.ch/ch-en/media/catalog/product/6/7/6720_kurzhantel-hauptbild-1200.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=",
      price: 3990,
      details: {},
    },
    {
      id: 10,
      title: "Title",
      img: "https://cdn.shopify.com/s/files/1/1182/3402/products/434386a.jpg?v=1656898941",
      price: 3990,
      details: {},
    },
  ];
  return (
    <div className="popular-products">
      <h1>Popular Products</h1>
      <div className="container is-fluid" style={{ padding: 0, borderBottom: "none" }}>
        <div className="columns" style={{marginLeft: 12}}>
          {data.map((item) => {
            return <ItemCard item={item} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default PopularProducts;
