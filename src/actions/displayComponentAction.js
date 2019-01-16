import { takeLatest, call, put } from "redux-saga/effects";
import axios from 'axios';

export const getData = () => ({
    type: 'DISPLAY_COMPONENT_GET_DATA',
});

export const getDataSuccess = (payload) => ({
    type: 'DISPLAY_COMPONENT_GET_DATA_SUCCESS',
    payload: payload,
});

export const getDataFail = (payload) => ({
    type: 'DISPLAY_COMPONENT_GET_DATA_FAIL',
    payload: payload,
});


// saga
export function* watcherSaga() {
    yield takeLatest("DISPLAY_COMPONENT_GET_DATA", workerSaga);
}

// saga
function* workerSaga() {
    try {
        const response = yield call(getDataAPI);


        // test
        console.log('worker saga');
        console.log(response.data);


        let data = response.data;
        yield put({ type: "DISPLAY_COMPONENT_GET_DATA_SUCCESS", data });

    } catch (error) {
        yield put({ type: "DISPLAY_COMPONENT_GET_DATA_FAIL", error });
    }
}

// saga
function getDataAPI() {
    return axios({
        method: "get",
        url: "https://dog.ceo/api/breeds/image/random"
    });
}



/*
// NOTE: we put api here, then component import and call
export function getDataAPI() {

    console.log('-- click: call getDataApi --');

    // () => dispatch(...)
    return dispatch => {
        console.log('-- not working? --');

        // app state
        dispatch( getData() );

        axios('https://dog.ceo/api/breeds/image/random')
        .then(response => {
            console.log('--res--');
            console.log(response);

            if (response.status >= 200 && response.status < 300) {
                console.log('-- good --');
                console.log(response);

                // app state
                dispatch( getDataSuccess(response) );
            } else {
                const error = response.statusText;
                console.log('-- bad --');
                console.log(response);

                // app state
                dispatch(getDataFail(error));
            }
            return '';
        })
        .catch(error => {
            console.log('request failed', error);
        });
    }
}
*/




