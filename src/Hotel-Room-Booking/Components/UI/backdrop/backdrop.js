import React from "react";
import classes from "./backdrop.module.css";

const backdrop = (props) => {
    
    let backdrop = (<div className = {classes.backdrop} onClick = {props.click}> </div>)
    
    return ( props.show ? backdrop : null )
}

export default backdrop;