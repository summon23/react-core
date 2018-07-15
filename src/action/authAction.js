'use strict';

import authApi from '../api/auth';
import * as types from './actionTypes';

export function authLogin(data) {
    return function (dispatch) {
        return authApi.authUser(data)
            .then((res) => {
                return dispatch(authLoginSuccess(res.data))
            })
            .catch((err) => {
                throw Error(err);
            })
    }
}

export function authLoginSuccess(data) {
    return { type: types.LOGIN_SUCCESS, response: data}
}
