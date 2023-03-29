import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
   
  const { id, name, img, price, ratings, seller } = props.product;
  const addToCart = props.addToCart;
  return (
    <>
      <div className="product-card">
        <img src={img} alt="" />
        <div className="product-info">
          <h4>{name}</h4>
          <p>Price $ {price}</p>
          <p>
           Manufacturer:{seller} 
          </p>
          <p>
            Rating: {ratings}
          </p>
        </div>
        <button className="btn-cart" onClick={() => addToCart(props.product)}>
          Add To Cart
          <FontAwesomeIcon icon={faShoppingCart} />
          </button>
      </div>
    </>
  );
};

export default Product;
