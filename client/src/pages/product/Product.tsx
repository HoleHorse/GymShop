import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import NavbarLink from "../../components/header/navbar-link/NavbarLink";
import logout from "../../assets/logout.svg";
import Footer from "../../components/footer/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./product.style.scss";
import StarRating from "../../components/star-rating/StarRating";

function Product() {
  const navigate = useNavigate();
  const [width, setWidth] = useState("");
  const [ml, setMl] = useState("");
  var { state } = useLocation();

  if (state === null) {
    state = empty;
  }

  const { item } = state;

  useEffect(() => {
    if (item.id === -1) {
      navigate(-1);
    }
  }, [item]);

  function handleWindowResize() {
    if (window.innerWidth < 500) {
      setWidth("100%");
      setMl("0%");
    } else if (window.innerWidth < 769) {
      setWidth("42%");
      setMl("42%");
    } else {
      setWidth("33%");
      setMl("33%");
    }
  }

  useEffect(() => {
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      <Header>
        <NavbarLink text="Logout" href="/logout" img={logout} />
      </Header>
      <div
        className="container is-fluid"
        style={{ padding: 0, borderBottom: "none" }}
      >
        <div className="product-container">
          <Carousel
            width={width}
            showArrows={true}
            swipeable={true}
            showThumbs={false}
            showStatus={false}
          >
            <div>
              <img className="product-img" alt="img" src={item.imgs[0]} />
            </div>
            <div>
              <img className="product-img" alt="img" src={item.imgs[0]} />
            </div>
            <div>
              <img className="product-img" alt="img" src={item.imgs[0]} />
            </div>
            <div>
              <img className="product-img" alt="img" src={item.imgs[0]} />
            </div>
          </Carousel>
          <div className="item-info" style={{ marginLeft: ml }}>
            <StarRating rating={5} />
            <h1>{item.title}</h1>
            <h1>{item.price} KZT</h1>
          </div>
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
    imgs: [],
    price: 0,
    rating: 5,
    comments: [],
    details: [],
  },
};
