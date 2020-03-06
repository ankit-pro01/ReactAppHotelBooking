import * as actionTypes from "../actions/actionTypes";

let initialState = {
    loading : false,
    message : null,
    error : null,
    bookData : {}
}

const checkOutDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHECKOUT_START:
                return {
                    ...state,
                    loading : true,
                    message : null,
                    error : null    
                };
        case actionTypes.CHECKOUT_SUCCESS:
            return {
                ...state,
                loading : false,
                message :  `Room Booked Succesfully your id : ${action.message}`,
                error : false    
            };
        case actionTypes.CHECKOUT_FAIL:
                return {
                    ...state,
                    loading : false,
                    error : action.error
                };
        case actionTypes.BOOK_DATA:
            return {
                ...state,
                bookData : action.data,
                loading : false,
                message : null,
                error : null    
            };

        default:
            return {...state}
    };
}

export default checkOutDataReducer;