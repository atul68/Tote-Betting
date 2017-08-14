/*******************************************************************************
 * @file dividend-test.js for divident.js controller file
 ******************************************************************************/

var chai = require('chai');
chai.use(require('chai-things'));
chai.should();
var assert = chai.assert;
var expect = chai.expect;
var app = require('./../../index');
var supertest = require('supertest');
var api = supertest('http://localhost:3000');


describe('dividend Controller', function () {
    it('should return 200 response status for GET dividend request', function (done) {
        api.get('/races/bet_123/dividends')
            .set('Content-Type', 'application/json')
            .expect(200)
            .end(function (err, res) {
                done();
            });
    });

});