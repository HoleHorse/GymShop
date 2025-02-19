import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./product.style.scss";
import StarRating from "../../components/UI/star-rating/StarRating";
import RedBtn from "../../components/UI/buttons/RedBtn";
import Review from "./review/Review";
import Cookies from "js-cookie";

function Product() {
  const navigate = useNavigate();
  const [width, setWidth] = useState("");
  var { state } = useLocation();

  if (state === null) {
    state = empty;
  }

  const { item } = state;

  useEffect(() => {
    if (item.id === -1) {
      navigate(-1);
    }
  }, [item, navigate]);

  function handleWindowResize() {
    if (window.innerWidth < 500) {
      setWidth("100%");
    } else if (window.innerWidth < 769) {
      setWidth("42%");
    } else {
      setWidth("33%");
    }
  }

  useEffect(() => {
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  // Handle dots for slideshow
  const clickDot = (i: number) => {
    return Array.from({ length: item.imgs.length }, (_, index) =>
      index === i ? 1 : 0
    );
  };

  // Handle arrows for slideshow navigation
  const clickArrow = (dir: 1 | -1) => {
    let c = current.indexOf(1);
    if (dir === 1 && c === current.length - 1) {
      return;
    } else if (dir === -1 && c === 0) {
      return;
    }
    setCurrent(clickDot(current.indexOf(1) + dir));
  };

  // Cart Management
  const addToCart = (navigateToBasket: boolean) => {
    let cart = Cookies.get("cart");
    let cartItems = cart ? JSON.parse(cart) : [];

    // Check if item is already in cart
    const exists = cartItems.find((cartItem: any) => cartItem._id === item._id);
    if (!exists) {
      cartItems.push(item);
    }

    // Store updated cart
    Cookies.set("cart", JSON.stringify(cartItems), { expires: 7 });

    if (navigateToBasket) {
      navigate("/basket");
    }
  };

  const [active, setActive] = useState<number>(1);
  const [current, setCurrent] = useState<number[]>(clickDot(0));

  return (
    <>
      <div className="container is-fluid" style={{ padding: 0, borderBottom: "none" }}>
        <div className="product-container" style={{ paddingTop: "2vh" }}>
          <div className="slideshow-container" style={{ width: width }}>
            <span onClick={() => clickArrow(-1)} className="arrow-left-slideshow">
              &#10094;
            </span>
            <span onClick={() => clickArrow(1)} className="arrow-right-slideshow">
              &#10095;
            </span>
            <div className="dots-container">
              {item.imgs.map((_: string, i: number) => (
                <span
                  key={i}
                  onClick={() => setCurrent(clickDot(i))}
                  className={current[i] === 1 ? "dot current" : "dot"}
                ></span>
              ))}
            </div>
            <div className="image-container">
              <div className="image-wrapper" style={{ transform: `translateX(-${current.indexOf(1) * 100}%)` }}>
                {item.imgs.map((_: string, i: number) => (
                  <img key={i} className="square-image" alt="img" src={item.imgs[i]} />
                ))}
              </div>
            </div>
          </div>

          <div className="item-info">
            <div className="rating-block">
              <StarRating rating={item.rating} name="product-rating" mode="controlled" />
              <h3>({item.reviews} Reviews)</h3>
            </div>
            <h1>{item.name}</h1>
            <h1 style={{ marginTop: 10 }}>{item.price} KZT</h1>
            <h1 style={{ marginTop: 10 }}>Availability ({item.availability})</h1>
            <div className="buttons">
              <RedBtn text="Buy" onClick={() => addToCart(true)} />
              <RedBtn text="Add to Cart" onClick={() => addToCart(false)} />
            </div>
          </div>
        </div>

        <div className="product-container" style={{ display: "block" }}>
          <div className="tabs is-large" style={{ marginBottom: 0 }}>
            <ul>
              <li
                className={active === 1 ? "is-active" : ""}
                onClick={() => setActive(1)}
              >
                <a>Details</a>
              </li>
              <li
                className={active === 0 ? "is-active" : ""}
                onClick={() => setActive(0)}
              >
                <a>Description</a>
              </li>
              <li
                className={active === 2 ? "is-active" : ""}
                onClick={() => setActive(2)}
              >
                <a>Reviews</a>
              </li>
            </ul>
          </div>
          <p
            style={{ display: active === 0 ? "block" : "none" }}
            className="tab-text"
          >
            {item.description}
          </p>
          <ul
            style={{ display: active === 1 ? "block" : "none" }}
            className="tab-text"
          >
            {item.details.map((d: string, i: number) => {
              return <li key={i}>{d}</li>;
            })}
          </ul>
          <div style={{ display: active === 2 ? "block" : "none" }}>
            <Review review={review} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;

// Review Data
const review = {
  author: "Name of author",
  date: "20-05-2023",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor quis ante eu placerat. In interdum maximus tellus, sit amet tristique arcu iaculis eget. In nisl nisi, cursus at erat et, condimentum viverra sem. Phasellus non tincidunt leo. Suspendisse a aliquam velit, non maximus nunc. Proin placerat ex at est dapibus, at dictum ante sollicitudin. Donec aliquam scelerisque urna et ultrices.",
  rating: 4.7,
};

// Empty Product Object
const empty = {
  item: {
    id: -1,
    title: "",
    description: "",
    imgs: [],
    price: 0,
    availability: "",
    rating: 0,
    reviews: 0,
    comments: [],
    details: [],
  },
};
