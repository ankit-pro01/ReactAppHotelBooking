import React from "react";
import classes from './Title.module.css'

const title = (props) => {
    return(
        <div className = {classes.head}>
            <h2>{props.heading}</h2>
        </div>
    )
}


export default title;