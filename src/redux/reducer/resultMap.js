import { allUrl} from "../../enum/enum.js";

const initalState = {
    url: null,
    json: null,
};

const resultMap = (state = initalState, action) => {
    switch (action.type) {
        case allUrl.changURL:
            return {
                ...state,
                url: action.payload.url,
                json: action.payload.json
            };
        default:
            return state;
    }
}

export default resultMap;