import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">E-Commerce Astronomico</div>
      <div className="navButtons">
        <Link to="/" className="button">Productos</Link>
        <Link to="/telescopios" className="button">Telescopios</Link>
        <Link to="/objetos" className="button">Objetos Astronómicos</Link>
        <Link to="/ingenieria" className="button">Ingeniería Espacial</Link>
      </div>
      <Link to="/cart" className="cart-icon">
        <CartWidget />
      </Link>
    </nav>
  );
};

export default NavBar;