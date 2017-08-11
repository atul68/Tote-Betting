'use strict';

var express  = require('express');
var router = express.Router();
var Result = require('./../app/result');

// raceId set in req as param
router.param('raceId', function(req, res, next, raceId) {
    req.raceId = raceId;
    next()
 
});

// get route
router.get('/races/:raceId/results', function(req, res, next) {
  res.render('results', {
		raceId : req.raceId
	});
});

//post route
router.post('/races/:raceId/results', function(req, res, next) {

	req.checkBody('first', 'First Ranker is Required ').notEmpty();
	req.checkBody('second', 'Second Ranker is Required').notEmpty();
	req.checkBody('third', 'Third Ranker is Required').notEmpty();
	req.checkBody('second', 'Second Ranker should be a number. ').isInt();
	req.checkBody('third', 'Third Ranker should be a number. ').isInt();
	var errors = req.validationErrors();

	if(errors.length > 0){
		return next(errors);
	}else {
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

module.exports = router;