'use strict';

const express = require('express');
const router = express.Router();
const Promise = require('bluebird');

const productList = require('./list');
const productCreate = require('./create');
const productUpdate = require('./update');

router.get('/list', Promise.coroutine(function* (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    try {
        const response = yield productList.getProduct();
        res.status(200).send(response);
    }catch (err) {
        res.status(400).send(err);
    }
}));

router.post('/create', Promise.coroutine(function* (req, res) {
    console.log("**",req.body);
    const { product_name, product_price ,qty} = req.body;
    const dataToInsert = {
        product_name,
        product_price,
        qty
    };

    try {
        const response = yield productCreate.createOneProduct(dataToInsert);
        res.status(200).send(response);
    }catch (err) {
        res.status(400).send(err);
    }
}));

router.post('/update', Promise.coroutine(function* (req, res) {
    const { product_name, product_price, qty} = req.body.dataToUpdate;
    const id = req.body.id;
    const dataToUpdate = {
        product_name,
        product_price: Number(product_price),
        qty: Number(qty)
    };

    try {
        const response = yield productUpdate.updateProduct(id, dataToUpdate);
        res.status(200).send(response);
    }catch (err) {
        res.status(400).send(err);
    }
}));

module.exports = router;