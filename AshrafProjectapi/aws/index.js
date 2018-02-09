'use strict';
var index = require("./indexService.js");

var collectionHandlers = {};
                  collectionHandlers["GET"] = index["getCustomer"];
                                            collectionHandlers["PUT"] = index["putCustomer"];
                            collectionHandlers["POST"] = index["postCustomer"];
                            collectionHandlers["PATCH"] = index["patchCustomer"];
                        collectionHandlers["DELETE"] = index["deleteCustomer"];
                                        collectionHandlers["GET"] = index["getGateway"];
                                            collectionHandlers["PUT"] = index["putGateway"];
                            collectionHandlers["POST"] = index["postGateway"];
                            collectionHandlers["PATCH"] = index["patchGateway"];
                        collectionHandlers["DELETE"] = index["deleteGateway"];
                                        collectionHandlers["GET"] = index["getDevice"];
                                            collectionHandlers["PUT"] = index["putDevice"];
                            collectionHandlers["POST"] = index["postDevice"];
                            collectionHandlers["PATCH"] = index["patchDevice"];
                        collectionHandlers["DELETE"] = index["deleteDevice"];
                      
exports.handler = function(event, context, cb) {
  if(event.method){
    return index[event.method](event, cb);
  }
  else {
      let handlers = collectionHandlers;
      let httpMethod = event["httpMethod"];
      if (httpMethod in handlers) {
          return handlers[httpMethod](event, cb);
      }
      const response = {
        statusCode: 405,
        headers: {
          "Access-Control-Allow-Origin" : "*",
          "Access-Control-Allow-Credentials" : true
        },
        body: JSON.stringify({
          message: `Invalid HTTP Method: ${event["httpMethod"]}`
        }),
      };

    cb(null, response);
  }
};
