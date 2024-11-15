import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext'; 
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, removeFromCart } = useContext(CartContext); 

    const handleRemove = (itemId) => {
        removeFromCart(itemId);
    };

    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0); 

    return (
        <div className="cart-container">
            <h2>Tu Carrito</h2>
            {cart.length === 0 ? (
                <p>El carrito está vacío.</p>
            ) : (
                <div>
                    <ul>
                        {cart.map(item => (
                            <li key={item.id} className="cart-item">
                                <h3>{item.title}</h3>
                                <p>Precio: ${item.price}</p>
                                <p>Cantidad: {item.quantity}</p>
                                <button className="remove-button" onClick={() => handleRemove(item.id)}>Eliminar</button>
                            </li>
                        ))}
                    </ul>
                    <h3 className="total-price">Total: ${totalPrice}</h3>
                    {/* Botón para proceder al pago */}
                    <Link to="/checkout" className="pay-button">Pagar</Link>
                </div>
            )}
        </div>
    );
};

export default Cart;