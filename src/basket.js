import React from 'react'
import './basket.css';
import StarRateIcon from '@material-ui/icons/StarRate';
import { UseStateValue } from './StateProvider';
function basket({id,image,title,price,rating}) {
    const [{basket},dispatch]=UseStateValue();
    const removeitem=()=>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id,
        })

    }
    return (
        <div className="checkout">
            <img className="img" src={image}/>
            <div className="checkout_info">
            <span className="checkOut_title">{title}</span>
            <div className="checkout_rating">{
                Array(rating)
                .fill()
                 .map((_,i)=>(<StarRateIcon className="star"/>))}</div>
            <p className="checkout_price">
            <small>₹</small>
            <strong>{price}</strong></p>
            <button onClick={removeitem} className="checkout_button">Remove from cart</button>
            </div>
        </div>
    )
}

export default basket
