import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./cartReducer";

const CartContext = createContext();

// getting data from localStorage
const getCartItemFromLS = () => {
  let localCartItem = localStorage.getItem("cartItem");
  if (localCartItem) {
    return JSON.parse(localStorage.getItem("cartItem"));
  }
  return [];
};
const initialState = {
  cart: getCartItemFromLS(),
  totalAmount: "",
  totalItem:"",
  shippingFee: 6,
};
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (quantity, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { quantity, product } });
  };

  const delItem = (uniqueId) => {
    dispatch({ type: "DEL_ITEM", payload: uniqueId });
  };
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };


  // adding data to localStorage
  useEffect(() => {
    dispatch({type:"TOTAL_CART_ITEM"})
    localStorage.setItem("cartItem", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        delItem,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};

// export {CartProvider,CartContext,useCartContext}
