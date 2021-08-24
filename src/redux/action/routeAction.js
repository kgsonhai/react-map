import { allUrl, changeAutoSuggest, changeLocation, OptionVehicle } from "../../enum/enum.js";

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

export const changeUrl = (url,json) => {
    return {
        type: allUrl.changURL,
        payload:{url,json},
    }
}