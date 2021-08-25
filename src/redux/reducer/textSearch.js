import {textSearch } from "../../enum/enum.js";

const initalState = {
    address: 'Hair Salon Hải,Phường Trúc Bạch,Quận Ba Đình,Thành phố Hà Nội',
    location: '16.036505,108.218186',
    key: '33a10ae857f9f0320e808d7a001c605f'
}

const searchPlace = (state = initalState, action) => {
    switch (action.type) {
        case textSearch.searchPlace:
            return {
                ...state,
                address: (action.payload.address),
                location: (action.payload.location)

            };
        default:
            return state;
    }
}

export default searchPlace;