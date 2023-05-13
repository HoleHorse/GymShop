import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";
import { Item } from "../../models/models";
import { RootState } from "../../store";
import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import NavbarLink from "../../components/header/navbar-link/NavbarLink";
import logout from "../../assets/logout.svg";
import Footer from "../../components/footer/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./product.style.scss";

function Product() {
  const item: Item = useAppSelector((state: RootState) => state.item.item);
  const navigate = useNavigate();
  const [width, setWidth] = useState("");

  useEffect(() => {
    if (item.id === -1) {
      navigate(-1);
    }
  }, [item.id, navigate]);

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
              <img className="product-img" src={item.imgs[0]} />
            </div>
            <div>
              <img className="product-img" src={item.imgs[0]} />
            </div>
            <div>
              <img className="product-img" src={item.imgs[0]} />
            </div>
            <div>
              <img className="product-img" src={item.imgs[0]} />
            </div>
          </Carousel>
          <h1></h1>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Product;
