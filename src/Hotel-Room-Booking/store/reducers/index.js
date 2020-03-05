import authReducer from "./auth";
import SearchReducer from "./SearchRoom";
import modadDataReducer from "./modalData";
import bookingDataReducer from "./bookingData";
import {combineReducers} from "redux";
import checkOutDataReducer from "./checkOutData";

const rootReducer = combineReducers({
    auth : authReducer,
    searchRoom : SearchReducer,
    modalData : modadDataReducer,
    bookingData: bookingDataReducer,
    checkOutData : checkOutDataReducer

})

export default rootReducer;
