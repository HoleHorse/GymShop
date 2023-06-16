import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Shop from "./pages/shop/Shop";
import Product from "./pages/product/Product";
import Basket from "./pages/basket/Basket";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/shop/*" element={<Shop />} />
          <Route path="/product" element={<Product />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
