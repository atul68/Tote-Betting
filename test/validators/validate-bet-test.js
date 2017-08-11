var chai = require("chai")
chai.should();
chai.use(require('chai-things'));
var expect = chai.expect;
var assert = chai.assert;
var validator = require("./../../validators/validator");


describe("Bets Validation", function() {
    it("should give error - Bid Type is Required", function(done) {
       validator({"product":"","selections":"1","stake":"3"}, function(err, resp){
            expect(err).to.be.ok;
            assert.equal("Error: Bid Type is Required.", err[0]);
            done();
        })
    });
    it("should give error - Select Bid Type from W, P or E.", function(done) {
       validator({"product":"L","selections":"1","stake":"3"}, function(err, resp){
            expect(err).to.be.ok;
            assert.equal("Error: Select Bid Type from W, P or E.", err[0]);
            done();
        })
    });
    it("should give error - Horse No  is Required.", function(done) {
       validator({"product":"W","selections":"","stake":"3"}, function(err, resp){
            expect(err).to.be.ok;
            assert.equal("Error: Horse No is Required.", err[0]);
            done();
        })
    });
    it("should give error - Horse No  should be a number format.", function(done) {
       validator({"product":"W","selections":"1,2","stake":"3"}, function(err, resp){
            expect(err).to.be.ok;
            assert.equal("Error: Horse No should be a number format.", err[0]);
            done();
        })
    });
    it("should give error - Exacta bet Horse No should be <number>,<number> format.", function(done) {
       validator({"product":"E","selections":"1","stake":"30"}, function(err, resp){
            expect(err).to.be.ok;
            assert.equal("Error: Exacta bet Horse No should be <number>,<number> format.", err[0]);
            done();
        })
    });
    it("should give error - Bid Amount is Required.", function(done) {
       validator({"product":"W","selections":"1","stake":""}, function(err, resp){
            expect(err).to.be.ok;
            assert.equal("Error: Bid Amount is Required.", err[0]);
            done();
        })
    });
    it("should give error - Bid Amount should be a number.", function(done) {
      validator({"product":"W","selections":"1","stake":"1q"}, function(err, resp){
            expect(err).to.be.ok;
            assert.equal("Error: Bid amount should be a number.", err[0]);
            done();
        })
    });
    it("should give multiple errors", function(done) {
       validator({"product":"","selections":"","stake":""}, function(err, resp){
            expect(err).to.be.ok;
           assert.equal("Error: Bid Type is Required.", err[0]);
           assert.equal("Error: Horse No is Required.", err[1]);
           assert.equal("Error: Bid Amount is Required.", err[2]);
            done();
        })
    });
});