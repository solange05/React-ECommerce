import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const Checkout = () => {
    const { cart } = useContext(CartContext);

    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0); // Calcular el precio total

    return (
        <div className="checkout-container">
            <h2>Checkout</h2>
            {cart.length > 0 ? (
                <div>
                    {cart.map(item => (
                        <div key={item.id} className="checkout-item">
                            <h3>{item.title}</h3>
                            <p>Precio: ${item.price}</p>
                            <p>Cantidad: {item.quantity}</p>
                        </div>
                    ))}
                    <h3 className="total-price">Total a Pagar: ${totalPrice}</h3>
                </div>
            ) : (
                <p className="empty-cart-message">Tu carrito está vacío.</p>
            )}
            {/* Pendiente: agregar más lógica para procesar el pago */}
        </div>
    );
};

export default Checkout;