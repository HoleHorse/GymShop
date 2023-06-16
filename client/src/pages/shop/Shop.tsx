import Spinner from "../../components/UI/spinner/Spinner";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ItemsHorizontal from "./lists/ItemsHorizontal";
import "./shop.style.scss";
import useFetchItems from "../../hooks/useFetchItems";
import ItemsGrid from "./lists/ItemsGrid";
import Sidebar from "../../components/sidebar/Sidebar";
import Pagination from "../../components/pagination/Pagination";
import NavbarLink from "../../components/header/navbar-link/NavbarLink";
import { useAppSelector } from "../../hooks/redux";
import { RootState } from "../../store/store";
import { Item } from "../../models/item";
import logout from "../../assets/logout.svg";
import useAuth from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";

function Shop() {
  const { error, loading } = useFetchItems();
  const data: Item[] = useAppSelector((state: RootState) => state.items.items);

  const isAuth = useAuth();
  if(!isAuth) {
    return <Navigate to={"/login"} />
  }
  if (loading) {
    return (
      <div style={{ backgroundColor: "#0f0f0f" }}>
        <Header />
        <div style={{ paddingBottom: 52.5 + "vh" }}>
          <Spinner />
        </div>
        <div style={{ padding: "5vh" }}></div>
        <Footer />
      </div>
    );
  }
  if (error) {
    return (
      <div style={{ backgroundColor: "#0f0f0f" }}>
        <Header />
        <div style={{ paddingBottom: 50 + "vh" }}>
          <h1 className="has-text-grey is-size-1 is-size-3-mobile center mt-6">
            {error}
          </h1>
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
