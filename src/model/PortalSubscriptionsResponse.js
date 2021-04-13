/*
 * Media Shuttle API
 * Signiant's **Media Shuttle Management API** endpoints allows you to automate portal and storage management and view active transfers using your own web applications.  The **System-to-Person API** allows you to create upload and download links directly from other applications, letting you accelerate file transfers through Media Shuttle.  For more information about getting started with the Media Shuttle API, read our [Getting Started Guide](http://developer.signiant.com/msapi/getting-started.html).  ---   You can test API endpoints using your Media Shuttle subscription by generating an API key from your IT Administration user menu, in the **Developer** section.  Once you have generated an API key, click the **Authorize** button, and enter your API key in the **Value** field, and click **Authorize** to enable the examples. 
 *
 * OpenAPI spec version: 1.13.3
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.19
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/PortalSubscriptionResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PortalSubscriptionResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.MediaShuttleApi) {
      root.MediaShuttleApi = {};
    }
    root.MediaShuttleApi.PortalSubscriptionsResponse = factory(root.MediaShuttleApi.ApiClient, root.MediaShuttleApi.PortalSubscriptionResponse);
  }
}(this, function(ApiClient, PortalSubscriptionResponse) {
  'use strict';

  /**
   * The PortalSubscriptionsResponse model module.
   * @module model/PortalSubscriptionsResponse
   * @version 1.13.3
   */

  /**
   * Constructs a new <code>PortalSubscriptionsResponse</code>.
   * @alias module:model/PortalSubscriptionsResponse
   * @class
   * @extends Array
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PortalSubscriptionsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PortalSubscriptionsResponse} obj Optional instance to populate.
   * @return {module:model/PortalSubscriptionsResponse} The populated <code>PortalSubscriptionsResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      ApiClient.constructFromObject(data, obj, 'PortalSubscriptionResponse');
    }
    return obj;
  }

  Object.setPrototypeOf(exports.prototype, new Array());

  return exports;

}));