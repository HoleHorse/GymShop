import logo from "../../assets/GYMSHOP.png";
import { ReactNode, useState, useEffect } from "react";
import "./header.style.scss";

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
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="/" style={{paddingLeft: 12}}>
          <img src={logo} width={115} alt="GYMSHOP" />
        </a>

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
          <a href="/" className="navbar-item">
            Home
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
              <a className="navbar-item" href="/shop">
                See all
              </a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">{children}</div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
