import * as actionTypes from "../actions/actionTypes";

let initialState = {
    loading : false,
    message : null,
    error : null
}

const checkOutDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHECKOUT_START:
                return {
                    ...state,
                    loading : true,    
                }
            break;
        case actionTypes.CHECKOUT_SUCCESS:
            return {
                ...state,
                loading : false,
                message :  `Room Booked Succesfully your id : ${action.message}`,
                error : false    
            }
            break;
        case actionTypes.CHECKOUT_FAIL:
                return {
                    ...state,
                    loading : false,
                    error : action.error
                }
            break;    
        default:
            return {...state}
            break;
    }
}

export default checkOutDataReducer;