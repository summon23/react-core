'use strict';

import axios from 'axios';

class auth {
    static authUser(userInfo) {
        const url = 'http://localhost:3001/user/login';
        return axios.post(url, userInfo)
            .then((res) => {
                return res;
            })
            .catch((err) => {
                return err;
            });
    }
}

export default auth;
