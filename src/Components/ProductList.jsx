import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext'; 

const ProductList = ({ products }) => {
  const { addToCart } = useContext(CartContext); 

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;