import * as types from '../action/actionTypes';
import initialState from './initialState';

const productReducer = (state = initialState.productState, action) => {
    switch (action.type) {
        case types.LOAD_PRODUCT_SUCCESS:
            return action.product;
        case types.CREATE_PRODUCT_SUCCESS:
            return [
                ...state,
                Object.assign({}, action.status)
            ];
        default:
            return state;
    }
};

export default productReducer;
