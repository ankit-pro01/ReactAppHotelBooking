import authReducer from "./auth";
import SearchReducer from "./SearchRoom";
import modadDataReducer from "./modalData";
import {combineReducers} from "redux";
import checkOutDataReducer from "./checkOutData";

const rootReducer = combineReducers({
    auth : authReducer,
    searchRoom : SearchReducer,
    modalData : modadDataReducer,
    checkOutData : checkOutDataReducer
});

export default rootReducer;
