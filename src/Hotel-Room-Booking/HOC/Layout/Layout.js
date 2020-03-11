import React, { Component } from  'react';
import Toolbar from "../../Components/Navigation/Toolbar/Toolbar";
import classes from "./Layout.module.css";
import Sidebar from '../../Components/Navigation/Sidebar/Sidebar/Sidebar';
import Backdrop from "../../Components/UI/backdrop/backdrop";
import {connect} from "react-redux";

class Layout extends Component {
    state = {
        isAuth : true,
        sidebarOpen : false
    };

    handleToolBar = () => {        
        this.setState({...this.state, sidebarOpen : !this.state.sidebarOpen})
    };

    render() {
        let isLogin = this.props.auth.token;
        return (
            <React-Fragment>           
                <Toolbar toggleClick = {this.handleToolBar} logInCheck = {isLogin}/>
                <Sidebar show =  {this.state.sidebarOpen} logInCheck = {isLogin}clicked = {this.handleToolBar} />
                <Backdrop show = {this.state.sidebarOpen} click = {this.handleToolBar} />
                <main className = {classes.Content}>
                    {this.props.children}
                </main> 
            </React-Fragment>
        )
    };
};

let mapStateToProps = (state) => {
    return {
        auth : state.auth
    }
}

export default connect(mapStateToProps)(Layout);