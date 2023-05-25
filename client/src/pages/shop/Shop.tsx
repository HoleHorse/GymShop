import { useState, useEffect } from "react";
import Spinner from "../../components/UI/spinner/Spinner";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ItemsHorizontal from "./lists/ItemsHorizontal";
import "./shop.style.scss";
import FetchItems from "../../hooks/FetchItems";
import ItemsGrid from "./lists/ItemsGrid";
import Sidebar from "../../components/sidebar/Sidebar";
import Pagination from "../../components/pagination/Pagination";
import NavbarLink from "../../components/header/navbar-link/NavbarLink";
import { useAppSelector } from "../../hooks/redux";
import { RootState } from "../../store/store";
import { Item } from "../../models/item";
import logout from "../../assets/logout.svg";

function Shop() {
  const [loading, setLoading] = useState(true);

  FetchItems();
  const data: Item[] = useAppSelector((state: RootState) => state.items.items);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 250);
  }, []);

  if (loading) {
    return (
      <div style={{ backgroundColor: "#0f0f0f" }}>
        <Header />
        <div style={{ paddingBottom: 60 + "vh" }}>
          <Spinner />
        </div>
        <div style={{ padding: "5vh" }}></div>
        <Footer />
      </div>
    );
  }
  return (
    <>
      <Header>
        <NavbarLink text="Logout" href="/logout" img={logout} />
      </Header>
      {window.location.pathname === "/shop/all" ? (
        <div
          className="container is-fluid"
          style={{ display: "flex", padding: 0, borderBottom: "none" }}
        >
          <div style={{ display: "flex", width: 100 + "%" }}>
            <Sidebar />
            <div
              style={{
                display: "flex",
                width: 100 + "%",
                flexDirection: "column",
              }}
            >
              <Pagination />
              <ItemsGrid data={data} />
            </div>
          </div>
        </div>
      ) : (
        <>
          <ItemsHorizontal data={data} title="Popular products" />
          <ItemsHorizontal data={data} title="New products" />
        </>
      )}
      <Footer />
    </>
  );
}

export default Shop;
