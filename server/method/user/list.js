'use strict';

// const express = require('express')
// const router = express.Router();

const UserRepo = require('../../repositories/user');
exports.ENDPOINT = 'user/list';
const Promise = require('bluebird');

exports.getUserList = function () {
    const res = null;

    return new Promise(function (resolve, reject) {
        try {
            const data = UserRepo.findAll()
            resolve(data);
        } catch(err) {
            reject(err);
        }
    });
}

exports.getUser = Promise.coroutine(function* () {
    const data = yield UserRepo.findAll();

    return data;
});

module.exports = exports;
