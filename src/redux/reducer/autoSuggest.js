import { changeAutoSuggest } from "../../enum/enum.js";

const initalState = {
    text: 'Bến xe Đà Nẵng',
    key: '33a10ae857f9f0320e808d7a001c605f'
}

const autoSuggestReducer = (state = initalState, action) => {
    switch (action.type) {
        case changeAutoSuggest.changeAutoSuggest:
            return {
                ...state,
                text:action.payload
            };
        default:
            return state;
    }
}

export default autoSuggestReducer;