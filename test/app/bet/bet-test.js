var chai = require("chai")
chai.should();
chai.use(require('chai-things'));
var expect = chai.expect;
var assert = chai.assert;
var Bet = require('./../../../app/bet');

var req = {
    "raceId": "1",
    "body": {
        "product": "W",
        "selections": "1",
        "stake": "3"
    }
};




describe("Bets", function() {
    it("should be saved", function(done) {
       Bet.save(req, function(err, resp){
            expect(resp.product).to.be.ok;
            done();
        })
    });
    it("should give multiple errors", function(done) {
       Bet.save({"body" : {"product":"","selections":"","stake":""}}, function(err, resp){
            expect(err).to.be.ok;
            assert.equal("Error: Bid Type is Required.", err[0]);
            assert.equal("Error: Horse No is Required.", err[1]);
            assert.equal("Error: Bid Amount is Required.", err[2]);
            done();
        })
    });
    it("should give error unique horse number required in case of exacta", function(done) {
        Bet.save({"body" : {"product":"E","selections":"1,1","stake":"100"}}, function(err, resp){
            expect(err).to.be.ok;
            assert.equal("Error: Exacta bets selected horses should be unique.", err[0]);
            done();
        })
    });

});