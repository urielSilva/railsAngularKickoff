angular.module('sap')
.controller('MainCtrl', ['Auth','$state',function(Auth, $state){
  var vm = this;

  
  if(!Auth.isAuthenticated()) {
  	$state.go('login');
  }
  
 

}])