import React, { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../contexts/CartContext';
import '../App.css'; 

const CartWidget = () => {
  const { cart } = useContext(CartContext); 

  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0); 

  return (
    <div className="cartIcon">
      <FaShoppingCart size={24} />
      {totalQuantity > 0 && (
        <span className="cartCount">{totalQuantity}</span>
      )}
    </div>
  );
};

export default CartWidget;