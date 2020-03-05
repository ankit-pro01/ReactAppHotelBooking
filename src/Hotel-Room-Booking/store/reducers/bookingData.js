
let initialState = {bookData : ""};

const bookingDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case "BOOK_DATA":
                return {
                    ...state,
                    bookData : action.data    
                }
        default:
            return {...state}
    }
}

export default bookingDataReducer;