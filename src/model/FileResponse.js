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
    root.MediaShuttleApi.FileResponse = factory(root.MediaShuttleApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The FileResponse model module.
   * @module model/FileResponse
   * @version 1.13.3
   */

  /**
   * Constructs a new <code>FileResponse</code>.
   * A file that can be transferred using Media Shuttle.
   * @alias module:model/FileResponse
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>FileResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FileResponse} obj Optional instance to populate.
   * @return {module:model/FileResponse} The populated <code>FileResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('path'))
        obj.path = ApiClient.convertToType(data['path'], 'String');
      if (data.hasOwnProperty('isDirectory'))
        obj.isDirectory = ApiClient.convertToType(data['isDirectory'], 'Boolean');
      if (data.hasOwnProperty('size'))
        obj.size = ApiClient.convertToType(data['size'], 'Number');
    }
    return obj;
  }

  /**
   * The path to the file.
   * @member {String} path
   */
  exports.prototype.path = undefined;

  /**
   * Indicates that the file is a directory.
   * @member {Boolean} isDirectory
   * @default false
   */
  exports.prototype.isDirectory = false;

  /**
   * The size of the file in bytes.
   * @member {Number} size
   */
  exports.prototype.size = undefined;


  return exports;

}));
