// middleware - error handler
module.exports = function(err, req, res, next) {

	if(!(err instanceof Array)){
		// handle application error
		res.status(500); // application error
		res.render('error', {
			raceId : req.raceId,
			errors : err
		});
	} else{
		// handle validation errors
		var splitedRoute = req.route.path.split("/");
		res.status(400); //validation errors
		var route = splitedRoute[splitedRoute.length - 1];
		res.render(route, {
			raceId : req.raceId,
			errors : err
		});
	}
};

