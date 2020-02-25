import React from "react";
import classes from "./Sidebar.module.css";
import Navigation from "../../Navigation";
import Logo from "../../../UI/logo/logo";

const sidebar = (props) => {
    
    return(
        <div className = {classes.Sidebar}>
            <nav>
                <Navigation />
            </nav>
        </div>
    )
}


export default sidebar;