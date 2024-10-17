import React, { useContext } from "react";

import Button from "../button/button.component";

import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  console.log("🚀 ~ CartDropdown ~ cartItems:", cartItems);

  const navigate = useNavigate();

  const handleNavigateToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Button onClick={handleNavigateToCheckout}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
