import { lazy, Suspense, useContext, useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import CartProvider from "./components/store/CartProvider";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import CartContext from "./components/store/cart-context";
import ProtectedRoute from "./components/ProductedRoute/ProtectedRoute";

const About = lazy(() => import("./components/About/About"));
const Home = lazy(() => import("./components/Home/Home"));
const ContactUs = lazy(() => import("./components/ContactUs/ContactUs"));
const ProductDetail = lazy(() =>
  import("./components/Products/ProductDetails")
);
const Products = lazy(() => import("./components/Products/Products"));
const LoginForm = lazy(() => import("./components/Login/LoginForm"));

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const authCtx = useContext(CartContext);
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
        <Suspense fallback={<div className="text-center my-5">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route
              path="/products"
              element={
                <ProtectedRoute>
                  <Products />
                </ProtectedRoute>
              }
            />
            <Route
              path="/products/:productId"
              element={
                <ProtectedRoute>
                  <ProductDetail />
                </ProtectedRoute>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/contactus" element={<ContactUs />} />
            {!authCtx.isLoggedIn && (
              <Route path="/login" element={<LoginForm />} />
            )}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
        {isCartOpen && <Cart onShow={isCartOpen} onClose={handleClose} />}
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
