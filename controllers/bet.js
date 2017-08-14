'use strict';

var express  = require('express');
var router = express.Router();
var Bet = require('./../app/bet');


/**
 *
 * This method is used for set race id in request as parameter
 * returns call back
 * @method  Bet Controller Class - router.param method
 * @param {int} raceId - represents race id
 * @param {Function} call function - represents Callback function
 * @returns {next}  - call back
 */
router.param('raceId', function(req, res, next, raceId) {
	req.raceId = raceId;
    next();
 
});

/**
 * This method handle get/show bet request
 * @method Bet Controller Class - router.get method
 * @param {int} raceId - represents race id
 * @param {Function} call function - represents Callback function
 * @returns {next}  - call back
 */
// get route
router.get('/races/:raceId/bets', function(req, res, next) {
  res.render('bets', {
		raceId : req.raceId
	});
});

/**
 * This method handle post/save race request
 * @method Bet Controller Class - router.post method
 * @param {int} raceId - represents race id
 * @param {Function} call function - represents Callback function
 * @returns {next}  - call back
 */
// post route
router.post('/races/:raceId/bets', function(req, res, next) {

	Bet.save(req, function(err, resp){
		if(err){
			next(err);
		} else {
			return res.render('bets', {
				raceId : req.raceId,
				successMessage:"your bet submitted successfully"
			});
		}
	});

});

module.exports = router;