import *  as actionTypes from "../actions/actionTypes";

const initialState = {
    loading : false,
    message : null,
    token : null,
};

const authReducer = (state = initialState, action) =>{
    switch (action.type) {
        case actionTypes.AUTH_START:
            return {
                ...state,
                loading : true
            };
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                loading : false,
                message : action.message,
                token : action.token
            };
        case actionTypes.AUTH_FAIL:
            return {
                ...state,
                loading : false,
                message : action.error,
                token : null,
            };
    
        default:
            return {...state};
    };
};

export default authReducer;