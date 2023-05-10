import { useState, useEffect } from "react";
import Spinner from "../../components/spinner/Spinner";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import RedBtn from "../../components/buttons/RedBtn";
import ItemsHorizontal from "./lists/ItemsHorizontal";
import "./shop.style.scss";
import useFetch from "../../hooks/useFetch";
import { Item } from "../../models/models";
import ItemsGrid from "./lists/ItemsGrid";
import Sidebar from "../../components/sidebar/Sidebar";

function Shop() {
  const data: Item[] = useFetch("");
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
  if (window.location.pathname === "/shop/all") {
    return (
      <>
        <Header>
          <RedBtn text="Logout" href="/logout" />
        </Header>
        <div
          className="container is-fluid"
          style={{ display: "flex", padding: 0 }}
        >
          <div style={{display: "flex", width: 100 + "%"}}>
            <Sidebar />
            <ItemsGrid data={data} />
          </div>
        </div>
        <Footer />
      </>
    );
  }
  return (
    <>
      <Header>
        <RedBtn text="Logout" href="/logout" />
      </Header>
      <ItemsHorizontal data={data} title="Popular products" />
      <ItemsHorizontal data={data} title="New products" />
      <Footer />
    </>
  );
}

export default Shop;
