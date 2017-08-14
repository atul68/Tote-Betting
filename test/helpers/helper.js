var chai = require("chai")
chai.should();
chai.use(require('chai-things'));
var expect = chai.expect;
var assert = chai.assert;
var helper = require('./../../helpers/helper');

var bets = [];
bets.push('{"product": "W", "selections": "1", "stake": "3"}');
bets.push('{"product": "W", "selections": "2", "stake": "3"}');
bets.push('{"product": "W", "selections": "3", "stake": "3"}');
bets.push('{"product": "W", "selections": "1", "stake": "3"}');

var matchCriteriaSelections = "1" ;
var matchCriteriaProduct = "W" ;
var poolAmout = 12 ;
var correctBetAmount = 6 ;  
var commission = 0.15;

describe("helper", function() {
    it("should be calcualte total amount", function(done) {
       var total = helper.calculateTotalAmount(bets);
       assert.equal(12, total);
       done();
    });
    it("should be filter bets based on match criteria - selections", function(done) {
       var filterdBets = helper.filterBetsBasedOnSelections(bets, matchCriteriaSelections);
       assert.equal(2, filterdBets.length);
       done();
    });
    it("should be filter bets based on match criteria - product", function(done) {
       var filterdBets = helper.filterBetsBasedOnProduct(bets, matchCriteriaProduct);
       assert.equal(4, filterdBets.length);
       done();
    });
    it("should be get proper divident", function(done) {
       var dividend = helper.getDividendAmount(poolAmout, correctBetAmount, commission);
       assert.equal(1.7, dividend);
       done();
    });
});