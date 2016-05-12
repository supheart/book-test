var main_app = angular.module('main_app', ['ui.router']);
//console.log(main_app);

main_app.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', '$locationProvider', 
	function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider){
		// console.log($stateProvider);
		// console.log($urlRouterProvider);
		// console.log($httpProvider);
		// console.log($locationProvider);
		console.log($httpProvider.defaults);
		$stateProvider.state('index', {
			url: '/index',
			templateUrl: '/template/body/index.html'
		}).state('cate', {
			url: '/cate',
			templateUrl: '/template/body/cate.html',
		}).state('inst', {
			url: '/inst',
			template: '<div><h2>inst content</h2></div>',
		}).state('comu', {
			url: '/comu',
			template: '<div><h2>comu content</h2></div>',
		});

		$urlRouterProvider.otherwise('index');
		$locationProvider.html5Mode(true);
	}]);