'use strict';
var url = require('url');
var Device = require('./DeviceService');

module.exports.getDevice = function getDevice (req, res, next) {
    Device.getDevice (req.swagger.params, res, next);
};

module.exports.putDevice = function putDevice (req, res, next) {
    Device.putDevice (req.swagger.params, res, next);
};

module.exports.postDevice = function postDevice (req, res, next) {
    Device.postDevice (req.swagger.params, res, next);
};

module.exports.patchDevice = function patchDevice (req, res, next) {
    Device.patchDevice (req.swagger.params, res, next);
};

module.exports.deleteDevice = function deleteDevice (req, res, next) {
    Device.deleteDevice (req.swagger.params, res, next);
};

