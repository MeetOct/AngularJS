var  app=angular.module('mail', [])

function mailRouteConfig($routeProvider){
	$routeProvider.when('', {
		templateUrl: 'mail.html',
		controller: 'mailCtrl'
	}).when('/:id', {
		templateUrl: 'detail.html',
		controller: 'detailCtrl'
	}).otherwise({ redirectTo: '/' });
}

app.config(mailRouteConfig);

mails=[{
	id:0,
	sender:'302821616@qq.com',
	subject:'welcome',
	date:'2015-5-7',
	detail:'welcome to angularjs!'
},{
	id:1,
	sender:'302821616@qq.com',
	subject:'welcome',
	date:'2015-5-7',
	detail:'welcome to angularjs2!'
}];

function mailCtrl($scope){
	$scope.mails=mails;
};

function detailCtrl($scope,$routeParams){
	$scope.mail=mails[$routeParams.id]
};