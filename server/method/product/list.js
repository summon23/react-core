'use strict';

const ProductRepo = require('../../repositories/product');
const Promise = require('bluebird');

exports.getProduct = Promise.coroutine(function* (){
    return yield ProductRepo.findAll();
});

module.exports = exports;
