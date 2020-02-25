import React from "react";
import classes from "./toggle.module.css";

const toggle = (props) => {
    return(
        <div className = {classes.toggle} onClick = {props.click}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}


export default toggle;