import { useEffect, useReducer, useState } from "react";
import CartContext from "./cart-context";

const defaultState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEMS") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.quantity;

    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingItem = state.items[existingItemIndex];
    let updatedItems;

    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + action.item.quantity,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "SET_ITEMS") {
    return {
      items: action.items,
      totalAmount: action.totalAmount,
    };
  }

  return defaultState;
};

const CartProvider = (props) => {
  const initialState = localStorage.getItem("token");
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultState);
  const [token, setToken] = useState(initialState || null);
  // const [token, setToken] = useState(
  //   () => localStorage.getItem("token") || null
  // );

  const isLoggedIn = !!token;

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD_ITEMS", item: item });
  };

  const loginHandler = (token, email) => {
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("email");
  };

  const setItemsHandler = (items) => {
    const totalAmount = items.reduce((sum, item) => {
      return sum + item.price * item.quantity;
    }, 0);

    dispatchCartAction({
      type: "SET_ITEMS",
      items,
      totalAmount,
    });
  };

  //   const removeItemToCartHandler = (id) => {
  //     dispatchCartAction({ type: "REMOVE_ITEMS", id: id });
  //   };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    setItems: setItemsHandler,
    // removeItem: removeItemToCartHandler,
    token: token,
    isLoggedIn: isLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
