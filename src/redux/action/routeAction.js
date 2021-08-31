import {
    allUrl, changeAutoSuggest, changeGraphs,
    changeLocation, OptionVehicle, textSearch,
    changeGeocode, nearbySearch, changeRaster
} from "../../enum/enum.js";

export const changeVehicle = (vehicle) => {
    return {
        type: OptionVehicle.changeVehicle,
        payload: vehicle,
    }
}


export const changeLoca = (origin, destination, vehicle) => {
    return {
        type: changeLocation.changeLocation,
        payload: { origin, destination, vehicle },
    }
}

export const changeATSuggest = (text) => {
    return {
        type: changeAutoSuggest.changeAutoSuggest,
        payload: text,
    }
}

export const changeGeocoding = (address) => {
    return {
        type: changeGeocode.changeGeocode,
        payload: address,
    }
}



export const changeTextPlace = (address, location) => {
    return {
        type: textSearch.searchPlace,
        payload: { address, location },
    }
}

export const changeNearbyPlace = (location, radius, text) => {
    return {
        type: nearbySearch.nearbyPlace,
        payload: { location, radius, text },
    }
}

export const changeGraph = (point, vehicle) => {
    return {
        type: changeGraphs.changeGraph,
        payload: { point, vehicle },
    }
}

export const changeGraphVehicle = (vehicle) => {
    return {
        type: changeGraphs.changeGraphVehicle,
        payload: vehicle,
    }
}

export const changeUrl = (url, json) => {
    return {
        type: allUrl.changURL,
        payload: { url, json },
    }
}


export const TileRaster = (zoom, X, Y) => {
    return {
        type: changeRaster.changeRaster,
        payload: { zoom, X, Y },
    }
}

