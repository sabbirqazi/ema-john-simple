import React from 'react';
import './Cart.css';
const Cart = ({cart}) => {
    let totalPrice =0;
    let totalShipping=0;
    for (const product of cart){
        totalPrice = totalPrice+product.price;  
        totalShipping = totalShipping+ product.shipping; 
    }
    const tax = totalPrice*7/100;
    const grandTotal = totalPrice+totalShipping+tax;
    return (
        <>
        <div className='cart-details'>
              <h4>Order Summary</h4>
              <p>Selected Items: {cart.length}</p>
              <p>Total Price: ${totalPrice}</p>
              <p>Shipping Charge: ${totalShipping}</p>
              <p>Tax: ${tax.toFixed(2)}</p>
              <p>Grand Total: ${grandTotal.toFixed(2)}</p>
        </div>
        </>
    );
};

export default Cart;