import React from 'react';
import "./Product.css";

function Product({ title, image, price, rating}) {
  return(
    <div className='product'>
      
      <div className="product__info">
          <p>Atomic Habits: The life-changing million copy bestseller Paperback</p>
          <p className='product__price'>
              <p>₹<span><strong>541</strong></span></p>
          </p>
          <div className='product__rating'>
            <p>⭐</p>
          </div>
      </div>

      <img src="https://images-na.ssl-images-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg"/>

      <button>Add to Basket</button>
  </div>
  ); 
}

export default Product;
