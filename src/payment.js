import React from 'react'
import "./payment.css"
import { UseStateValue } from './StateProvider'
import CheckoutProduct from './basket'
import { Link } from "react-router-dom"
function payment() {
    const [{basket,user},dsipatch]=UseStateValue();
    return (
        
        <div className="payment">
        <div className="payment_container">
        <h1>
            CheckOut 
            (<Link to="/checkingout">{basket?.length}items</Link>)
        </h1>
            <div className="paymentt_section">
                <div className="payment_title">
                    <h3>Delivary Address</h3>
                </div>
                <div className="payment_address">
                <p>{user?.email}</p>
                <p>markapur</p>
                <p>523316</p></div>
            </div>
            <div className="paymentt_section">
            <div className="payment_title">
                <h3>Review items and delivary</h3>
            </div>
            <div className="payment_cart">
                {basket.map(item=>
                <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                />
                )}
            </div>
                
            </div>
            <div className="paymentt_section">
                <h3>Payment Method</h3>
                <div className="payment_details">

                </div>
            </div>
        </div>
            
        </div>
    )
}

export default payment
