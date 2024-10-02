import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './App.css'; 

const CartWidget = () => {
  const cartItemCount = 14; 

  return (
    <div className="cartIcon">
      <FaShoppingCart size={24} />
      {cartItemCount > 0 && (
        <span className="cartCount">{cartItemCount}</span>
      )}
    </div>
  );
};

export default CartWidget;