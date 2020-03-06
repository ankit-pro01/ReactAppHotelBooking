import React from "react";
import classes from "./ModalContent.module.css";
import Button from "../UI/button/button";


const goToCheckOut = (props) => {
    props.history.push(props.match.path + "/checkout")    
}


const modalContent = (props) => {
    
    return(
        <div className = {classes.container} >
            <div className = {classes.content}>
                <img src = {props.state.modalData.img}></img>
                <div className = {classes.infoDiv}><p><b style={{color : "mediumBlue"}}>PRICE:-</b>{props.state.modalData.price} /person</p>
                    <b style = {{color : "mediumBlue"}}>INFO:-</b>
                    <p>{props.state.modalData.info}</p>
                </div>
            </div>
            <div className = {classes.btnDiv}>
                <Button clicked = {() => goToCheckOut(props)}>continue</Button>

            </div>
        </div>
    )
}


export default modalContent;    