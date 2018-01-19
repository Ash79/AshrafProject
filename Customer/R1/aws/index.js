'use strict';
var index = require("./indexService.js");

var collectionHandlers = {};
                  collectionHandlers["GET"] = index["getCustomer"];
                                            collectionHandlers["PUT"] = index["putCustomer"];
                            collectionHandlers["POST"] = index["postCustomer"];
                            collectionHandlers["PATCH"] = index["patchCustomer"];
                        collectionHandlers["DELETE"] = index["deleteCustomer"];
                      
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
