import productApi from '../api/product';
import * as types from './actionTypes';

export function loadProduct() {
    return function(dispatch) {
        return productApi.getAllProduct().then(rows => {
            dispatch(loadProductSuccess(rows.data));
        }).catch(err => {
            throw Error(err);
        })
    }
}

export function loadProductSuccess(rows) {
    return { type: types.LOAD_PRODUCT_SUCCESS, product: rows }
}

export function createProduct(dataToInsert) {
    return function(dispatch) {
        return productApi.createOneProduct(dataToInsert).then(data => {
            dispatch(createProductSuccess(data.status));
            return data.status;
        }).catch(err => {
            throw Error(err);
        })
    }
}

export function createProductSuccess(status) {
    return { type: types.CREATE_PRODUCT_SUCCESS, status}
}

export function updateProduct(id, dataToUpdate) {
    return function(dispatch) {
        return productApi.updateProduct(id, dataToUpdate).then(data => {
            dispatch(updateProductSuccess(data.status));
            return data.status;
        }).catch(err => {
            throw Error(err);
        })
    }
}

export function updateProductSuccess(status) {
    return { type: types.UPDATE_PRODUCT_SUCCESS, status}
}
