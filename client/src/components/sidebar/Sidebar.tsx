import { useState } from "react";
import "./sidebar.style.scss";
import arrow from "../../assets/right-arrow.svg";
import mglass from "../../assets/lupa.svg";

function Sidebar({ onFilterChange}: any) {
  const [sidebar, setSidebar] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("Popular");
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  function openSidebar() {
    setSidebar(sidebar === "" ? "-closed" : "");
  }

  function handleTypeChange(type: string) {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  }

  function applyFilters() {
    onFilterChange({
      searchQuery,
      sortOption,
      priceFrom,
      priceTo,
      selectedTypes,
    });
  }

  return (
    <div className={`sidebar${sidebar}`}>
      <img
        className="toggle-btn"
        src={arrow}
        alt="arrow"
        onClick={openSidebar}
      />
      <div className="content">
        <div className="search">
          <input
            className="input"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="button is-danger" onClick={applyFilters}>
            <img src={mglass} alt="Search" />
          </button>
        </div>
        <h3 className="sidebar-subtitle">Sort by</h3>
        <div className="sidebar-block">
          <div className="select">
            <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
              <option>Popular</option>
              <option>New items</option>
              <option>Most expensive</option>
              <option>Least expensive</option>
              <option>Highest rating</option>
            </select>
          </div>
        </div>
        <h3 className="sidebar-subtitle">Price</h3>
        <div className="sidebar-block">
          <input
            placeholder="From"
            type="number"
            className="input"
            value={priceFrom}
            onChange={(e) => setPriceFrom(e.target.value)}
          />
          <span className="center" style={{ padding: "0 10px", fontSize: 32 }}>
            &#x2010;
          </span>
          <input
            placeholder="To"
            type="number"
            className="input"
            value={priceTo}
            onChange={(e) => setPriceTo(e.target.value)}
          />
        </div>
        <h3 className="sidebar-subtitle">Type</h3>
        <div className="sidebar-block" style={{ display: "flex", flexDirection: "column" }}>
          {["Equipment", "Supplements", "Weights"].map((type) => (
            <label key={type} className="checkbox">
              <input
                type="checkbox"
                checked={selectedTypes.includes(type)}
                onChange={() => handleTypeChange(type)}
              />
              <span>{type}</span>
            </label>
          ))}
        </div>
        <button className="button is-primary mt-3" onClick={applyFilters}>
          Apply Filters
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
