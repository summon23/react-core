'use strict';

const DB = require('../modules/Database');
const Promise = require('bluebird');

exports.findAll = function (){
    const model = DB.getInstance();
    return new Promise((resolve, reject) => {
        try {
            resolve(model.User.findAll({
                limit: 2
            }));
        } catch(err) {
            reject(err);
        }
    });
};

module.exports = exports;