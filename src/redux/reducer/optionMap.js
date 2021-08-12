import { changeLocation, OptionVehicle } from "../../enum/enum.js";

const initalState = {
    origin: '16.024634,108.209217',
    destination: '16.020179,108.211212',
    vehicle: 'car',
    key: '33a10ae857f9f0320e808d7a001c605f',
};

const SearchMapReducer = (state = initalState, action) => {
    switch (action.type) {
        case OptionVehicle.changeVehicle:
            return {
                ...state,
                vehicle: (action.payload)
            };
        case changeLocation.changeLocation:
            return {
                ...state,
                origin: (action.payload.origin),
                destination: (action.payload.destination),
                vehicle: (action.payload.vehicle),
            };
        default:
            return state;
    }
}

export default SearchMapReducer;