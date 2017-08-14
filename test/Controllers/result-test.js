/*******************************************************************************
 * @file result-test.js for  result.js controller file
 ******************************************************************************/
var chai = require('chai');
chai.use(require('chai-things'));
chai.should();
var assert = chai.assert;
var expect = chai.expect;
var app = require('./../../index');
var supertest = require('supertest');
var api = supertest('http://localhost:3000');

var validInput= {
    "first": "1",
    "second": "2",
    "third": "3"
};

var invalidInputMissingReqField= {
    "first": "",
    "second": "2",
    "third": "3"
};

var invalidInput= {
    "first": "D",
    "second": "2",
    "third": "3"
};

var invalidInputSameHorseSelected= {
    "first": "1",
    "second": "1",
    "third": "3"
};

describe('Result Controller', function () {
    it('should return 200 response status for GET result page request', function (done) {
        api.get('/races/bet_123/results')
            .set('Content-Type', 'application/json')
            .expect(200)
            .end(function (err, res) {
                done();
            });
    });


    it('should return 400 validation error in case of required field missing', function (done) {
        api.post('/races/bet_123/results')
            .send(invalidInputMissingReqField)
            .set('Content-Type', 'application/json')
            .expect(400)
            .end(function (err, res) {
                done();
            });
    });
    it('should return 400 validation error in case of invalid input', function (done) {
        api.post('/races/bet_123/results')
            .send(invalidInputSameHorseSelected)
            .set('Content-Type', 'application/json')
            .expect(400)
            .end(function (err, res) {
                done();
            });
    });


    it('should return 200 response status for valid input', function (done) {
        api.post('/races/bet_123/results')
            .set('Content-Type', 'application/json')
            .expect(200)
            .send(validInput)
            .end(function (err, res) {
                done();
            });
    });
});