 import React from 'react';
 import "./Checkout.css"
import Subtotal from './Subtotal';

function Checkout() {
  return( 
    <div className='checkout'>
        <div className='checkout__left'>
            <img className='checkout__ad' 
            src="https://images-na.ssl-images-amazon.com/images/G/01/prime/PrimeDeals/Test/vxd-737_Prime_Deals_Test_OS_SP_Hero_v1_3000x600_2x.jpg">
            </img>

            <div>
                <h2 className='checkout__title'>
                    Your shopping Basket</h2>
            </div>
        </div>

        <div className='checkout__right'>
            <Subtotal />
        </div>


    </div>


  );
}

export default Checkout;
