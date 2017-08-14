'use strict';

var express  = require('express');
var router = express.Router();
var Result = require('./../app/result');
var validator = require("./../validators/validator");
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
    next()
 
});

/**
 * This method handle get/show result request
 * @method result Controller Class - router.get method
 * @param {int} raceId - represents race id
 * @param {Function} call function - represents Callback function
 * @returns {next}  - call back
 */
// get route
router.get('/races/:raceId/results', function(req, res, next) {
  res.render('results', {
		raceId : req.raceId
	});
});

/**
 * This method handle post/save result request
 * @method result Controller Class - router.post method
 * @param {int} raceId - represents race id
 * @param {Function} call function - represents Callback function
 * @returns {next}  - call back
 */
//post route
router.post('/races/:raceId/results', function(req, res, next) {
	validator.validateResult(req, function(err,response ){
		if(err){
			next(err);
		}
		else {
			Result.save(req, function (err, resp) {
				if (err) {
					next(err);
				} else {
					return res.render('showdividends', {
						raceId: req.raceId
					});
				}
			});
		}
	});


});

module.exports = router;