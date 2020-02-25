import React from "react";
import Aux from "../../HOC/Auxc/Auxi";
import Title from "../Title/Title";
import classes from "./modal.module.css";
import Backdrop from "../UI/backdrop/backdrop";

const modal = (props) => {

    let modal = (<Aux>
                    <Backdrop show = {props.show} click = {props.close}/>

                    <div className = {classes.modal}>
                    <Title heading = {props.name}/>
                        {props.children}
                    </div>
            
                </Aux>)
    return(
        props.show ? modal :null
    )
}


export default modal;