angular.module('sap')

.controller('RoleFormController', RoleFormController);

RoleFormController.$inject = ['$scope', 'CurrentRole', 'Roles', '$state', '$http'];

function RoleFormController($scope, CurrentRole, Roles, $state, $http) {
  var vm = this;

  vm.role = {};
  vm.submitForm = submitForm;

  activate();

  /////////////////////////////////////////////////////////

  function activate() {
    vm.role = CurrentRole;
  }

  function submitForm(role) {
    

    if (role.id) {
      Roles.update({id: role.id}, {role: role}).$promise.then(function() {
        $state.go('roles');
      });
    } else {
      Roles.save({role: role}).$promise.then(function() {
        $state.go('roles');
      }, function(error) {
        
      });
    }
  }

}