import { useState, useEffect } from "react";
import BasketItem from "./basketitem/BasketItem";
import Cookies from "js-cookie";
import { Item } from "../../models/item";

function Basket() {
  const [cart, setCart] = useState<Item[]>([]);
  const [selectedItems, setSelectedItems] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const cartData = Cookies.get("cart");
    if (cartData) {
      const parsedCart: Item[] = JSON.parse(cartData);
      setCart(parsedCart);
      setSelectedItems(
        parsedCart.reduce((acc: Record<string, boolean>, item: Item) => ({ ...acc, [item._id]: true }), {})
      );
    }
  }, []);

  const toggleSelect = (itemId: string) => {
    setSelectedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const getTotalPrice = () => {
    return cart
      .filter((item) => selectedItems[item._id])
      .reduce((total, item) => total + item.price, 0);
  };

  return (
    <>
      <div
        className="container is-fluid"
        style={{
          minHeight: "62.175vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ width: "75%", marginLeft: "12.5%", marginRight: "12.5%" }}>
          <div style={{ display: "flex" }}>
            <div style={{ width: "65%" }}>
              <h1 className="has-text-white is-size-2">Your Basket</h1>
              {cart.length > 0 ? (
                cart.map((item, index) => (
                  <div key={index} style={{ display: "flex", alignItems: "center" }}>
                    <input
                      type="checkbox"
                      checked={selectedItems[item._id] || false}
                      onChange={() => toggleSelect(item._id)}
                      style={{ marginRight: "10px" }}
                    />
                    <BasketItem item={item} />
                  </div>
                ))
              ) : (
                <p className="has-text-white">Your basket is empty.</p>
              )}
            </div>
            <div className="container" style={{ width: "35%", backgroundColor: "#2a2a2a", padding: "20px" }}>
              <h2 className="has-text-white">Checkout</h2>
              <p className="has-text-white">Total: {getTotalPrice()} KZT</p>
              <button
                className="button is-success"
                style={{ marginTop: "10px" }}
                onClick={() => alert("Mock checkout completed!")}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Basket;
