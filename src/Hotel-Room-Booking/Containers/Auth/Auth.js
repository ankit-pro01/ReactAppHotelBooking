import React, { Component } from "react";
import Input from '../../Components/UI/input/input';
import Spinner from '../../Components/UI/Spinner/spinner';
import classes from "./Auth.module.css";
import Button from "../../Components/UI/button/button";
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import * as actions from '../../store/actions/index';
import backImg from "../../assets/img/loginImg/Login.svg";
import formImg from "../../assets/img/loginImg/forgot_password.svg"

class Auth extends Component {

    state = {
        isloading : false,
        heading : null,
        isSignIn : false,
        email : null,
        password : null,
        er : null,
        emailError : null,
        passwordError : null
    }

    // componentDidMount(){
    //     fetch("/users").then(res => res.json()).then(result => console.log(result)
    //      );

    //     console.log("fetching");        
    // }

    validateFeilds = () =>{

    }

    handleSign = () => {
        this.props.st.error = null;
        this.props.st.message = null;
        this.setState({isSignIn : !this.state.isSignIn, emailError : null,
            passwordError : null})
    }

    handleChange = (event) => {
        const  name = event.target.name;
        let value = "";
        let emailError = "";
        let passwordError = "";
        switch (name) {
            case "email":
                value = event.target.value;   
                if ( ! (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value))){
                    emailError  = "invalid email" 
                }             
                break;
            case "password":
                value = event.target.value;
                if( ! (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(value))){
                    passwordError  = `invalid password : 
                    matches a string of six or more characters,
                    that contains at least one digit,
                    at least one lowercase character  and
                    at least one uppercase character `
                }
                break;
            default:
                break;
        }       
        this.setState({...this.state, [name] :value, emailError : emailError, passwordError : passwordError})
        
    }


    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.email, this.state.password, this.state.isSignIn);

    }



    render(){
        let Sign = null
            Sign = this.state.isSignIn ?  "Sign In" :  "Log In";

        let buttonConfig = (!(this.state.emailError === "" && this.state.passwordError === "")
        || (this.state.emailError === null && this.state.passwordError === null))

        //let forgotPassword = null;

        let forgotPassword = this.state.isSignIn ? null : <Link style = {{"color" : "Blue"}} to = "/users/forgotpassword" >forgot password</Link>
            
        let form = ( 
            <div className = {classes.AuthContainer}>
                <img src= {backImg}></img>
                <form style = {{"textAlign" : "center"}} onSubmit = {this.handleSubmit} >
                    <h2 style = {{"color" : "mediumBlue"}}>{Sign}</h2>

                    <Input  type = "email" name = "email" placeholder = "mail id" onChange = {this.handleChange} />
                    {Sign === "Sign In" ? <p style = {{"color" : "red"}}> {this.state.emailError} </p>: null}


                    <Input  type = "password" name = "password" placeholder = "password" onChange = {this.handleChange}/>
                    {Sign === "Sign In" ? <p style = {{"color" : "red"}}> {this.state.passwordError} </p>: null}

                    <Button disabled = {(buttonConfig)}>Submit</Button>
            
                    {forgotPassword}   

                    <Button clicked = {this.handleSign}>{Sign === "Sign In"?  "Log In" : "Sign-In"}</Button>

                    <p style = {{"color" : "red"}}>{this.props.st.message}</p>
                    <img src= {formImg}></img>
                </form>

            </div>
            
        );

        if( this.props.st.loading ){
            form = <Spinner />
        }
        
        return(
            form
        )
    }
}

const mapStateToProps = state => {
    return {
        st : state
    }
}

const mapToDispatch = dispatch => {
    return {
        onAuth : (email, password, isSignIn) => dispatch(actions.auth(email, password, isSignIn))
    }
}

export default connect(mapStateToProps, mapToDispatch)(Auth);