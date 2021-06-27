import React from 'react'
import './HomePage.css'
import pic from './amzon.png'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import {UseStateValue} from './StateProvider';
import {auth} from './firebase'
function HomePage() {
 
    const [{basket,user},dispatch]=UseStateValue();

    const handleauth=()=>{
        if(user){
        auth.signOut();
        }
    }
    return (
        <div  className="header">
            <Link to="/">
            <img 
            src={pic}
            alt="nope" 
            className="logo"
            />
            </Link>
           
            <div 
            className="search_bar">
                <input  className="search_input"
                    type="text"
                />
                <SearchIcon className="search_icon"/>
            </div>
            <div 
            className="header_nav">
            <Link to={!user && "/login"}>
            <div onClick={handleauth}
            className="header_options">
                <span className="option_line1">Hello {user ? user.email:"Guest"}</span>
                <span className="option_line2">{user ? 'Sign Out' : 'SignIn'}</span>
            </div>
            </Link>
            <div 
            className="header_options">
                <span className="option_line1">returns</span>
                <span className="option_line2">&others</span>
            </div>
            <div 
            className="header_options">
                <span className="option_line1">Your</span>
                <span className="option_line2">Prime</span>
            </div>
            <Link  to="/checkingout">
                <div className="cart_icon">
               <ShoppingBasketIcon className="cart_icon1"/>
                    
                    <span className="header_bascketCount option_line2">{user?basket.length:"0"}</span>
                </div>
                </Link>
            </div>
           
        </div>
        
    )
}

export default HomePage
