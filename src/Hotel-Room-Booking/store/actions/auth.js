import * as actionTypes from './actionTypes';

import axios from "axios";


export const logout = () => {
    return {
        type : actionTypes.AUTH_LOGOUT,
    };
};


export const checkAuthTimeOut = (expireTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        },expireTime * 1000)
    }
}


export const authStart = () =>{
    return {
        type : actionTypes.AUTH_START,
    }
}

export const authSuccess = (idToken, userId, message) =>{
    return {
        type : actionTypes.AUTH_SUCCESS,
        message : message,
        userId : userId,
        idToken :idToken
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
            password : password,
            returnSecureToken : true,
        };

        let signInUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCG-CSfmkCxF7_TSp8Ewrt6FdNHYIqzzMQ";

        let url = isSignIn ? signInUrl : "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCG-CSfmkCxF7_TSp8Ewrt6FdNHYIqzzMQ"

        axios.post(url,authData)
        .then(response => { 
            let message = response.data.message;
            let token = response.data.idToken;
            let userId = response.data.localId;
            dispatch(authSuccess(token, userId));
            dispatch(checkAuthTimeOut(response.data.expiresIn))

        })
        .catch(err => {            
            console.log(err.response.data.error);        
            dispatch(authFail(err.response.data.error.message))
            }
        )
    }
}