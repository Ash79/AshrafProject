'use strict';
var index = require("./indexService.js");

var collectionResources = {};

                                        collectionResources["/customers/v1"] = {};
                collectionResources["/customers/v1"]["GET"] = index["getCustomer"];
                                            collectionResources["/customers/v1"]["PUT"] = index["putCustomer"];
                            collectionResources["/customers/v1"]["POST"] = index["postCustomer"];
                            collectionResources["/customers/v1"]["PATCH"] = index["patchCustomer"];
                        collectionResources["/customers/v1"]["DELETE"] = index["deleteCustomer"];
                      
exports.handler = function(event, context, cb) {
  if(event.method){
    return index[event.method](event, cb);
  }
  else {
    let resources = collectionResources;
    let resourcePath = event["resource"];
    if(resourcePath in resources) {
      let handlers = resources[resourcePath];
      let httpMethod = event["httpMethod"];
      if (httpMethod in handlers) {
          return handlers[httpMethod](event, cb);
      }
    }
    const response = {
      statusCode: 405,
      headers: {
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Credentials" : true
      },
      body: JSON.stringify({
        event: event,
        message: `Invalid HTTP Method: ${event["httpMethod"]}`
      }),
    };

    cb(null, response);
  }
};
