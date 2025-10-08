import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  token: "",
  isLoggedIn: false,
  login: (token, email) => {},
  logout: () => {},
});

export default CartContext;
