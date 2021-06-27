import React from 'react'
import './subtotal.css'

import CurrencyFormat from 'react-currency-format';
import {UseStateValue} from './StateProvider';
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router';
function Subtotal() {
    const History = useHistory();
    const [{basket},dispatch]=UseStateValue();
    return (
        <div className="subtotal1">
        <CurrencyFormat
            renderText={(value)=>(
                <>
                <p>
                    SubTotal ({basket.length} items):
                    <strong>{value}
</strong>
                </p>
                <small className="subTotal_gift">
                    <input type="checkbox"/>This order contains a gift
                </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={'₹'}
            
        />
         <button onClick={e=>History.push('/payment')} >proced to Check out</button>
        
            
        </div>
    )
}

export default Subtotal
