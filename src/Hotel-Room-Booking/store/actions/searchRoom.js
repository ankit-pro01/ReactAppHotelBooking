import * as actionTypes from "./actionTypes";

export const searchRoom = (value) => {
    return {
        type : actionTypes.SEARCH_ROOM,
        value : value
    }
}
;
