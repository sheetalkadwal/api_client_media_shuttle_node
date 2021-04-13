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
    describe('S3Storage', function() {
      beforeEach(function() {
        instance = new MediaShuttleApi.S3Storage();
      });

      it('should create an instance of S3Storage', function() {
        // TODO: update the code to test S3Storage
        expect(instance).to.be.a(MediaShuttleApi.S3Storage);
      });

      it('should have the property roleARN (base name: "roleARN")', function() {
        // TODO: update the code to test the property roleARN
        expect(instance).to.have.property('roleARN');
        // expect(instance.roleARN).to.be(expectedValueLiteral);
      });

      it('should have the property bucket (base name: "bucket")', function() {
        // TODO: update the code to test the property bucket
        expect(instance).to.have.property('bucket');
        // expect(instance.bucket).to.be(expectedValueLiteral);
      });

      it('should have the property externalId (base name: "externalId")', function() {
        // TODO: update the code to test the property externalId
        expect(instance).to.have.property('externalId');
        // expect(instance.externalId).to.be(expectedValueLiteral);
      });

      it('should have the property serverSideEncryption (base name: "serverSideEncryption")', function() {
        // TODO: update the code to test the property serverSideEncryption
        expect(instance).to.have.property('serverSideEncryption');
        // expect(instance.serverSideEncryption).to.be(expectedValueLiteral);
      });

      it('should have the property filePrefix (base name: "filePrefix")', function() {
        // TODO: update the code to test the property filePrefix
        expect(instance).to.have.property('filePrefix');
        // expect(instance.filePrefix).to.be(expectedValueLiteral);
      });

    });
  });

}));
