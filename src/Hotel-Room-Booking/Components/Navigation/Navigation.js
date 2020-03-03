import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./Navigation.module.css";

const navigation = () => {
    return(
        <ul className = {classes.navigation}>
            <NavigationItem link = "/rooms"> Rooms</NavigationItem>
            <NavigationItem link = "/login">login </NavigationItem>
            <NavigationItem link = "/Cart"> Cart </NavigationItem>

        </ul>
    )
}


export default navigation;