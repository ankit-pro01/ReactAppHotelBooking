import * as actionTypes from "./actionTypes";

export const modaldata = (name,img, info) => {
    let data = {name, img, info} 
    return {
        type : actionTypes.MODAL_DATA,
        data : data
    }
};