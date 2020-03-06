import React from "react";
import classes from './Cart.module.css';
import cartImage from "../../assets/img/Cart/cart.svg";

const cart = () => {
    let cart = (<div className = {classes.cart}>
        <div>
            <img src= {cartImage}></img>
        </div>
        <div>
            <h1>PLEASE LOGIN..</h1>
        </div>
    </div>)
    
    return(cart)
}


export default cart;