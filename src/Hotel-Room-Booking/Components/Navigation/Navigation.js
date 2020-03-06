import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./Navigation.module.css";

const navigation = (props) => {
    return(
        <ul className = {classes.navigation} style = {props.style}>
            <NavigationItem link = "/"> Home </NavigationItem>
            <NavigationItem link = "/rooms"> Rooms</NavigationItem>
            <NavigationItem link = "/login">login </NavigationItem>
            <NavigationItem link = "/Cart"> Cart </NavigationItem>
        </ul>
    )
}


export default navigation;