var ctrlindex = require('../controller/index');
var ctrlshop = require('../controller/shop');
var ctrlinst = require('../controller/inst');
var ctrlcomu = require('../controller/comu');

module.exports = function(router){
	// router.all('/shop', function(req, res, next){
	// 	var data = ctrlshop.index();
	// 	res.render('index', data);
	// });

	// router.all('/inst', function(req, res, next){
	// 	var data = ctrlinst.index();
	// 	res.render('index', data);
	// });

	// router.all('/comu', function(req, res, next){
	// 	var data = ctrlcomu.index();
	// 	res.render('index', data);
	// });

	router.all('*', function(req, res, next){
		var data = ctrlindex.index();
		res.render('index', data);
	});
};

