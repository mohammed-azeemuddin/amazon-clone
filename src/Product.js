import React from 'react';
import "./Product.css";

function Product({ title, image, price, rating}) {
  return(
    <div className='product'>
      
      <div className="product__info">
          <p>{title}</p>
          <p className='product__price'>
              <p>₹<span><strong>{price}</strong></span></p>
          </p>
          <div className='product__rating'>
            { Array(rating)
            .fill()
            .map((_, i) => (
              <p><span>⭐</span></p>
            ))}
          </div>
      </div>

      <img src={image}></img>
      <button>Add to Basket</button>
  </div>
  ); 
}

export default Product;
