angular.module('flapperNews')
.controller('NavCtrl', [
'$scope',
'Auth',
function($scope, Auth){
 	
 	Auth.currentUser().then(function (user){
    	this.user = user;
	});	

	$scope.$on('devise:new-registration', function (e, user){
    $scope.user = user;
  });

  $scope.$on('devise:login', function (e, user){
    $scope.user = user;
  });

  $scope.$on('devise:logout', function (e, user){
    $scope.user = {};
  });

 	this.signedIn = Auth.isAuthenticated;
  	this.logout = Auth.logout;
}]);