angular.module('flapperNews')
.controller('NavCtrl', [
'$scope',
'Auth',
function($scope, Auth){
 	
  var self = this;

 	Auth.currentUser().then(function (user){
      self.user = user;
	});	


	$scope.$on('devise:new-registration', function (e, user){
    self.user = user;
  });

  $scope.$on('devise:login', function (e, user){
    self.user = user;
  });

  $scope.$on('devise:logout', function (e, user){
    self.user = {};
  });

 	self.signedIn = Auth.isAuthenticated;
  self.logout = Auth.logout;
}]);