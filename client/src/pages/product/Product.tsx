import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import NavbarLink from "../../components/header/navbar-link/NavbarLink";
import logout from "../../assets/logout.svg";
import Footer from "../../components/footer/Footer";
import "./product.style.scss";
import StarRating from "../../components/star-rating/StarRating";
import RedBtn from "../../components/UI/buttons/RedBtn";

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

  const clickDot = (i: number) => {
    return Array.from({ length: item.imgs.length }, (_, index) =>
      index === i ? 1 : 0
    );
  };

  const clickArrow = (dir: 1 | -1) => {
    let c = current.indexOf(1);
    if (dir === 1 && c === current.length - 1) {
      return;
    } else if (dir === -1 && c === 0) {
      return;
    }
    setCurrent(clickDot(current.indexOf(1) + dir));
  };

  const [active, setActive] = useState<number>(0);
  const [current, setCurrent] = useState<number[]>(clickDot(0));

  return (
    <>
      <Header>
        <NavbarLink text="Logout" href="/logout" img={logout} />
      </Header>
      <div
        className="container is-fluid"
        style={{ padding: 0, borderBottom: "none" }}
      >
        <div className="product-container" style={{ paddingTop: "2vh" }}>
          <div className="slideshow-container" style={{ width: width }}>
            <span
              onClick={() => clickArrow(-1)}
              className="arrow-left-slideshow"
            >
              &#10094;
            </span>
            <span
              onClick={() => clickArrow(1)}
              className="arrow-right-slideshow"
            >
              &#10095;
            </span>
            <div className="dots-container">
              {item.imgs.map((_: string, i: number) => {
                return (
                  <span
                    onClick={() => {
                      setCurrent(clickDot(i));
                    }}
                    key={i}
                    className={current[i] === 1 ? "dot current" : "dot"}
                  ></span>
                );
              })}
            </div>
            <div className="image-container">
              <div
                className="image-wrapper"
                style={{
                  transform: `translateX(-${current.indexOf(1) * 100}%)`,
                }}
              >
                {item.imgs.map((_: string, i: number) => (
                  <img
                    key={i}
                    className="square-image"
                    alt="img"
                    src={item.imgs[i]}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="item-info">
            <div className="rating-block">
              <StarRating rating={5} />
              <h3>({item.reviews} Reviews)</h3>
            </div>
            <h1>{item.title}</h1>
            <h1>{item.price} KZT</h1>
            <h1>Availability ({item.availability})</h1>
            <div className="buttons">
              <RedBtn text="Buy" href="/buy" />
              <RedBtn text="Add to Cart" href="/add-to-cart" />
            </div>
          </div>
        </div>
        <div className="product-container" style={{ display: "block" }}>
          <div className="tabs is-large" style={{ marginBottom: 0 }}>
            <ul>
              <li
                className={active === 0 ? "is-active" : ""}
                onClick={() => {
                  setActive(0);
                }}
              >
                <a>Description</a>
              </li>
              <li
                className={active === 1 ? "is-active" : ""}
                onClick={() => {
                  setActive(1);
                }}
              >
                <a>Details</a>
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
            {item.details.map((d: string) => {
              return <li>{d}</li>;
            })}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Product;

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
