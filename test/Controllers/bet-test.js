/*******************************************************************************
 * @file bet-test.js for bet.js controller file
 ******************************************************************************/

var chai = require('chai');
chai.use(require('chai-things'));
chai.should();
var assert = chai.assert;
var expect = chai.expect;
var app = require('./../../index');
var supertest = require('supertest');
var api = supertest('http://localhost:3000');

var validWinBidType= {
    "product": "W",
    "selections": "1",
    "stake": "3"
};

var validPlaceBidType= {
    "product": "P",
    "selections": "1",
    "stake": "3"
};


var validExactaBidType= {
    "product": "E",
    "selections": "1,2",
    "stake": "3"
};

//required field validation error
var invalidInput= {
    "product": "",
    "selections": "1",
    "stake": "3"
};

var invalidBidType= {
    "product": "D",
    "selections": "1",
    "stake": "3"
};


var invalidHorseSelection= {
    "product": "W",
    "selections": "D",
    "stake": "3"
};

var invalidBidAmount= {
    "product": "W",
    "selections": "1",
    "stake": "F"
};


var invalidExacta ={
    "product": "E",
    "selections": "1",
    "stake": "1"
};

describe('bet Controller', function () {
    it('should return 200 response status for GET Bets request', function (done) {
        api.get('/races/bet_123/bets')
            .set('Content-Type', 'application/json')
            .expect(200)
            .end(function (err, res) {
                done();
            });
    });


    it('should return 400 validation error in case of required field missing', function (done) {
        api.post('/races/bet_123/bets')
            .send(invalidInput)
            .set('Content-Type', 'application/json')
            .expect(400)
            .end(function (err, res) {
                done();
            });
    });
    it('should return 400 validation error in case of invalid bidType', function (done) {
        api.post('/races/bet_123/bets')
            .send(invalidBidType)
            .set('Content-Type', 'application/json')
            .expect(400)
            .end(function (err, res) {
                done();
            });
    });
    it('should return 400 validation error in case of invalid horse selected', function (done) {
        api.post('/races/bet_123/bets')
            .send(invalidHorseSelection)
            .set('Content-Type', 'application/json')
            .expect(400)
            .end(function (err, res) {
                done();
            });
    });
    it('should return 400 validation error in case of invalid bid amount', function (done) {
        api.post('/races/bet_123/bets')
            .send(invalidBidAmount)
            .set('Content-Type', 'application/json')
            .expect(400)
            .end(function (err, res) {
                done();
            });
    });

    it('should return 400 validation error in case of invalid Exacta bid input', function (done) {
        api.post('/races/bet_123/bets')
            .set('Content-Type', 'application/json')
            .expect(400)
            .send(invalidExacta)
            .end(function (err, res) {
                done();
            });
    });

    it('should return 200 response status for Win type Bid', function (done) {
        api.post('/races/bet_123/bets')
            .set('Content-Type', 'application/json')
            .expect(200)
            .send(validWinBidType)
            .end(function (err, res) {
                done();
            });
    });

    it('should return 200 response status for Place type Bid', function (done) {
        api.post('/races/bet_123/bets')
            .set('Content-Type', 'application/json')
            .expect(200)
            .send(validPlaceBidType)
            .end(function (err, res) {
                done();
            });
    });

    it('should return 200 response status for Exacta type Bid', function (done) {
        api.post('/races/bet_123/bets')
            .set('Content-Type', 'application/json')
            .expect(200)
            .send(validExactaBidType)
            .end(function (err, res) {
                done();
            });
    });
});