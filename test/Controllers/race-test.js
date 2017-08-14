/*******************************************************************************
 * @file race-test.js for  race.js controller file
 ******************************************************************************/
var chai = require('chai');
chai.use(require('chai-things'));
chai.should();
var assert = chai.assert;
var expect = chai.expect;
var app = require('./../../index');
var supertest = require('supertest');
var api = supertest('http://localhost:3000');



describe('Race Controller', function () {
    it('should return 200 response status for GET Home Page request', function (done) {
        api.get('/')
            .set('Content-Type', 'application/json')
            .expect(200)
            .end(function (err, res) {
                done();
            });
    });

    it('should return 200 response status for GET Start race request', function (done) {
        api.get('/races')
            .set('Content-Type', 'application/json')
            .expect(200)
            .end(function (err, res) {
                done();
            });
    });
    it('should return 200 response status for GET Start bet with  request', function (done) {
        api.get('/races')
            .set('Content-Type', 'application/json')
            .expect(200)
            .end(function (err, res) {
                done();
            });
    });
});