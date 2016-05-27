
function mailCtrl($scope){
	$scope.mails=mails;
};

function detailCtrl($scope,$routeParams){
	$scope.mail=mails[$routeParams.id]
}