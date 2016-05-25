// document.write('<script src="../Models/UserModel.js"><\/script>')
// document.write('<script src="../Service/provider.js"><\/script>')
// document.write('<script src="../Service/service.js"><\/script>')
// document.write('<script src="../Service/factory.js"><\/script>')
define(['myApp','userModel','service'], function(myApp) {

	myApp.service('testService', change);

	myApp.controller('showItem',function($scope,testService){
		user.id=1?user.name='first':user.name="stranger";
		$scope.user=user;
		user.name=testService.test(user.name);
	});
});