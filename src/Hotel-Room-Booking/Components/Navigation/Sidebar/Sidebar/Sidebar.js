import React from "react";
import classes from "./Sidebar.module.css";
import Navigation from "../../Navigation";
import Logo from "../../../UI/logo/logo";
import navImg from "../../../../assets/img/draw/roadSign.svg";

const sidebar = (props) => {

    let style = {display : "flex",
            alignItems :"center",
            justifyContent:"center",
            boxSizing:"border-box",
            flexFlow : "column wrap",
            paddingTop: "50px",
    }    
    return(
        <div className = {classes.Sidebar} style = {{transform : props.show ? "translateX(0)": "translateX(-100vh)"}}>
            <div>
                <Logo width = "40%"/>
            </div>
            <nav>
                <Navigation style = {style} />
            </nav>
            <div>
                <img src = {navImg}></img>
            </div>
        </div>
    )
}


export default sidebar;