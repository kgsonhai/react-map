import { nearbySearch } from "../../enum/enum.js";

const initalState = {

    location: '16.036505,108.218186',
    radius: '500',
    text: '',
    key: '33a10ae857f9f0320e808d7a001c605f'
}

const nearbyPlace = (state = initalState, action) => {
    switch (action.type) {
        case nearbySearch.nearbyPlace:
            return {
                ...state,
                location: (action.payload.location),
                radius: (action.payload.radius),
                text: (action.payload.text)
            };
        default:
            return state;
    }
}

export default nearbyPlace;