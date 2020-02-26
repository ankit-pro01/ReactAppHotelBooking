import * as actionTypes from "../actions/actionTypes";

let initialState = {name : null,img : null, info : null, price : null}

const modalDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.MODAL_DATA:
            return {
                ...state,
                name : action.data.name,
                img : action.data.img,
                info : action.data.info,
                price : action.data.price,
            }
    
        default:
            return state
            break;
    }
}

export default modalDataReducer;