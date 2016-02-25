/**
 * Copyright (c) 2016-present, SYNERZIP SOFTECH PVT, LTD.
 * All rights reserved.
 *
 * Created by nikhila on 24/02/16.
 */

'use strict';

import {createReducer} from '../utils';
import {FETCH_ACCOUNT_DATA_REQUEST,
    FETCH_ACCOUNT_DATA_REQUEST_COMPLETE,
    FETCH_ACCOUNT_DATA_REQUEST_FAILURE} from '../constants';
import {pushState} from 'redux-router';

const initialState = {
    userInfo: null
};

export default createReducer(initialState, {
    [FETCH_ACCOUNT_DATA_REQUEST]: state => {
        return Object.assign({}, state, {
            'isFetchingUserData': true
        });
    },
    [FETCH_ACCOUNT_DATA_REQUEST_COMPLETE]: state => {
        return Object.assign({}, state, {
            'isFetchingUserData': false
        });
    },
    [FETCH_ACCOUNT_DATA_REQUEST_FAILURE]: (state, payload) => {
        return Object.assign({}, state, {
            userInfo: payload.data
        });
    }
});
