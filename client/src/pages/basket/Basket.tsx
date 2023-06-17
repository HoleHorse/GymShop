import BasketItem from "./basketitem/BasketItem";

function Basket() {
  return (
    <>
      <div
        className="container is-fluid"
        style={{
          minHeight: "62.175vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: 75 + "%",
            marginLeft: 12.5 + "%",
            marginRight: 12.5 + "%",
          }}
        >
          <div style={{ display: "flex" }}>
            <div style={{ width: 65 + "%" }}>
              <h1 className="has-text-white is-size-2">Your Basket</h1>
              <BasketItem item={item} />
            </div>
            <div
              className="container"
              style={{ width: 35 + "%", backgroundColor: "#2a2a2a" }}
            >
              Checkout
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const item = {
  _id: "6470ab8cd2e559da8a9f6e20",
  name: "Full, possibly very very long name that will be descriptive to help customers understand what they are looking at",
  title: "Short Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor quis ante eu placerat. In interdum maximus tellus, sit amet tristique arcu iaculis eget. In nisl nisi, cursus at erat et, condimentum viverra sem. Phasellus non tincidunt leo. Suspendisse a aliquam velit, non maximus nunc. Proin placerat ex at est dapibus, at dictum ante sollicitudin. Donec aliquam scelerisque urna et ultrices. Aliquam nunc dolor, fringilla et vulputate sed, dapibus sed enim. Vivamus et velit ut lectus sollicitudin molestie in vel mauris. Proin euismod urna quis quam euismod, sit amet varius turpis consectetur. Phasellus hendrerit convallis augue, at hendrerit dui convallis vel. Vestibulum varius ullamcorper est consectetur volutpat. Nulla maximus mauris ac sollicitudin gravida. Nam aliquam suscipit diam ut tempor. In et ipsum fermentum, egestas urna eu, faucibus turpis. Nullam venenatis nisl sed pharetra malesuada.",
  imgs: [
    "https://www.hammer-fitness.ch/ch-en/media/catalog/product/6/7/6720_kurzhantel-hauptbild-1200.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=",
  ],
  price: 3990,
  sold: 12,
  availability: "In Stock",
  rating: 5,
  reviews: 12,
  comments: [],
  details: [],
};

export default Basket;
