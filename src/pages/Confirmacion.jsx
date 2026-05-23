import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Confirmacion = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { clearCart } = useCart();
  
  const orderData = location.state?.orderData;

  useEffect(() => {
    if (!orderData) {
      navigate('/');
      return;
    }
    
    // Limpiar carrito después de confirmar
    clearCart();
  }, [orderData, navigate, clearCart]);

  if (!orderData) {
    return null;
  }

  const formatPrice = (price) => {
    return price.toLocaleString('es-CO');
  };

  const { orderNumber, items, shippingInfo, totals } = orderData;

  return (
    <main>
      <section className="confirmation-page">
        <div className="confirmation-container">
          {/* Icono de éxito */}
          <div className="success-icon">
            <div className="success-circle">
              <span className="checkmark">✓</span>
            </div>
          </div>

          {/* Título */}
          <h1 className="confirmation-title">¡Compra Exitosa!</h1>
          <p className="confirmation-subtitle">
            Tu pedido ha sido confirmado y está en proceso
          </p>

          {/* Número de pedido */}
          <div className="order-number-box">
            <p className="order-number-label">Número de Pedido</p>
            <p className="order-number">#{orderNumber}</p>
          </div>

          {/* Detalles del pedido */}
          <div className="order-details">
            <h2 className="details-title">Detalles de tu Pedido</h2>

            <div className="order-items">
              {items.map((item, index) => (
                <div key={index} className="order-item">
                  <span className="order-item-emoji">{item.emoji}</span>
                  <div className="order-item-info">
                    <p className="order-item-name">{item.name}</p>
                    <p className="order-item-quantity">x{item.quantity}</p>
                  </div>
                  <p className="order-item-price">
                    ${formatPrice(parseFloat(item.price.replace('.', '')) * item.quantity)}
                  </p>
                </div>
              ))}
            </div>

            {/* Totales */}
            <div className="order-totals">
              <div className="total-row">
                <span>Subtotal:</span>
                <span>${formatPrice(totals.subtotal)}</span>
              </div>
              
              <div className="total-row">
                <span>Envío:</span>
                <span className={totals.shipping === 0 ? 'free-shipping' : ''}>
                  {totals.shipping === 0 ? 'GRATIS' : `$${formatPrice(totals.shipping)}`}
                </span>
              </div>

              {totals.discount > 0 && (
                <div className="total-row discount-row">
                  <span>Descuento:</span>
                  <span>-${formatPrice(totals.discount)}</span>
                </div>
              )}

              <div className="total-divider"></div>

              <div className="total-row total-final">
                <span>Total Pagado:</span>
                <span className="final-amount">${formatPrice(totals.total)}</span>
              </div>
            </div>

            {/* Información de entrega */}
            <div className="delivery-info">
              <h3 className="delivery-title">📦 Información de Entrega</h3>
              <div className="delivery-details">
                <p><strong>Dirección:</strong> {shippingInfo.direccion}, {shippingInfo.ciudad}</p>
                <p><strong>Tiempo estimado:</strong> 24 horas</p>
                <p><strong>Método de pago:</strong> {
                  shippingInfo.paymentMethod === 'tarjeta' 
                    ? 'Tarjeta de Crédito' 
                    : shippingInfo.paymentMethod === 'pse' 
                    ? 'PSE' 
                    : 'Efectivo contra entrega'
                }</p>
              </div>
            </div>
          </div>

          {/* Botones de acción */}
          <div className="confirmation-actions">
            <button 
              className="primary-action-button"
              onClick={() => navigate('/')}
            >
              🏠 Volver al Inicio
            </button>
            
            <button 
              className="secondary-action-button"
              onClick={() => alert('Función de "Mis Pedidos" en desarrollo')}
            >
              📋 Ver Mis Pedidos
            </button>
          </div>

          {/* Mensaje adicional */}
          <div className="confirmation-message">
            <p>📧 Hemos enviado un correo de confirmación a <strong>{shippingInfo.email}</strong></p>
            <p className="thank-you-message">¡Gracias por tu compra en FrutiFresh! 🍓</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Confirmacion;
