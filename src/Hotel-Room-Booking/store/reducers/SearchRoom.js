import * as actionTypes from "../actions/actionTypes";
import * as Data from "../../Data/Data";

let initialState = Data.roomArr;


const searchRoomReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SEARCH_ROOM:
            state = initialState            
            let value = action.value;
            let Arr  = [...state];

            let newArr = Arr.filter((i) => {
                return i.name.includes(value)
            });            

            return newArr
            break;  
    
        default:
            return state
            break;
    }
};

export default searchRoomReducer;