'use strict';
var url = require('url');
var PremierCustomer = require('./PremierCustomerService');

module.exports.getPremierCustomer = function getPremierCustomer (req, res, next) {
    PremierCustomer.getPremierCustomer (req.swagger.params, res, next);
};

module.exports.putPremierCustomer = function putPremierCustomer (req, res, next) {
    PremierCustomer.putPremierCustomer (req.swagger.params, res, next);
};

module.exports.postPremierCustomer = function postPremierCustomer (req, res, next) {
    PremierCustomer.postPremierCustomer (req.swagger.params, res, next);
};

module.exports.patchPremierCustomer = function patchPremierCustomer (req, res, next) {
    PremierCustomer.patchPremierCustomer (req.swagger.params, res, next);
};

module.exports.deletePremierCustomer = function deletePremierCustomer (req, res, next) {
    PremierCustomer.deletePremierCustomer (req.swagger.params, res, next);
};

