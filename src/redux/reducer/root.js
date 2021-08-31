import { combineReducers } from "redux";
import autoSuggestReducer from "./autoSuggest";
import geocodeReducer from "./geocode";
import graphReducer from "./Graph";
import nearbyPlace from "./nearbyPlace";
import SearchMapReducer from "./optionMap";
import rasterTile from "./rasterTile";
import resultMap from "./resultMap";
import searchPlace from "./textSearch";

const rootReducer = combineReducers({
    searchMap: SearchMapReducer,
    ATSuggest: autoSuggestReducer,
    textSearchPlace: searchPlace,
    urlAPI: resultMap,
    Graphs: graphReducer,
    ATGeocode: geocodeReducer,
    nearbySearchPlace: nearbyPlace,
    rasterSearch: rasterTile,
});

export default rootReducer;