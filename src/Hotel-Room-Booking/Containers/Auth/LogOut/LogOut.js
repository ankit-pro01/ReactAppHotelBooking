import React , {Component }from "react";
import { Redirect } from "react-router-dom";
import * as action from  "../../../store/actions/index";
import { connect } from "react-redux";

class LogOut extends Component{

    componentDidMount(){
        this.props.logout()
    }

    render(){

        return(<Redirect to = "/signUp" />)
    }
}

let mapStateToDispatch = dispatch => {
    return{
        logout : () => dispatch(action.logout())
    }
}

export default connect(null, mapStateToDispatch)(LogOut);