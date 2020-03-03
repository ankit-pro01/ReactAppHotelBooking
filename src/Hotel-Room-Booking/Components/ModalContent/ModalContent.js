import React from "react";
import classes from "./ModalContent.module.css";
import Button from "../UI/button/button";



const goToCheckOut = (props) => {
    console.log(props);
    
    props.history.push("/rooms/checkout")    
}



const modalContent = (props) => {
    return(
        <div className = {classes.container} >
            <div className = {classes.content}>
                <img src = {props.roomData.img}></img>
                <div className = {classes.infoDiv}><p><b style={{color : "mediumBlue"}}>PRICE:-</b>{props.roomData.price} /person</p>
                    <b style = {{color : "mediumBlue"}}>INFO:-</b>
                    <p>{props.roomData.info}</p>
                </div>
            </div>
            <div className = {classes.btnDiv}>
                <Button btnType = "danger">cancel</Button>
                <Button clicked = {() => goToCheckOut(props)}>continue</Button>

            </div>
        </div>
    )
}


export default modalContent;