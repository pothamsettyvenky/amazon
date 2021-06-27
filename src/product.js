import React from 'react'
import './product.css';
import { UseStateValue } from './StateProvider';
import StarRateIcon from '@material-ui/icons/StarRate';
function Product({id,title,image,price,rating}) {
    const [{basket},dispatch]=UseStateValue();
   
    const addTooBasket=()=>{
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating
            },
        });

    };
    return (
        <div className="product">
            <div className="product_info">
            <p>{id}</p>
              <strong>  <p className="product_title">{title}</p></strong>
                <p className="product_price">
               
                <small>₹</small>
                <strong>{price}</strong>
                </p>
                <div className="product_rating"> 
                
                    {Array (rating)
                    .fill().map((_,i)=>(
                        <StarRateIcon className="star"/>
                    ))}
                    
                </div>
                </div>
                <img className="product_image" 
                    src={image}
                    alt=""
                />
                <button onClick={addTooBasket} className="cart_button">Add to cart</button>
            </div>
       
    );
}

export default Product
