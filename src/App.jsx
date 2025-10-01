import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartOpen = () => {
    setIsCartOpen(true);
  };

  const handleClose = () => {
    setIsCartOpen(false);
  };
  return (
    <>
      <Header onCartClick={handleCartOpen} />
      <Products />
      {<Cart onShow={isCartOpen} onClose={handleClose} />}
    </>
  );
}

export default App;
