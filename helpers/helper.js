'use strict';

var _ = require('lodash');

/**
 * Module contains bet related utilities methods.
 * @module Helpers/helper
 */
module.exports = {

	/**
	 *
	 * helper class calculateTotalAmount method
	 * This method is used for calculating total amount based on bet
	 * @method
	 * @param {String[]} bets - represents all bets on race
	 * @returns {Number} totalAmount - represents total amount
	 */
	calculateTotalAmount : function(bets){
		var totalAmount = 0 ;
		return bets.reduce(function(totalAmount, bet){
			return totalAmount + _.parseInt(JSON.parse(bet).stake);
		}, 0);
	},

	/**
	 *
	 * filterBetsBasedOnSelections method
	 * This method is used for filtering bets based on selections and match criteria
	 * @method
	 * @param {String[]} bets - represents all bets on race
	 * @param {String} matchCriteria - represents match criteria
	 * @returns {String[]} filterdBets - represents filtered bets list
	 */
	filterBetsBasedOnSelections : function(bets, matchCriteria){
		return bets.filter(function(bet){
			if(bet && matchCriteria){
				return matchCriteria === JSON.parse(bet).selections;
			}
		})
	},

	/**
	 *
	 * filterBetsBasedOnProduct method
	 * This method is used for filtering bets based on product and match criteria
	 * @method
	 * @param {String[]} bets - represents all bets on race
	 * @param {String} matchCriteria - represents match criteria
	 * @returns {String[]} filterdBets - represents filtered bets list
	 */
	filterBetsBasedOnProduct : function(bets, matchCriteria){
		return bets.filter(function(bet){
			if(bet && matchCriteria){
				return matchCriteria === JSON.parse(bet).product;
			}
		})
	},

	/**
	 * getDividendAmount method
	 * This method is used for calculating dividend amount based on 
	 * pool amount, winning bet stack amount and commision
	 * @method
	 * @param {String} poolAmount - represents total amount of bets
	 * @param {String} correctBetsAmount - represents total amount of correct bets
	 * @param {String} commission - represents commission of bet type
	 * @returns {Number} dividedAmount - represents dividend amount
	 */
	getDividendAmount : function (poolAmount, correctBetsAmount, commission){
		var afterCommissionAmount = _.multiply(poolAmount, (1 - commission));
		return correctBetsAmount ? _.round(_.divide(afterCommissionAmount, correctBetsAmount), 2) : 0;
	}
};