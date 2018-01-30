'use strict';
  var GatewayFD = require('../../sampleData/v1/Gateway.json');
  var GatewayData = GatewayFD;


var Promise = require('bluebird');
var paginationService = require('../../services/pagination.js');
 

exports.getGateway = function(args, res, next) {
/**
 * Gets all customers from the system that the user has access to
 *
 * returns List
 **/
  if (Object.keys(GatewayData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                                      console.log('Start Pagination......');
    paginationService.getPages(args.pageNumber.value, args.pageSize.value, GatewayData).then(function(result) {
        res.writeHead(200, {
            "Total": result.total,
            "Per-Page": result.pageSize,
            "Total-Pages": result.totalPages
        });
        res.end(JSON.stringify(result.pagedData));
    }).catch(function(error) {
        res.end(JSON.stringify(error));
    });
                        } else {
      res.end();
  }
}





exports.putGateway = function(args, res, next) {
/**
 * Puts all customers from the system that the user has access to
 *
 **/
  if (Object.keys(GatewayData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(GatewayData[Object.keys(GatewayData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


exports.postGateway = function(args, res, next) {
/**
 * Posts all customers from the system that the user has access to
 *
 **/
  if (Object.keys(GatewayData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(GatewayData[Object.keys(GatewayData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


exports.patchGateway = function(args, res, next) {
/**
 * Patchs all customers from the system that the user has access to
 *
 **/
  if (Object.keys(GatewayData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(GatewayData[Object.keys(GatewayData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}



exports.deleteGateway = function(args, res, next) {
/**
* Deletes all customers from the system that the user has access to
*
**/
  if (Object.keys(GatewayData).length > 0) {
      res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(GatewayData[Object.keys(GatewayData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


