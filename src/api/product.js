/*
    You should use axios
 */

import axios from 'axios';

class product {

    static getAllProduct() {
        const url = 'http://localhost:3001/product/list';
        return axios.get(url).then(results => {
            return results
        });
    }

    static createOneProduct(dataToPost) {
        const url = 'http://localhost:3001/product/create';
        return axios.post(url, dataToPost)
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                return error;
            });
    }

    static updateProduct(id, dataToUpdate) {
        const url = 'http://localhost:3001/product/update';
        return axios.post(url, { id, dataToUpdate})
            .then(res => {
                return res;
            })
            .catch(err => {
                return err;
            })
    }
}

export default product;
