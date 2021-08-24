import { combineReducers } from "redux";
import autoSuggestReducer from "./autoSuggest";
import SearchMapReducer from "./optionMap";
import resultMap from "./resultMap";

const rootReducer = combineReducers({
    searchMap: SearchMapReducer,
    ATSuggest: autoSuggestReducer,
    urlAPI: resultMap 

});

export default rootReducer;