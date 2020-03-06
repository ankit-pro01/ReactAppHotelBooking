import React from "react";
import Aux from "../../HOC/Auxc/Auxi";
import classes from "./modal.module.css";
import Backdrop from "../UI/backdrop/backdrop";

const modal = (props) => {
    return(
        <Aux>
           <Backdrop show = {props.show} click = {props.close}/>
            <div className = {classes.modal} style = {{transform : props.show ? "translateY(0)" :"translateY(-200vh)"}}>
                <h2>{props.name} </h2>
                {props.children}
             </div>
        </Aux>
    )
}


export default modal;