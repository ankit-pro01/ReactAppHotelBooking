import React from "react";
import Logo from "../../UI/logo/logo";
import Navigation from "../Navigation";
import classes from "./Toolbar.module.css";
import Toggle from "../Sidebar/Toggle/toggle";

const toolbar = (props) => {
    return(
        <header className = {classes.Toolbar}>
            <Toggle click = {props.toggleClick}/>
            <Logo />
            <nav>
                <Navigation />
            </nav>
        </header>
    )
}


export default toolbar;