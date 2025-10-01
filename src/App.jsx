import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import CartProvider from "./components/store/CartProvider";
import Footer from "./components/Footer/Footer";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartOpen = () => {
    setIsCartOpen(true);
  };

  const handleClose = () => {
    setIsCartOpen(false);
  };
  return (
    <CartProvider>
      <Header onCartClick={handleCartOpen} />
      <Products />
      {<Cart onShow={isCartOpen} onClose={handleClose} />}
      <Footer />
    </CartProvider>
  );
}

export default App;
