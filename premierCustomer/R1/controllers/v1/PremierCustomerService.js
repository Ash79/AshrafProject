'use strict';
  var PremierCustomerFD = require('../../sampleData/v1/PremierCustomer.json');
  var PremierCustomerData = PremierCustomerFD;


var Promise = require('bluebird');
var paginationService = require('../../services/pagination.js');
 

exports.getPremierCustomer = function(args, res, next) {
/**
 * Gets all customers from the system that the user has access to
 *
 * returns List
 **/
  if (Object.keys(PremierCustomerData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                                      console.log('Start Pagination......');
    paginationService.getPages(args.pageNumber.value, args.pageSize.value, PremierCustomerData).then(function(result) {
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





exports.putPremierCustomer = function(args, res, next) {
/**
 * Puts all customers from the system that the user has access to
 *
 **/
  if (Object.keys(PremierCustomerData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(PremierCustomerData[Object.keys(PremierCustomerData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


exports.postPremierCustomer = function(args, res, next) {
/**
 * Posts all customers from the system that the user has access to
 *
 **/
  if (Object.keys(PremierCustomerData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(PremierCustomerData[Object.keys(PremierCustomerData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


exports.patchPremierCustomer = function(args, res, next) {
/**
 * Patchs all customers from the system that the user has access to
 *
 **/
  if (Object.keys(PremierCustomerData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(PremierCustomerData[Object.keys(PremierCustomerData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}



exports.deletePremierCustomer = function(args, res, next) {
/**
* Deletes all customers from the system that the user has access to
*
**/
  if (Object.keys(PremierCustomerData).length > 0) {
      res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(PremierCustomerData[Object.keys(PremierCustomerData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


