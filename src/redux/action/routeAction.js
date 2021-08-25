import { allUrl, changeAutoSuggest, changeGraphs, changeLocation, OptionVehicle, textSearch } from "../../enum/enum.js";

export const changeVehicle = (vehicle) => {
    return {
        type: OptionVehicle.changeVehicle,
        payload: vehicle,
    }
}

export const changeLoca = (origin,destination,vehicle) => {
    return {
        type: changeLocation.changeLocation,
        payload: {origin,destination,vehicle},
    }
}

export const changeATSuggest = (text) => {
    return {
        type: changeAutoSuggest.changeAutoSuggest,
        payload:text,
    }
}

export const changeTextPlace = (address,location) => {
    return {
        type: textSearch.searchPlace,
        payload:{address,location},
    }
}

export const changeGraph = (point,vehicle) => {
    return {
        type: changeGraphs.changeGraph,
        payload:{point,vehicle},
    }
}

export const changeGraphVehicle = (vehicle) => {
    return {
        type: changeGraphs.changeGraphVehicle,
        payload:vehicle,
    }
}

export const changeUrl = (url,json) => {
    return {
        type: allUrl.changURL,
        payload:{url,json},
    }
}