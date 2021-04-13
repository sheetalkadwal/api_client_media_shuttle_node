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
    root.MediaShuttleApi.PackageEventResponse = factory(root.MediaShuttleApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PackageEventResponse model module.
   * @module model/PackageEventResponse
   * @version 1.13.3
   */

  /**
   * Constructs a new <code>PackageEventResponse</code>.
   * A package event
   * @alias module:model/PackageEventResponse
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PackageEventResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PackageEventResponse} obj Optional instance to populate.
   * @return {module:model/PackageEventResponse} The populated <code>PackageEventResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('action'))
        obj.action = ApiClient.convertToType(data['action'], 'String');
      if (data.hasOwnProperty('details'))
        obj.details = ApiClient.convertToType(data['details'], 'String');
      if (data.hasOwnProperty('eventType'))
        obj.eventType = ApiClient.convertToType(data['eventType'], 'String');
      if (data.hasOwnProperty('date'))
        obj._date = ApiClient.convertToType(data['date'], 'Date');
    }
    return obj;
  }

  /**
   * The action that occurred for the event
   * @member {module:model/PackageEventResponse.ActionEnum} action
   */
  exports.prototype.action = undefined;

  /**
   * Additional event details, such as the email address of the user who performed a successful package transfer or a description of the user and files when a package transfer failed
   * @member {String} details
   */
  exports.prototype.details = undefined;

  /**
   * The event type
   * @member {module:model/PackageEventResponse.EventTypeEnum} eventType
   */
  exports.prototype.eventType = undefined;

  /**
   * The date when the event ocurred
   * @member {Date} _date
   */
  exports.prototype._date = undefined;



  /**
   * Allowed values for the <code>action</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ActionEnum = {
    /**
     * value: "Successful Upload"
     * @const
     */
    successfulUpload: "Successful Upload",

    /**
     * value: "Successful Download"
     * @const
     */
    successfulDownload: "Successful Download",

    /**
     * value: "Successful Send Link"
     * @const
     */
    successfulSendLink: "Successful Send Link",

    /**
     * value: "Successful Forward"
     * @const
     */
    successfulForward: "Successful Forward",

    /**
     * value: "Upload Canceled"
     * @const
     */
    uploadCanceled: "Upload Canceled",

    /**
     * value: "Download Canceled"
     * @const
     */
    downloadCanceled: "Download Canceled",

    /**
     * value: "Upload Failed"
     * @const
     */
    uploadFailed: "Upload Failed",

    /**
     * value: "Download Failed"
     * @const
     */
    downloadFailed: "Download Failed",

    /**
     * value: "Failed Forward"
     * @const
     */
    failedForward: "Failed Forward"
  };


  /**
   * Allowed values for the <code>eventType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.EventTypeEnum = {
    /**
     * value: "Info"
     * @const
     */
    info: "Info",

    /**
     * value: "Warning"
     * @const
     */
    warning: "Warning",

    /**
     * value: "Error"
     * @const
     */
    error: "Error"
  };

  return exports;

}));
