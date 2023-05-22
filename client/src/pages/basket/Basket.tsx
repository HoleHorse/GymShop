import Header from "../../components/header/Header";
import NavbarLink from "../../components/header/navbar-link/NavbarLink";
import Footer from "../../components/footer/Footer";
import logout from "../../assets/logout.svg";

function Basket() {
  return (
    <>
      <Header>
        <NavbarLink text="Log In" href="/logout" img={logout} />
      </Header>
      <div
        className="container is-fluid"
        style={{
          minHeight: "62.175vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="container"
          style={{
            width: 75 + "%",
            marginLeft: 12.5 + "%",
            marginRight: 12.5 + "%",
          }}
        >
          <div style={{display: "flex"}}>
            <div
              className="container"
              style={{ width: 65 + "%"}}
            >
              <h1 className="has-text-white is-size-2">Your Basket</h1>
            </div>
            <div
              className="container"
              style={{ width: 35 + "%", backgroundColor: "#2a2a2a" }}
            >
              Text
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Basket;
