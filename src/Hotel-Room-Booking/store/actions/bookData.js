import * as actionTypes from "./actionTypes";

export const bookData = (userData) => {
    console.log("action " + userData);
    
    return {
        type : actionTypes.BOOK_DATA,
        data : userData
    }
}

