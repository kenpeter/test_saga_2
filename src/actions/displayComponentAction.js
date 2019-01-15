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

// NOTE: we put api here, then component import and call
export function getDataAPI() {

    console.log('-- click: call getDataApi --');

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
        })
        .catch(error => {
            console.log('request failed', error);
        });
    }
}
