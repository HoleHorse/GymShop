import { useState } from "react";
import "./sidebar.style.scss";
import arrow from "../../assets/right-arrow.svg";

function Sidebar() {
  const [sidebar, setSidebar] = useState("");
  function openSidebar() {
    if (sidebar === "") {
      setSidebar("-open");
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
        <input type="text" placeholder="Search" />
        <button className="button">Search</button>
        <ul>
          <li>List items</li>
          <li>List items</li>
          <li>List items</li>
          <li>List items</li>
          <li>List items</li>
          <li>List items</li>
          <li>List items</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
