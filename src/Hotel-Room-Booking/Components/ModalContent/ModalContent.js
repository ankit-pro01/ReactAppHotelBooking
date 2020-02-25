import React from "react";
import classes from "./ModalContent.module.css";

const modalContent = (props) => {
    return(
        <div className = {classes.container} >
            <div className = {classes.content}>
                <div><img src = {props.roomData.img}></img></div>
                <div><b>INFO:</b>
                <p>{props.roomData.info}</p>
                <p><b>price:</b>1000</p>
                </div>
            </div>
            <div>ajskfafklsdfmsldsdl;fsd;lfsdf;ls</div>
        </div>
    )
}


export default modalContent;