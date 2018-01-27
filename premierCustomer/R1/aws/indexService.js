'use strict';
      //var PremierCustomerFD = require('./PremierCustomer.json')
  var PremierCustomerFD = require('./v1/PremierCustomer.json');
    var PremierCustomerData = PremierCustomerFD;
          exports.getPremierCustomer = function(event, cb) {
    const response = {
      statusCode: 200,
      headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true
      },
      body: JSON.stringify( PremierCustomerData),
      isBase64Encoded: false
    };
    cb(null, response);
  }
                      exports.putPremierCustomer = function(event, cb) {
      PremierCustomerData.push(event.body);
      var response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true
        },
        body: "Item inserted successfully",
        isBase64Encoded: false
      };
      cb(null, response);
  }
              exports.postPremierCustomer = function(event, cb) {
      PremierCustomerData.push(event.body);
      var response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true
        },
        body: "Item inserted successfully",
        isBase64Encoded: false
      };
      cb(null, response);
  }
              exports.patchPremierCustomer = function(event, cb) {
      PremierCustomerData.push(event.body);
      var response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true
        },
        body: "Item patched successfully",
        isBase64Encoded: false
      };
      cb(null, response);
  }
            exports.deletePremierCustomer = function(event, cb) {
      var response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true
        },
        body: "",
        isBase64Encoded: false
      };
      var index = PremierCustomerData.indexOf(event.body);
      if (index > -1) {
          PremierCustomerData.splice(index, 1);
          response["body"] = "Item deleted successfully";
      }else{
        response["body"] = "Item does not exist";
      }
      cb(null, response);
  }
            