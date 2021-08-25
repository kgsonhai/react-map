import { changeGraphs } from "../../enum/enum.js";

const initalState = {
    points: '16.039173,108.210912;16.044597,108.217263;16.0825981,108.2219887',
    vehicle: 'car',
    key: '33a10ae857f9f0320e808d7a001c605f'
}

const graphReducer = (state = initalState, action) => {
    switch (action.type) {
        case changeGraphs.changeGraph:
            return {
                ...state,
                points: action.payload.point,
                vehicle: action.payload.vehicle,
            };
        case changeGraphs.changeGraphVehicle:
            return {
                ...state,
                vehicle: action.payload,
            };
        default:
            return state;
    }
}

export default graphReducer;