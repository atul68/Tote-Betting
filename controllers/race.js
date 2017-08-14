'use strict';

var express  = require('express');
var router = express.Router();
var Race = require('./../app/race');

/**
 *
 * This method is used for set race id in request as parameter
 * returns call back
 * @method  race Controller Class - router.param method
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
 * This method handle get home page request
 * @method race Controller Class - router.get method
 * @param {String} URL - represents request url
 * @param {Function} call function - represents Callback function
 * @returns {next}  - call back
 */
//get route
router.get('/', function(req, res, next){
	return res.render('home', {
		title : 'Home'
	});
});

/**
 * This method handle start race request
 * @method race Controller Class - router.get method
 * @param {String} URL - represents request url
 * @param {Function} call function - represents Callback function
 * @returns {next}  - call back
 */
//get race route
router.get('/races', function(req, res, next) {
	Race.start(req.body, function(err, resp){
		if(err){
			next(err);
		}else{
			return res.render('races', {
				raceId : resp.raceId
			});
		}	
	})
});

/**
 * This method handler start race request coming from result page
 * @method race Controller Class - router.get method
 * @param {String} URL - represents request url
 * @param {Function} call function - represents Callback function
 * @returns {next}  - call back
 */
//get route
router.get('/races/:raceId', function(req, res, next) {
 	return res.render('races', {
		raceId : req.raceId
	});
});

module.exports = router;