import { useState } from "react";
import "./sidebar.style.scss";
import arrow from "../../assets/right-arrow.svg";
import mglass from "../../assets/lupa.svg"

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
          <button className="button is-danger"><img src={mglass}/></button>
        </div>
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
