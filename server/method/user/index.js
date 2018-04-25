'use strict';

const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();
const Promise = require('bluebird');

const UserList = require('./list');

router.get('/list', Promise.coroutine(function* (req, res) {
    const response = yield UserList.getUser();
    res.status(200).send(response);
}));

router.delete('/deleteUser', (req, res) => {
    res.send('Hello');
});

module.exports = router;