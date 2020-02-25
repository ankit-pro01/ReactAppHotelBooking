import authReducer from "./auth";
import SearchReducer from "./SearchRoom";
import modadDataReducer from "./modalData";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    auth : authReducer,
    searchRoom : SearchReducer,
    modalData : modadDataReducer
})

export default rootReducer;
