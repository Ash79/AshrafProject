'use strict';
var url = require('url');
var Client = require('./ClientService');

module.exports.getClient = function getClient (req, res, next) {
    Client.getClient (req.swagger.params, res, next);
};

module.exports.putClient = function putClient (req, res, next) {
    Client.putClient (req.swagger.params, res, next);
};

module.exports.postClient = function postClient (req, res, next) {
    Client.postClient (req.swagger.params, res, next);
};

module.exports.patchClient = function patchClient (req, res, next) {
    Client.patchClient (req.swagger.params, res, next);
};

module.exports.deleteClient = function deleteClient (req, res, next) {
    Client.deleteClient (req.swagger.params, res, next);
};

