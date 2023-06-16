import Spinner from "../../components/UI/spinner/Spinner";
import ItemsHorizontal from "./lists/ItemsHorizontal";
import "./shop.style.scss";
import useFetchItems from "../../hooks/useFetchItems";
import ItemsGrid from "./lists/ItemsGrid";
import Sidebar from "../../components/sidebar/Sidebar";
import Pagination from "../../components/pagination/Pagination";
import { useAppSelector } from "../../hooks/redux";
import { RootState } from "../../store/store";
import { Item } from "../../models/item";
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
        <div style={{ paddingBottom: 52.5 + "vh" }}>
          <Spinner />
        </div>
        <div style={{ padding: "5vh" }}></div>
      </div>
    );
  }
  if (error) {
    return (
      <div style={{ backgroundColor: "#0f0f0f" }}>
        <div style={{ paddingBottom: 50 + "vh" }}>
          <h1 className="has-text-grey is-size-1 is-size-3-mobile center mt-6">
            {error}
          </h1>
        </div>
        <div style={{ padding: "5vh" }}></div>
      </div>
    );
  }
  return (
    <>
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
    </>
  );
}

export default Shop;
