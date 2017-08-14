'use strict';

var fs = require('fs');
var path = require('path');
var _ = require('lodash');
var config = require('./../../config/bidConfig');
var helper = require('./../../helpers/helper');
var wDividend = require('./win-dividend');
var eDividend = require('./exacta-dividend');
var pDividend = require('./place-dividend');
var Promise = require('bluebird');

/**
 * Represents a dividend Class
 * @constructor
 * @param {String} product - represents product types(allowed are W, P or E)
 * @param {String} winningSelections - represents winning horse no based on bet type
 * @param {String} dividend - represents dividend amount based on bet type
 */
function Dividend(product, winningSelections, dividend){
	this.product = product,
	this.winningSelections = winningSelections,
	this.amount = dividend
}

/**
 * dividend Class - calculate method
 * This method is used for calculating dividend amounts for all bet types.
 * If dividend calculated successfully returns Dividend object and call next(), 
 * otherwise return errors in next(err)
 * @method
 * @param {Object} req - represents json object with childs raceId and body
 * @param {Function} next - represents Callback function
 * @returns {Dividend} dividends - represents dividends list based on bet types
 */
Dividend.calculate = function(req, next){
	try{
		var raceId = req.raceId;
		var betsFile =config.db.betsFolderURL +raceId+config.db.extn;
		// Read bets details from file.
		var betsData = fs.readFileSync(path.join(betsFile),'utf8');
		var bets =  betsData.split("\n");

		var resultsFile = config.db.resultsFolderURL+raceId+config.db.extn;
		// Read result details from file.
		var resultData= fs.readFileSync(path.join(resultsFile),'utf8');
		resultData = JSON.parse(resultData);

		// Created Promises for getting different dividends
		var dividentPromises = [];  
		dividentPromises.push(getWinDivident(bets, resultData));
		dividentPromises.push(getPlaceDivident(bets, resultData));
		dividentPromises.push(getExactaDivident(bets, resultData));

		Promise.all(dividentPromises)
		.then(function(dividends){
			next(null, dividends);
		})
	}catch(err){
		console.log(err.errno==-4058 );
		console.log(err.path.indexOf("bets_")>0  );
		if(err.errno==-4058 && err.path.indexOf("bets_")>0 ){
			var noBetfounderror=[];
			noBetfounderror.push(new Error('No bet found for give race'));
			next(noBetfounderror);
		}else {
			console.log("err", err);
			next(err);
		}
	}
};

/**
 * getWinDivident method
 * This method is used for getting win bet dividends. It will filter all win bets
 * and calls getWinDividend function of win-divident.js
 * @method
 * @param {String[]} bets - represents all bets on race
 * @param {String} resultData - represents race result
 * @returns {Dividend[]} winDividends - represents win dividends
 */
function getWinDivident(bets, resultData){
	var winbets = helper.filterBetsBasedOnProduct(bets,config.win);
	return Promise.promisify(wDividend)(winbets, resultData)
			.then(function(winDividendAmount){
				var winDividends = [];
				winDividends.push(new Dividend("Win", resultData.first, winDividendAmount));
				return winDividends;
			});
}

/**
 * getPlaceDivident method
 * This method is used for getting place bet dividends. It will filter all place bets
 * and calls getPalceDividend function of place-divident.js
 * @method
 * @param {String[]} bets - represents all bets on race
 * @param {String} resultData - represents race result
 * @returns {Dividend[]} placeDividends - represents place dividends
 */
function getPlaceDivident(bets, resultData){
	var placebets = helper.filterBetsBasedOnProduct(bets, config.place);
	return Promise.promisify(pDividend)(placebets, resultData)
			.then(function(placeDividendAmountArray){
				var placeDividends = [];
				placeDividends.push(new Dividend("Place", resultData.first, placeDividendAmountArray.first));
				placeDividends.push(new Dividend("Place", resultData.second, placeDividendAmountArray.second));
				placeDividends.push(new Dividend("Place", resultData.third, placeDividendAmountArray.third));
				return placeDividends
			});
}

/**
 * getExactaDivident method
 * This method is used for getting place exacta dividends. It will filter all exacta bets
 * and calls getExactaDivident function of exacta-divident.js
 * @method
 * @param {String[]} bets - represents all bets on race
 * @param {String} resultData - represents race result
 * @returns {Dividend[]} exactaDividents - represents exacta dividends
 */
function getExactaDivident(bets, resultData){
	var exactabets = helper.filterBetsBasedOnProduct(bets, config.exacta);
	return Promise.promisify(eDividend)(exactabets, resultData)
			.then(function(exactaDividendAmount){
				var exactaDividents = [];
				exactaDividents.push(new Dividend("Exacta", resultData.first+","+resultData.second, exactaDividendAmount));
				return exactaDividents;
			});
}


module.exports = Dividend;