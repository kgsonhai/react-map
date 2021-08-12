import { combineReducers } from "redux";
import SearchMapReducer from "./optionMap";

const rootReducer = combineReducers({
    searchMap: SearchMapReducer,
});

export default rootReducer;