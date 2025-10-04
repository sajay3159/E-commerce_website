import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import CartProvider from "./components/store/CartProvider";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import ContactUs from "./components/ContactUs/ContactUs";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartOpen = () => {
    setIsCartOpen(true);
  };

  const handleClose = () => {
    setIsCartOpen(false);
  };
  return (
    <BrowserRouter>
      <CartProvider>
        <Header onCartClick={handleCartOpen} />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
        {<Cart onShow={isCartOpen} onClose={handleClose} />}
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
