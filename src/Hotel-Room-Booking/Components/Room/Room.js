import React from "react";
import classes from './Room.module.css'

const room = (props) => {
    return(
        <div className = {classes.box} onClick = {props.click}>
            <div>
                <img src= {props.imgSrc} alt = ""></img>
                {props.name}
            </div>
            
        </div>
    )
}


export default room;