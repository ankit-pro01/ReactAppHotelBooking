import React from "react";
import classes from "./ModalContent.module.css";
import Button from "../UI/button/button";
import { Link } from "react-router-dom";

const modalContent = (props) => {    
    return(
        
        <div className = {classes.container} >
            <div className = {classes.content}>
                <img src = {props.state.modalData.img} alt= ""></img>
                <div className = {classes.infoDiv}><p><b style={{color : "mediumBlue"}}>PRICE:-</b>{props.state.modalData.price} /person</p>
                    <b style = {{color : "mediumBlue"}}>INFO:-</b>
                    <p>{props.state.modalData.info}</p>
                </div>
            </div>
            <div className = {classes.btnDiv}>
                <Link to= "/rooms/checkout"><Button>continue</Button></Link>

            </div>
        </div>
    )
}


export default modalContent;    