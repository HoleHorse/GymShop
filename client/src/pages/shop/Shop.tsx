import { useState } from "react";
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
  const [filteredData, setFilteredData] = useState<Item[]>(data);

  const isAuth = useAuth();
  if (!isAuth) {
    return <Navigate to={"/login"} />;
  }
  if (loading) {
    return (
      <div style={{ backgroundColor: "#0f0f0f" }}>
        <div style={{ paddingBottom: "52.5vh" }}>
          <Spinner />
        </div>
        <div style={{ padding: "5vh" }}></div>
      </div>
    );
  }
  if (error) {
    return (
      <div style={{ backgroundColor: "#0f0f0f" }}>
        <div style={{ paddingBottom: "50vh" }}>
          <h1 className="has-text-grey is-size-1 is-size-3-mobile center mt-6">
            {error}
          </h1>
        </div>
        <div style={{ padding: "5vh" }}></div>
      </div>
    );
  }

  function handleFilterChange(filters: any) {
    let filtered = data;

    // Apply search filter
    if (filters.searchQuery) {
      filtered = filtered.filter((item) =>
        item.title.toLowerCase().includes(filters.searchQuery.toLowerCase())
      );
    }

    // Apply price filter
    if (filters.priceFrom) {
      filtered = filtered.filter((item) => item.price >= Number(filters.priceFrom));
    }
    if (filters.priceTo) {
      filtered = filtered.filter((item) => item.price <= Number(filters.priceTo));
    }

    // Apply category filter
    if (filters.selectedTypes.length > 0) {
      filtered = filtered.filter((item) => filters.selectedTypes.includes(item.name));
    }

    // Apply sorting
    switch (filters.sortOption) {
      case "New items":
        filtered = [...filtered].sort((a, b) => b.sold - a.sold);
        break;
      case "Most expensive":
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case "Least expensive":
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case "Highest rating":
        filtered = [...filtered].sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    setFilteredData(filtered);
  }

  return (
    <>
      {window.location.pathname === "/shop/all" ? (
        <div className="container is-fluid" style={{ display: "flex", padding: 0, borderBottom: "none" }}>
          <div style={{ display: "flex", width: "100%" }}>
            <Sidebar onFilterChange={handleFilterChange} />
            <div style={{ display: "flex", width: "100%", flexDirection: "column" }}>
              <Pagination />
              <ItemsGrid data={filteredData} />
            </div>
          </div>
        </div>
      ) : (
        <>
          <ItemsHorizontal data={filteredData} title="Popular products" />
          <ItemsHorizontal data={filteredData} title="New products" />
        </>
      )}
    </>
  );
}

export default Shop;
