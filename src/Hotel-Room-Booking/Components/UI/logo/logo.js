import React from "react";
import myLogo from "../../../assets/img/logo/resort-icon.png";
import classes from "./logo.module.css";
import {Redirect} from "react-router-dom";


const logo = (props) => {
    return(
        <div className = {classes.logo} onClick = {props.clicked}>
            <img src= {myLogo} alt = "mylogo" width = {props.width}>
            </img>
        </div>
    )
}


export default logo;