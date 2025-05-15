import { useSelector, useDispatch } from "react-redux"
import type { RootState } from '../../store';
import { removeFromCart, clearCart } from "../../features/cartSlices";
import './cart.css';
import React from 'react';

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const totalItems = cartItems.reduce((sum, item) => sum + item.count, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.count, 0);

  const handleCheckout = () => {
    dispatch(clearCart());
    alert('Checkout successful! Your cart has been cleared.');
  };

  return (
    <div className="cart">
      <>
        <span className="gg-shopping-cart"></span>
      </>
      <h2></h2>
      {cartItems.length === 0 ? (
        <p></p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.title}</h3>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.count}</p>
                </div>
                <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <p>Total Items: {totalItems}</p>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
            <button onClick={handleCheckout}>Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;