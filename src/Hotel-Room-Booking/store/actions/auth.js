import * as actionTypes from './actionTypes';

import axios from "axios";

export const authStart = () =>{
    return {
        type : actionTypes.AUTH_START
    }
}

export const authSuccess = (message) =>{
    return {
        type : actionTypes.AUTH_SUCCESS,
        message : message
    }
}

export const authFail = (err) => {
    return {
        type :actionTypes.AUTH_FAIL,
        error : err
    }
}

export const auth = (email, password, isSignIn) => {
    return dispatch  => {
        dispatch(authStart());
        const authData = {
            email : email,
            password : password
        };
        //console.log(authData);
    
        let url = isSignIn ? "http://localhost:8080/users/signin" : "http://localhost:8080/users/login"

        axios.post(url,authData)
        .then(res => { 
            let message = res.data.message;
            let token = res.data.token;
            //let token = res.data.token
            console.log(message, token);
            
            dispatch(authSuccess(message, token))
        })
        .catch(err => {
            //console.log(err.response.data.message);
            
            dispatch(authFail(err.response.data.message))
            }
        )
    }
}