import React from "react";
import classes from "./Sidebar.module.css";
import Navigation from "../../Navigation";
import Logo from "../../../UI/logo/logo";

const sidebar = (props) => {
    
    return(
        <div className = {classes.Sidebar} style = {{transform : props.show ? "translateX(0)": "translateX(-100vh)"}}>
            <nav>
                <Navigation />
            </nav>
        </div>
    )
}


export default sidebar;