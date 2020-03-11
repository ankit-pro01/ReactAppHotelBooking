import * as actionTypes from './actionTypes';

import axios from "axios";

export const bookData = (userData) => {    
    return {
        type : actionTypes.BOOK_DATA,
        data : userData
    }
}

// export const totalPrice = (price) => {
//     return {
//         type : actionTypes.TOTAL_PRICE,
//         totalPrice : price
//     }
// }

export const checkOutStart = () =>{
    return {
        type : actionTypes.CHECKOUT_START
    }
}

export const checkOutSuccess = (message) =>{
    return {
        type : actionTypes.CHECKOUT_SUCCESS,
        message : message
    }
}

export const checkOutFail = (err) => {
    return {
        type :actionTypes.CHECKOUT_FAIL,
        error : err
    }
}

export const checkOutData = (data,token) => {
    return dispatch  => {
        dispatch(checkOutStart());
        let userId = localStorage.getItem('userId')
        const checkOutData = {
           data,userId
        };
        let token = localStorage.getItem('token');        
        let isLoginIn = token;
        let url = isLoginIn ?  "https://hotel-room-booking-84489.firebaseio.com/orders.json?auth="+token : "https://hotel-room-booking-84489.firebaseio.com/randomUser.json"

        try {
            axios.post(url,checkOutData)
        .then(res => { 
            let message = data.uniqueString;
            dispatch(checkOutSuccess(message))
        })
        .catch(err => {    
            dispatch(checkOutFail(err))
            }
        )
            
        }
        catch(err){
            console.log(err);
            
        }
        
    }
}