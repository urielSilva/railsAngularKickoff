angular.module('flapperNews')
.controller('AuthCtrl', [
'$scope',
'$state',
'Auth',
function($scope, $state, Auth){
	this.login = function() {
    Auth.login(this.user).then(function(){
      $state.go('home');
    });
  };

  this.register = function() {
    
    Auth.register(this.user).then(function(){
      $state.go('home');
    });
  };
}]);