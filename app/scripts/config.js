define(["app","blogCtrl"],
	function(app){
		return app.config(function($routeProvider){
			$routeProvider.when('', {
				templateUrl: 'templates/main.html',
				controller: 'mainCtrl'
			}).when('/blogs/:id/:title', {
				templateUrl: 'templates/main.html',
				controller: 'mainCtrl',
			}).when('/blog/:id', {
				templateUrl: 'templates/detail.html',
				controller: 'detailCtrl'
			}).otherwise({ redirectTo: '' });
		});
	});