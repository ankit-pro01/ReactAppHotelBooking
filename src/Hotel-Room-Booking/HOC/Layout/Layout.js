import React, { Component } from  'react';

import Aux from '../Auxc/Auxi';
import Toolbar from "../../Components/Navigation/Toolbar/Toolbar";
import classes from "./Layout.module.css";
import Sidebar from '../../Components/Navigation/Sidebar/Sidebar/Sidebar';
import Backdrop from "../../Components/UI/backdrop/backdrop";

class Layout extends Component {
    state = {
        isAuth : true,
        sidebarOpen : false
    }

    handleToolBar = () => {
        console.log("toggle clicked");
        
        this.setState({...this.state, sidebarOpen : !this.state.sidebarOpen})
    }

    render() {
        //let sidebar =  this.state.sidebarOpen ?(<div> : null

        return (
            <Aux>
                
                <Backdrop show = {this.state.sidebarOpen} click = {this.handleToolBar} />
                <Toolbar toggleClick = {this.handleToolBar}/>
                {/* //{sidebar} */}
                <Sidebar show =  {this.state.sidebarOpen}/>
                <main className = {classes.Content}>
                    {this.props.children}
                </main> 
            </Aux>
        )
    }
};

export default Layout;