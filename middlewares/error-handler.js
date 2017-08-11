// middleware - error handler
module.exports = function(err, req, res, next) {
	console.log('err',err);
	if(!(err instanceof Array)){
		console.log('err1',err);
		// handle application error
		res.render('error', {
			raceId : req.raceId,
			errors : err
		});
	} else{
		// handle validation errors
		console.log('err2',err);
		var splitedRoute = req.route.path.split("/");
		var route = splitedRoute[splitedRoute.length - 1];
		res.render(route, {
			raceId : req.raceId,
			errors : err
		});
	}
};

