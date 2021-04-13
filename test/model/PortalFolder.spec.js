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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.MediaShuttleApi);
  }
}(this, function(expect, MediaShuttleApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('PortalFolder', function() {
      beforeEach(function() {
        instance = new MediaShuttleApi.PortalFolder();
      });

      it('should create an instance of PortalFolder', function() {
        // TODO: update the code to test PortalFolder
        expect(instance).to.be.a(MediaShuttleApi.PortalFolder);
      });

      it('should have the property path (base name: "path")', function() {
        // TODO: update the code to test the property path
        expect(instance).to.have.property('path');
        // expect(instance.path).to.be(expectedValueLiteral);
      });

      it('should have the property userHome (base name: "userHome")', function() {
        // TODO: update the code to test the property userHome
        expect(instance).to.have.property('userHome');
        // expect(instance.userHome).to.be(expectedValueLiteral);
      });

      it('should have the property canUpload (base name: "canUpload")', function() {
        // TODO: update the code to test the property canUpload
        expect(instance).to.have.property('canUpload');
        // expect(instance.canUpload).to.be(expectedValueLiteral);
      });

      it('should have the property canDownload (base name: "canDownload")', function() {
        // TODO: update the code to test the property canDownload
        expect(instance).to.have.property('canDownload');
        // expect(instance.canDownload).to.be(expectedValueLiteral);
      });

      it('should have the property canDoFileOperations (base name: "canDoFileOperations")', function() {
        // TODO: update the code to test the property canDoFileOperations
        expect(instance).to.have.property('canDoFileOperations');
        // expect(instance.canDoFileOperations).to.be(expectedValueLiteral);
      });

    });
  });

}));
