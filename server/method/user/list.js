'use strict';
const ENDPOINT = '/list';
const METHODTYPE = 'GET';

const UserRepo = require('../../repositories/user');
const Promise = require('bluebird');

const MAINFUNCTION = Promise.coroutine(function* () {
    const data = yield UserRepo.findAll();
    return data;
});

const { verifyJWTMiddleware } = require('../../middleware/auth');

module.exports = {
    ENDPOINT,
    METHODTYPE,
    MAINFUNCTION,
    MIDDLEWARE: verifyJWTMiddleware
};
