import { useState } from "react";
import "./sidebar.style.scss";
import arrow from "../../assets/right-arrow.svg";
import mglass from "../../assets/lupa.svg";

function Sidebar() {
  const [sidebar, setSidebar] = useState("");
  function openSidebar() {
    if (sidebar === "") {
      setSidebar("-closed");
    } else {
      setSidebar("");
    }
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
          <input className="input" type="text" placeholder="Search" />
          <button className="button is-danger">
            <img src={mglass} alt="Search"/>
          </button>
        </div>
        <h3 className="sidebar-subtitle">Sort by</h3>
        <div className="sidebar-block">
          <div className="select">
            <select>
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
          <input placeholder="From" type="number" className="input" />
          <span
            className="center"
            style={{ paddingLeft: 10, paddingRight: 10, fontSize: 32 }}
          >
            &#x2010;
          </span>
          <input placeholder="To" type="number" className="input" />
        </div>
        <h3 className="sidebar-subtitle">Type</h3>
        <div
          className="sidebar-block"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <label className="checkbox">
            <input type="checkbox" />
            <span>Equipment</span>
          </label>
          <label className="checkbox">
            <input type="checkbox" />
            <span>Supplements</span>
          </label>
          <label className="checkbox">
            <input type="checkbox" />
            <span>Weights</span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
