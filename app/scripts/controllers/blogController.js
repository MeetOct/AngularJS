function mainCtrl($scope,$routeParams){
	$scope.blogs=[{id:0,title:"Test",content:"testtest"},{id:1,title:"Test1",content:"testtest2"}];
	if($routeParams.id!=undefined){
		var blogs=[];
		for (var i in $scope.blogs) {
			if ($scope.blogs[i].id==$routeParams.id) {
				blogs.push($scope.blogs[i]);
			}
		};
		$scope.blogs=blogs;
	}
};

function detailCtrl($scope,$routeParams){
	$scope.blog={id:$routeParams.id,title:"Test",content:$routeParams.id+"testtest"};
};

function linkCtrl($scope){
	$scope.links=[{id:0,title:"Test",content:"testtest"},{id:1,title:"Test2",content:"testtest2"}];
	$scope.welcome="welcome to my blog!";
};