import { changeGeocode } from "../../enum/enum";

const initalState = {
    address: 'cầu sông hàn',
    key: '33a10ae857f9f0320e808d7a001c605f'
}

const geocodeReducer = (state = initalState, action) => {
    switch (action.type) {
        case changeGeocode.changeGeocode:
            return {
                ...state,
                address: action.payload
            };
        default:
            return state;
    }
}
export default geocodeReducer;