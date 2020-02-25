import React from "react";
import myLogo from "../../../assets/img/logo/resort-icon.png";
import classes from "./logo.module.css";


const logo = () => {
    return(
        <div className = {classes.logo}>
            <img src= {myLogo} alt = "mylogo" >
            </img>
        </div>
    )
}


export default logo;