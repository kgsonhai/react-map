import { combineReducers } from "redux";
import autoSuggestReducer from "./autoSuggest";
import graphReducer from "./Graph";
import SearchMapReducer from "./optionMap";
import resultMap from "./resultMap";
import searchPlace from "./textSearch";

const rootReducer = combineReducers({
    searchMap: SearchMapReducer,
    ATSuggest: autoSuggestReducer,
    textSearchPlace: searchPlace,
    urlAPI: resultMap,
    Graphs: graphReducer

});

export default rootReducer;