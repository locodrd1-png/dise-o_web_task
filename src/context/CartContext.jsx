import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe ser usado dentro de CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [orderNumber, setOrderNumber] = useState(null);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.name === product.name);
      
      if (existingItem) {
        return prevItems.map(item =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productName) => {
    setCartItems(prevItems => prevItems.filter(item => item.name !== productName));
  };

  const updateQuantity = (productName, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productName);
      return;
    }
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.name === productName
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getSubtotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace('.', ''));
      return total + (price * item.quantity);
    }, 0);
  };

  const getDiscount = () => {
    return cartItems.reduce((total, item) => {
      if (item.discount) {
        const price = parseFloat(item.price.replace('.', ''));
        const discountAmount = (price * item.discount / 100) * item.quantity;
        return total + discountAmount;
      }
      return total;
    }, 0);
  };

  const getShipping = () => {
    const subtotal = getSubtotal();
    return subtotal > 50000 ? 0 : 5000;
  };

  const getTotal = () => {
    return getSubtotal() - getDiscount() + getShipping();
  };

  const processOrder = (shippingInfo, paymentInfo) => {
    const timestamp = Date.now();
    const randomNum = Math.floor(Math.random() * 10000);
    const orderNum = `FF-${timestamp}-${randomNum}`;
    
    setOrderNumber(orderNum);
    
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          orderNumber: orderNum,
          items: cartItems,
          shippingInfo,
          paymentInfo,
          totals: {
            subtotal: getSubtotal(),
            discount: getDiscount(),
            shipping: getShipping(),
            total: getTotal()
          }
        });
      }, 1500);
    });
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getSubtotal,
    getDiscount,
    getShipping,
    getTotal,
    processOrder,
    orderNumber,
    cartItemsCount: cartItems.reduce((total, item) => total + item.quantity, 0)
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
