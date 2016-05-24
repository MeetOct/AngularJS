document.write('<script src="../Models/UserModel.js"><\/script>')
	var myapp = angular.module('myApp',[]);
	 myapp.controller('showItem',function($scope){
	 	user.id=1?user.name='first':user.name="sss";
	 	$scope.user=user;
	 	user.name='hha';
	 });