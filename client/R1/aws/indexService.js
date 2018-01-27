'use strict';
      //var ClientFD = require('./Client.json')
  var ClientFD = require('./v1/Client.json');
    var ClientData = ClientFD;
          exports.getClient = function(event, cb) {
    const response = {
      statusCode: 200,
      headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true
      },
      body: JSON.stringify( ClientData),
      isBase64Encoded: false
    };
    cb(null, response);
  }
                      exports.putClient = function(event, cb) {
      ClientData.push(event.body);
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
              exports.postClient = function(event, cb) {
      ClientData.push(event.body);
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
              exports.patchClient = function(event, cb) {
      ClientData.push(event.body);
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
            exports.deleteClient = function(event, cb) {
      var response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true
        },
        body: "",
        isBase64Encoded: false
      };
      var index = ClientData.indexOf(event.body);
      if (index > -1) {
          ClientData.splice(index, 1);
          response["body"] = "Item deleted successfully";
      }else{
        response["body"] = "Item does not exist";
      }
      cb(null, response);
  }
            