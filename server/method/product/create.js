'use strict';

const ProductRepo = require('../../repositories/product');
const Promise = require('bluebird');

exports.createOneProduct = Promise.coroutine(function* (data){
    try {
        yield ProductRepo.createOne(data);
        return {
            status: true,
            message: 'Product Inserted'
        }
    } catch (err) {
        return {
            data: false,
            message: err
        }
    }
});

module.exports = exports;
