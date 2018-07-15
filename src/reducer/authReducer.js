'use strict';

import * as types from '../action/actionTypes';
import initialState from './initialState';

const authReducer = (state = initialState.userState, action) => {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            console.log("[okkkk]");
            console.log("[action]", action);
            const token = action.response.token;
            const userStatus = action.response.status;
            return {
                ...state,
                token,
                userStatus
            };
        default:
            return state;
    }
};

export default authReducer;
