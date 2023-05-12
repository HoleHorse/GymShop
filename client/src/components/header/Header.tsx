import { ReactNode, useState, useEffect } from "react";
import "./header.style.scss";
import basket from "../../assets/basket.svg";
import order from "../../assets/order.svg";
import help from "../../assets/help.svg";
import NavbarLink from "./navbar-link/NavbarLink";

interface Props {
  children?: ReactNode;
}

function Header({ children }: Props) {
  const [isActive, setIsActive] = useState("");
  function handleWindowResize() {
    if (window.innerWidth >= 1024) {
      setIsActive("");
    }
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function onBurgerClick() {
    if (isActive === "is-active") {
      setIsActive("");
    } else {
      setIsActive("is-active");
    }
  }

  return (
    <nav
      className="navbar is-black"
      role="navigation"
      aria-label="main navigation"
      style={{ backgroundColor: "black" }}
    >
      <div className="navbar-brand">
        <span className="navbar-item" style={{ paddingLeft: 12 }}>
          <p id="logo">GYMSHOP</p>
        </span>

        <button
          onClick={onBurgerClick}
          className="navbar-burger"
          aria-label="menu"
          aria-expanded={false}
        >
          <span aria-hidden={true}></span>
          <span aria-hidden={true}></span>
          <span aria-hidden={true}></span>
        </button>
      </div>
      <div className={`navbar-menu${isActive}`}>
        <div className="navbar-start">
          <a id="red" href="/" className="navbar-item">
            Home
          </a>
          <a id="red" href="#faq" className="navbar-item">
            FAQ
          </a>
          <a id="red" href="/shop" className="navbar-item">
            Shop
          </a>
          <div className="navbar-item has-dropdown is-hoverable">
            <p className="navbar-link">Cotologue</p>
            <div className="navbar-dropdown">
              <a className="navbar-item" href="/shop/weights">
                Weights
              </a>
              <a className="navbar-item" href="/shop/equipment">
                Equipment
              </a>
              <a className="navbar-item" href="/shop/supplements">
                Supplements
              </a>
              <a className="navbar-item" href="/shop/all">
                See all
              </a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item has-dropdown is-hoverable">
            <p className="navbar-link" style={{ paddingRight: 20 }}>
              <button className="navbar-burger" aria-expanded={false}>
                <span aria-hidden={true}></span>
                <span aria-hidden={true}></span>
                <span aria-hidden={true}></span>
              </button>
            </p>
            <div className="navbar-dropdown is-right">
              <NavbarLink text="Basket" href="/basket" img={basket} />
              <NavbarLink text="Orders" href="/orders" img={order} />
              <NavbarLink text="Help" href="/help" img={help} />
              {children}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
