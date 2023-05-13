import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";
import { Item } from "../../models/models";
import { RootState } from "../../store";
import { useEffect } from "react";
import Header from "../../components/header/Header";
import NavbarLink from "../../components/header/navbar-link/NavbarLink";
import logout from "../../assets/logout.svg";
import Footer from "../../components/footer/Footer";

function Product() {
  const item: Item = useAppSelector((state: RootState) => state.item.item);
  const navigate = useNavigate();

  useEffect(() => {
    if (item.id === -1) {
      navigate(-1);
    }
  }, [item.id, navigate]);

  return (
    <>
      <Header>
        <NavbarLink text="Logout" href="/logout" img={logout} />
      </Header>
      <div className="container is-fluid" style={{borderBottom: "none"}}>
        <div>{item.id}</div>
      </div>
      <Footer />
    </>
  );
}

export default Product;
