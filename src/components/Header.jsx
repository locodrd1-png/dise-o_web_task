import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { cartItemsCount } = useCart();
  
  return (
    <header className="header">
      <div className="logo">
        <span className="logo-icon">🍓</span>
        <span className="logo-text">FrutiFresh</span>
      </div>
      
      <nav className="nav-menu">
        <Link to="/">Inicio</Link>
        <Link to="/catalogo">Catálogo</Link>
        <Link to="/ofertas">Ofertas</Link>
        <Link to="/nosotros">Nosotros</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>
      
      <Link to="/carrito" className="cart-button">
        🛒 ({cartItemsCount})
      </Link>
    </header>
  );
};

export default Header;
