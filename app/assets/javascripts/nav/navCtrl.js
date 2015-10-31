angular.module('sap')
.controller('NavCtrl', [
'$scope',
'Auth',
function($scope, Auth){
 	
  var self = this;

 	Auth.currentUser().then(function (user){
      $scope.user = user;
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

 	$scope.signedIn = Auth.isAuthenticated;
  $scope.logout = Auth.logout;

  $scope.links = [
    { url: "jobs", name: "Cargos" },
    { url: "roles", name: "Perfis"},
    { url: "sectors", name: "Núcleos"},
    { url: "knowledge_levels", name: "Níveis de Conhecimento"},
    ];

  $scope.status = {
    isopen: false
  };

  $scope.toggled = function(open) {
    
  };

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };

}]);

