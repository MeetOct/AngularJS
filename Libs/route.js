define(["myApp","mainController"],
	function(myApp){
		return myApp.config(function($routeProvider){
				$routeProvider.when('', {
					templateUrl: 'mail.html',
					controller: 'mailCtrl'
				}).when('/:id', {
					templateUrl: 'detail.html',
					controller: 'detailCtrl'
				}).otherwise({ redirectTo: '' });
			});
		});