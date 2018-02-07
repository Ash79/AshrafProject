'use strict';
  var DeviceFD = require('../../sampleData/v1/Device.json');
  var DeviceData = DeviceFD;


var Promise = require('bluebird');
var paginationService = require('../../services/pagination.js');
 

exports.getDevice = function(args, res, next) {
/**
 * Gets all customers from the system that the user has access to
 *
 * returns List
 **/
  if (Object.keys(DeviceData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                                      console.log('Start Pagination......');
    paginationService.getPages(args.pageNumber.value, args.pageSize.value, DeviceData).then(function(result) {
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





exports.putDevice = function(args, res, next) {
/**
 * Puts all customers from the system that the user has access to
 *
 **/
  if (Object.keys(DeviceData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(DeviceData[Object.keys(DeviceData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


exports.postDevice = function(args, res, next) {
/**
 * Posts all customers from the system that the user has access to
 *
 **/
  if (Object.keys(DeviceData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(DeviceData[Object.keys(DeviceData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


exports.patchDevice = function(args, res, next) {
/**
 * Patchs all customers from the system that the user has access to
 *
 **/
  if (Object.keys(DeviceData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(DeviceData[Object.keys(DeviceData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}



exports.deleteDevice = function(args, res, next) {
/**
* Deletes all customers from the system that the user has access to
*
**/
  if (Object.keys(DeviceData).length > 0) {
      res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(DeviceData[Object.keys(DeviceData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


