import React from "react";
import Aux from "../../HOC/Auxc/Auxi";
import Title from "../Title/Title";
import classes from "./modal.module.css";
import Backdrop from "../UI/backdrop/backdrop";

const modal = (props) => {

    //let modal = ()
    return(
        //props.show ? modal :null
        <Aux>
           <Backdrop show = {props.show} click = {props.close}/>
            <div className = {classes.modal} style = {{transform : props.show ? "translateY(0)" :"translateY(-100vh)"}}>
                <span className = {classes.close}>x</span>
                <h2>{props.name} </h2>
                {props.children}
             </div>
        </Aux>
    )
}


export default modal;