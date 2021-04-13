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
    describe('Portal', function() {
      beforeEach(function() {
        instance = new MediaShuttleApi.Portal();
      });

      it('should create an instance of Portal', function() {
        // TODO: update the code to test Portal
        expect(instance).to.be.a(MediaShuttleApi.Portal);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property url (base name: "url")', function() {
        // TODO: update the code to test the property url
        expect(instance).to.have.property('url');
        // expect(instance.url).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

      it('should have the property createdOn (base name: "createdOn")', function() {
        // TODO: update the code to test the property createdOn
        expect(instance).to.have.property('createdOn');
        // expect(instance.createdOn).to.be(expectedValueLiteral);
      });

      it('should have the property lastModifiedOn (base name: "lastModifiedOn")', function() {
        // TODO: update the code to test the property lastModifiedOn
        expect(instance).to.have.property('lastModifiedOn');
        // expect(instance.lastModifiedOn).to.be(expectedValueLiteral);
      });

      it('should have the property authentication (base name: "authentication")', function() {
        // TODO: update the code to test the property authentication
        expect(instance).to.have.property('authentication');
        // expect(instance.authentication).to.be(expectedValueLiteral);
      });

      it('should have the property linkAuthentication (base name: "linkAuthentication")', function() {
        // TODO: update the code to test the property linkAuthentication
        expect(instance).to.have.property('linkAuthentication');
        // expect(instance.linkAuthentication).to.be(expectedValueLiteral);
      });

    });
  });

}));
