import React, { Component } from  'react';
import Toolbar from "../../Components/Navigation/Toolbar/Toolbar";
import classes from "./Layout.module.css";
import Sidebar from '../../Components/Navigation/Sidebar/Sidebar/Sidebar';
import Backdrop from "../../Components/UI/backdrop/backdrop";

class Layout extends Component {
    state = {
        isAuth : true,
        sidebarOpen : false
    };

    handleToolBar = () => {        
        this.setState({...this.state, sidebarOpen : !this.state.sidebarOpen})
    };

    render() {
        return (
            <React-Fragment>           
                <Toolbar toggleClick = {this.handleToolBar}/>
                <Sidebar show =  {this.state.sidebarOpen}/>
                <Backdrop show = {this.state.sidebarOpen} click = {this.handleToolBar} />
                <main className = {classes.Content}>
                    {this.props.children}
                </main> 
            </React-Fragment>
        )
    };
};

export default Layout;