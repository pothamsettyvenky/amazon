import React from 'react'
import './Checkout.css'
import SubTotal from './subtotal';
import {UseStateValue} from './StateProvider';
import Basket from './basket'
function CheckOut() {
  const [{basket,user},dispatch]=UseStateValue( );
    return (
        <div className="checkOut">
          <div className="checkout_left">
            <img className="checkout_img"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/Wearables/realme/Bulb/Available_Now/SmartBulb_1500x300.jpg"
                alt=""
            />
            <div className="checkout_title">
            <h2>Hello {user?.email}</h2>
                <h2> Your Shopping Basket</h2>
                {basket.map(items=>
                <Basket
                id={items.id}
                  image={items.image}
                  title={items.title}
                  price={items.price}
                  rating={items.rating}
                />)}
               
            </div>
            {basket.title}
          </div>
          <div className="checkout_Right">
          <SubTotal/>
              
          </div>
        </div>
    )
}

export default CheckOut
