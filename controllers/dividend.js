'use strict';

var express  = require('express');
var router = express.Router();
var Dividend = require('./../app/dividend');

/**
 *
 * This method is used for set race id in request as parameter
 * returns call back
 * @method  Bet Controller Class - router.param method
 * @param {int} raceId - represents race id
 * @param {Function} call function - represents Callback function
 * @returns {next}  - call back
 */
// raceId set in req as param
router.param('raceId', function(req, res, next, raceId) {
    req.raceId = raceId;
    next();
 
});

/**
 * This method handler show dividends request
 * @method Bet Controller Class - router.post method
 * @param {int} raceId - represents race id
 * @param {Function} call function - represents Callback function
 * @returns {next}  - call back
 */
// get route
router.get('/races/:raceId/dividends', function(req, res, next) {
	Dividend.calculate(req, function(err, resp){

	 	if(err){
			next(err);
		}else{
			return res.render('dividends', {
				raceId : req.raceId,
				dividends : resp
			});
		}
	});
});

module.exports = router;