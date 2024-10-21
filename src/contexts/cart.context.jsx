import { createContext, useState, useEffect, useReducer } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  // find the cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  // check if quantity is equal to 1, if it is remove that item from the cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  // return back cartitems with matching cart item with reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

export const CART_ACTION_TYPES = {
  SET_CART_OPEN: "SET_CART_OPEN",
  ADD_CART: "ADD_CART",
  REMOVE_ITEM_CART: "REMOVE_ITEM_CART",
  CLEAR_CART: "CLEAR_CART",
  SET_CART_COUNT: "SET_CART_COUNT",
  SET_CART_TOTAL: "SET_CART_TOTAL",
};

export const cartReducer = (state, action) => {
  console.log("🚀 ~ cartReducer ~ state:", state);
  console.log("🚀 ~ cartReducer ~ action:", action);
  const { type, payload } = action;
  const { cartItems } = state;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_OPEN:
      return { ...state, isCartOpen: payload };

    case CART_ACTION_TYPES.ADD_CART:
      return { ...state, cartItems: addCartItem(cartItems, payload) };

    case CART_ACTION_TYPES.REMOVE_ITEM_CART:
      return { ...state, cartItems: removeCartItem(cartItems, payload) };

    case CART_ACTION_TYPES.CLEAR_CART:
      return { ...state, cartItems: clearCartItem(cartItems, payload) };

    case CART_ACTION_TYPES.SET_CART_COUNT:
      return { ...state, cartCount: payload };
    case CART_ACTION_TYPES.SET_CART_TOTAL:
      return { ...state, cartTotal: payload };

    default:
      throw new Error("Unhandled type " + type + " in cartReducer");
  }
};

export const initialStateCart = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

export const CartProvider = ({ children }) => {
  // const [isCartOpen, setIsCartOpen] = useState(false);
  // const [cartItems, setCartItems] = useState([]);
  // const [cartCount, setCartCount] = useState(0);
  // const [cartTotal, setCartTotal] = useState(0);

  const [{ cartItems, cartCount, cartTotal, isCartOpen }, dispatch] =
    useReducer(cartReducer, initialStateCart);
  console.log("🚀 ~ CartProvider ~ cartItems:", cartItems);

  useEffect(() => {
    console.log("🚀 ~ useEffect ~ cartItems2:", cartItems);
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    dispatch({ type: CART_ACTION_TYPES.SET_CART_COUNT, payload: newCartCount });
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    dispatch({ type: CART_ACTION_TYPES.SET_CART_TOTAL, payload: newCartTotal });
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    dispatch({ type: CART_ACTION_TYPES.ADD_CART, payload: productToAdd });
  };

  const removeItemToCart = (cartItemToRemove) => {
    dispatch({
      type: CART_ACTION_TYPES.REMOVE_ITEM_CART,
      payload: cartItemToRemove,
    });
  };

  const clearItemFromCart = (cartItemToClear) => {
    dispatch({ type: CART_ACTION_TYPES.CLEAR_CART, payload: cartItemToClear });
  };

  const setIsCartOpen = (isOpen) => {
    dispatch({ type: CART_ACTION_TYPES.SET_CART_OPEN, payload: isOpen });
  };

  const value = {
    isCartOpen,
    cartItems,
    cartCount,
    cartTotal,
    setIsCartOpen,
    addItemToCart,
    removeItemToCart,
    clearItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
