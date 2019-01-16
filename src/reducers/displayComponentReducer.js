import {
    DISPLAY_COMPONENT_GET_DATA,
    DISPLAY_COMPONENT_GET_DATA_SUCCESS,
    DISPLAY_COMPONENT_GET_DATA_FAIL
} from '../constants';

const initialState = {
    loading: false,
    data: null,
    error: null,
}

// big if else
export default function displayComponentReducer(state = initialState, action) {
    switch (action.type) {
        case DISPLAY_COMPONENT_GET_DATA:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case DISPLAY_COMPONENT_GET_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload.data,
                error: null,
            };
        case DISPLAY_COMPONENT_GET_DATA_FAIL:
            return {
                ...state,
                loading: false,
                data: null,
                error: "api gets data error"
            };
        default:
            return state;
    }
}


