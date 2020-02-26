import * as actionTypes from "./actionTypes";

export const modaldata = (roomData) => {
    let data = roomData;
    return {
        type : actionTypes.MODAL_DATA,
        data : data
    }
};