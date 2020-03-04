import * as actionTypes from "../actions/actionTypes";

let initialState = {bookData : {}};

const bookingDataReducer = (state = initialState, action) => {
    switch (actionTypes.BOOK_DATA) {
        case "BOOK_DATA":

                return {
                    ...state,
                    bookData : action.data    
                }
            break;
    
        default:
            return state
            break;
    }
}

export default bookingDataReducer;