'use strict';

const ProductRepo = require('../../repositories/product');
const Promise = require('bluebird');

exports.updateProduct = Promise.coroutine(function* (id, data){
    try {
        yield ProductRepo.update(id, data);
        return {
            status: true,
            message: 'Product Updated'
        }
    } catch (err) {
        return {
            data: false,
            message: err
        }
    }
});

module.exports = exports;
