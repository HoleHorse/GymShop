import { useState, useEffect } from "react";
import Spinner from "../../components/spinner/Spinner";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import RedBtn from "../../components/buttons/RedBtn";
import PopularProducts from "./popularitems/PopularItems";
import "./shop.style.scss"

function Shop() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  if (loading) {
    return (
      <div style={{ backgroundColor: "#0f0f0f" }}>
        <Header />
        <div style={{ paddingBottom: 60 + "vh" }}>
          <Spinner />
        </div>
        <Footer />
      </div>
    );
  }
  return (
    <>
      <Header>
        <RedBtn text="Logout" href="/logout" />
      </Header>
      <PopularProducts />
      <Footer />
    </>
  );
}

export default Shop;
