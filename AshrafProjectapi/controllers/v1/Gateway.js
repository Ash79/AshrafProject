'use strict';
var url = require('url');
var Gateway = require('./GatewayService');

module.exports.getGateway = function getGateway (req, res, next) {
    Gateway.getGateway (req.swagger.params, res, next);
};

module.exports.putGateway = function putGateway (req, res, next) {
    Gateway.putGateway (req.swagger.params, res, next);
};

module.exports.postGateway = function postGateway (req, res, next) {
    Gateway.postGateway (req.swagger.params, res, next);
};

module.exports.patchGateway = function patchGateway (req, res, next) {
    Gateway.patchGateway (req.swagger.params, res, next);
};

module.exports.deleteGateway = function deleteGateway (req, res, next) {
    Gateway.deleteGateway (req.swagger.params, res, next);
};

