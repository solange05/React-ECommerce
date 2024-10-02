import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">Mi Páginita</Link>
      <div className="navButtons">
        <Link to="/category/electronica" className="button">Electrónica</Link>
        <Link to="/category/indumentaria" className="button">Indumentaria</Link>
        <Link to="/category/repuestos" className="button">Repuestos</Link>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;