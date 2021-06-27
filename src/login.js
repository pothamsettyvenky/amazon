import React,{ useState } from 'react'
import './login.css'
import AmazonLogo from './amma.png'
import {Link, useHistory} from 'react-router-dom'
import { auth } from './firebase'
function Login() {
    const History=useHistory();
    const [Email,SetEmail]= useState('');
    const [Password,SetPassword]= useState('');
    const SignIn = e=>{
        e.preventDefault();
        auth
        .signInWithEmailAndPassword(Email,Password)
        .then(auth=>{
            History.push('/')
        })
        .catch(error=>alert(error.message))


    }
    const Register=e=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(Email,Password)
        .then((auth)=>{
            if (auth){
                History.push('/')
            }
           
        })
        .catch(error=>alert(error.message))

        }
    
    
    return (
        <div className="login__user"> 
        <Link to="/">
            <img src={AmazonLogo} 
            alt=""
            className="Login_img"    
            />
            </Link>
            <div className="Login_info">
                <h1 className="login_title">Sign-In</h1>
                <form>
                <h5>Email or mobile phone number</h5>
                <input type="text" value={Email} onChange={e=>SetEmail(e.target.value)} className="Login_input"/>
                <h5>password</h5>
                <input type="password" value={Password} onChange={e=>SetPassword(e.target.value)} className="Login_password"/>
                
                <button onClick={SignIn}className="login_button">Sign-in</button>
                </form>
                <p>
                    By signing-in you agree to the Created AMAZON CLONE
                    conditions of use & sale,Please see our Privacy Notice,our Cokkies
                    notice and our Interest-Based Ads Notice
                </p>
                
                <button onClick={Register}className="Login_signup ">Create Here</button>
            </div>
        </div>
    )
}

export default Login;
