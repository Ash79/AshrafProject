'use strict';
      //var CustomerFD = require('./Customer.json')
  var CustomerFD = require('./v1/Customer.json');
    var CustomerData = CustomerFD;
          exports.getCustomer = function(event, cb) {
    const response = {
      statusCode: 200,
      headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true
      },
      body: JSON.stringify( CustomerData),
      isBase64Encoded: false
    };
    cb(null, response);
  }
                      exports.putCustomer = function(event, cb) {
      CustomerData.push(event.body);
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
              exports.postCustomer = function(event, cb) {
      CustomerData.push(event.body);
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
              exports.patchCustomer = function(event, cb) {
      CustomerData.push(event.body);
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
            exports.deleteCustomer = function(event, cb) {
      var response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true
        },
        body: "",
        isBase64Encoded: false
      };
      var index = CustomerData.indexOf(event.body);
      if (index > -1) {
          CustomerData.splice(index, 1);
          response["body"] = "Item deleted successfully";
      }else{
        response["body"] = "Item does not exist";
      }
      cb(null, response);
  }
            