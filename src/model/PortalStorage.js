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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.MediaShuttleApi) {
      root.MediaShuttleApi = {};
    }
    root.MediaShuttleApi.PortalStorage = factory(root.MediaShuttleApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PortalStorage model module.
   * @module model/PortalStorage
   * @version 1.13.3
   */

  /**
   * Constructs a new <code>PortalStorage</code>.
   * Associates storage with a portal.
   * @alias module:model/PortalStorage
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PortalStorage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PortalStorage} obj Optional instance to populate.
   * @return {module:model/PortalStorage} The populated <code>PortalStorage</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('storageId'))
        obj.storageId = ApiClient.convertToType(data['storageId'], 'String');
      if (data.hasOwnProperty('repositoryPath'))
        obj.repositoryPath = ApiClient.convertToType(data['repositoryPath'], 'String');
    }
    return obj;
  }

  /**
   * The storageId to which the portal is assigned.
   * @member {String} storageId
   */
  exports.prototype.storageId = undefined;

  /**
   * The repository path on the remote server. Not applicable for object-backed cloud storage.
   * @member {String} repositoryPath
   * @default '/usr/Signiant_Media_Shuttle/repository/<random> or C:/Program Files/Signiant Media Shuttle/repository/<random>'
   */
  exports.prototype.repositoryPath = '/usr/Signiant_Media_Shuttle/repository/<random> or C:/Program Files/Signiant Media Shuttle/repository/<random>';


  return exports;

}));
