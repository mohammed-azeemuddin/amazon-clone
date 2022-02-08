import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
  return(
    <div className='home'>
        <div className='home__container'>
            <img className='home__image' 
            src="https://m.media-amazon.com/images/I/61aUfpZteZL._SX3000_.jpg" alt="" />

            <div className='home__row'>
                <Product
                    id = "12345387" 
                    title = "Atomic Habits: The life-changing million copy bestseller Paperback"
                    price = {"541"}
                    image = "https://images-na.ssl-images-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg"
                    rating = {3}
                />

                <Product 
                    id = "1732642"
                    title = "boAt Xtend Smartwatch with Alexa Built-in, 1.69” HD Display & 5 ATM Water Resistance(Pitch Black)"
                    price = {"2,999"}
                    image = "https://m.media-amazon.com/images/I/61IMRs+o0iL._SL1500_.jpg"
                    rating = {4}
                />  
            </div>

            
            <div className='home__row'> 
                <Product 
                    id = "12345389"
                    title = "Apple iPhone 13 Pro (256GB) - Sierra Blue"
                    price = {"1,29,900"}
                    image = "https://m.media-amazon.com/images/I/61jLiCovxVL._SL1500_.jpg"
                    rating = {4}
                />

                <Product 
                    id = "126742"
                    title = "Echo (4th Gen, 2020 release) | Powered by Dolby and Alexa (Black)"
                    price = {"6,999.0"}
                    image = "https://m.media-amazon.com/images/I/61-DjUz7JxL.jpg"
                    rating = {5}
                />
                <Product 
                    id = "1545642"
                    title = "Cadbury Dairy Milk Silk Fruit and Nut Chocolate Bar, 137g (Pack of 3)"
                    price = {"483"}
                    image = "https://m.media-amazon.com/images/I/61QNTafi2iL._SL1500_.jpg"
                    rating = {4}
                />
            </div>

            
            <div className='home__row'>
                <Product 
                    id = "1234522"
                    title = "Samsung 34-inch (86.40cm) Curved Monitor- 21:9 Ultrawide QLED, Thunderbolt 3 Port- LC34J791WTWXXL, Gray"
                    price = {"85,600"}
                    image = "https://m.media-amazon.com/images/I/91pi34PiUPL._SL1500_.jpg"
                    rating = {4}
                />
            </div>
        </div>
    </div>
  );
}

export default Home;
