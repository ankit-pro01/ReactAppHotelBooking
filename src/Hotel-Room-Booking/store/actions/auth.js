import * as actionTypes from './actionTypes';
import axios from "axios";
require('dotenv').config();



export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    
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


        let signInUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_API_KEY}`;

        let url = isSignIn ? signInUrl : `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_API_KEY}`

        axios.post(url,authData)
        .then(response => { 
            let token = response.data.idToken;
            let userId = response.data.localId;
            localStorage.setItem('token',token);
            localStorage.setItem('userId',userId);

            dispatch(authSuccess(token, userId));
            dispatch(checkAuthTimeOut(response.data.expiresIn))

        })
        .catch(err => {            
            if(err.response){
                dispatch(authFail(err.response.data.error.message))
            }
            else{
                dispatch(authFail("Something Went wrong"))
            }       
        }
        )
    }
}