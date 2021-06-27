import './App.css';
import React,{useEffect} from 'react';
import Header from './HomePage';
import Home from './Home';
import Footer from './footer';
import CheckOut from './CheckOut';
import Login from './login';
import {BrowserRouter as Router ,Switch ,Route}
from "react-router-dom";
import {auth} from './firebase';
import { UseStateValue } from './StateProvider';
import Payment from './payment';
function App() {
const [{},dispatch]=UseStateValue();
useEffect(()=>{
auth.onAuthStateChanged(authUser => {
  console.log(authUser)
  if (authUser){
   dispatch({
     type:'SET_USER',
     user:authUser
   })
    
  }
  else{
    dispatch({
      type:"SET_USER",
      user:null
    })

  }
})
  },[])
  return (
   <Router>
    <div className="App">
    
    <Switch>
   
      <Route path="/login">
          <Login/>
      </Route>
      <Route path="/checkingout">
          <Header/>
          <CheckOut/>
          <Footer/>
      </Route>

<Route path="/payment">
<Header/>
        <Payment/>
          <Footer/>
</Route>
      <Route path="/">
          <Header/>
          <Home/>
          <Footer/>
      </Route>
    </Switch>
    
    
    </div>
    </Router>
  );
}

export default App;
