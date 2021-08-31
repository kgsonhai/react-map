import { changeRaster } from "../../enum/enum";

const initalState = {
    zoom: '',
    X: '',
    Y: '',
    key: '33a10ae857f9f0320e808d7a001c605f'
}

const rasterTile = (state = initalState, action) => {
    switch (action.type) {
        case changeRaster.changeRaster:
            return {
                ...state,
                zoom: (action.payload.zoom),
                X: (action.payload.X),
                Y: (action.payload.Y),
            };
        default:
            return state;
    }
}
export default rasterTile;