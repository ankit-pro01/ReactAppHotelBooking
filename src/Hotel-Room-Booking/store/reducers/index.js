import authReducer from "./auth";
import SearchReducer from "./SearchRoom";
import modadDataReducer from "./modalData";
import bookingDataReducer from "./bookingData";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    auth : authReducer,
    searchRoom : SearchReducer,
    modalData : modadDataReducer,
    bookingData: bookingDataReducer

})

export default rootReducer;
