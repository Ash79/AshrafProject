'use strict';
      //var DeviceFD = require('./Device.json')
  var DeviceFD = require('./v1/Device.json');
    var DeviceData = DeviceFD;
          exports.getDevice = function(event, cb) {
    const response = {
      statusCode: 200,
      headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true
      },
      body: JSON.stringify( DeviceData),
      isBase64Encoded: false
    };
    cb(null, response);
  }
                      exports.putDevice = function(event, cb) {
      DeviceData.push(event.body);
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
              exports.postDevice = function(event, cb) {
      DeviceData.push(event.body);
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
              exports.patchDevice = function(event, cb) {
      DeviceData.push(event.body);
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
            exports.deleteDevice = function(event, cb) {
      var response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true
        },
        body: "",
        isBase64Encoded: false
      };
      var index = DeviceData.indexOf(event.body);
      if (index > -1) {
          DeviceData.splice(index, 1);
          response["body"] = "Item deleted successfully";
      }else{
        response["body"] = "Item does not exist";
      }
      cb(null, response);
  }
            