import React from "react";
import myLogo from "../../../assets/img/logo/resort-icon.png";
import classes from "./logo.module.css";


const logo = (props) => {
    return(
        <div className = {classes.logo}>
            <img src= {myLogo} alt = "mylogo" width = {props.width}>
            </img>
        </div>
    )
}


export default logo;