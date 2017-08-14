'use strict';

var config = require('./../../config/bidConfig');
var helper = require('./../../helpers/helper');

/**
 * ExactaDividend Class - getExactaDividend method
 * This method is used for getting exacta bet dividend amount.
 * @method
 * @param {String[]} exactaBets - represents all exacta type bets on race
 * @param {String} result - represents race result
 * @param {Function} callback - represents Callback function
 * @returns {String[]} exactaDividends - represents exacta dividend amount
 */
function getExactaDividend(exactaBets, result, next){
	try{
		var matchCriteria = [];	
		matchCriteria.push(result.first);
		matchCriteria.push(result.second);
	    var poolAmount = helper.calculateTotalAmount(exactaBets);
	    var correctsBets = filterBetsBasedOnSelections(exactaBets, matchCriteria);
	    var correctsBetsAmount = helper.calculateTotalAmount(correctsBets);
	    next(null, helper.getDividendAmount(poolAmount, correctsBetsAmount, config.commissions.exactaBet));
	}catch(err){
		next(err);
	}
}

/**
 *  ExactaDividend Class - filterBetsBasedOnSelections method
  * This method is used for filtering bets based on selections and match criteria
 * @method
 * @param {String[]} bets - represents all bets on race
 * @param {String[]} matchCriteria - represents match criteria list
 * @returns {String[]} filterdBets - represents filtered bets list
 */
function filterBetsBasedOnSelections(bets, matchCriteria){
	return bets.filter(function(bet){
		if(bet && matchCriteria){
			var selections = (JSON.parse(bet).selections).split(",");
			return matchCriteria[0] === selections[0] && matchCriteria[1] == selections[1];
		}
	})
}

module.exports = getExactaDividend;