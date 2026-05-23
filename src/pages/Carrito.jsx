import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Carrito = () => {
  const navigate = useNavigate();
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    getSubtotal, 
    getDiscount, 
    getShipping, 
    getTotal 
  } = useCart();

  const formatPrice = (price) => {
    return price.toLocaleString('es-CO');
  };

  if (cartItems.length === 0) {
    return (
      <main>
        <section className="empty-cart">
          <div className="empty-cart-content">
            <span className="empty-cart-icon">🛒</span>
            <h1 className="empty-cart-title">Tu carrito está vacío</h1>
            <p className="empty-cart-text">
              Agrega productos a tu carrito para continuar con tu compra
            </p>
            <button className="cta-button" onClick={() => navigate('/catalogo')}>
              Ir al Catálogo
            </button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="cart-page">
        <div className="cart-header">
          <h1 className="page-title">🛒 Mi Carrito</h1>
          <p className="cart-count">{cartItems.length} producto{cartItems.length !== 1 && 's'}</p>
        </div>

        <div className="cart-container">
          {/* Lista de productos */}
          <div className="cart-items-list">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <div className="cart-item-image">
                  <span className="cart-item-emoji">{item.emoji}</span>
                  {item.discount && (
                    <div className="cart-item-discount">-{item.discount}%</div>
                  )}
                </div>

                <div className="cart-item-info">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-price-unit">${item.price}/kg</p>
                </div>

                <div className="cart-item-quantity">
                  <button 
                    className="quantity-btn"
                    onClick={() => updateQuantity(item.name, item.quantity - 1)}
                  >
                    −
                  </button>
                  <span className="quantity-value">{item.quantity}</span>
                  <button 
                    className="quantity-btn"
                    onClick={() => updateQuantity(item.name, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>

                <div className="cart-item-total">
                  <p className="cart-item-total-price">
                    ${formatPrice(parseFloat(item.price.replace('.', '')) * item.quantity)}
                  </p>
                </div>

                <button 
                  className="cart-item-remove"
                  onClick={() => removeFromCart(item.name)}
                  title="Eliminar producto"
                >
                  🗑️
                </button>
              </div>
            ))}
          </div>

          {/* Resumen del pedido */}
          <div className="cart-summary">
            <h2 className="summary-title">Resumen del Pedido</h2>

            <div className="summary-row">
              <span>Subtotal:</span>
              <span>${formatPrice(getSubtotal())}</span>
            </div>

            <div className="summary-row">
              <span>Envío:</span>
              <span className={getShipping() === 0 ? 'free-shipping' : ''}>
                {getShipping() === 0 ? 'GRATIS' : `$${formatPrice(getShipping())}`}
              </span>
            </div>

            {getDiscount() > 0 && (
              <div className="summary-row discount-row">
                <span>Descuento:</span>
                <span>-${formatPrice(getDiscount())}</span>
              </div>
            )}

            <div className="summary-divider"></div>

            <div className="summary-total">
              <span>Total:</span>
              <span className="total-amount">${formatPrice(getTotal())}</span>
            </div>

            {getShipping() > 0 && (
              <p className="shipping-info">
                💡 Agrega ${formatPrice(50000 - getSubtotal())} más para envío gratis
              </p>
            )}

            <button 
              className="checkout-button"
              onClick={() => navigate('/checkout')}
            >
              Proceder al Pago 🔒
            </button>

            <button 
              className="continue-shopping-button"
              onClick={() => navigate('/catalogo')}
            >
              Continuar Comprando
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Carrito;
