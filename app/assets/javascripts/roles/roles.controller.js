angular.module('sap')

.controller('RolesController', RolesController);

RolesController.$inject = ['Roles'];

function RolesController(Roles) {
  var vm = this;

  vm.roles = [];
  vm.role = {};
  vm.delete = deleteRecord;
  vm.submitForm = submitForm;
  activate();

  /////////////////////////////////////////////////////////

  function activate() {
    vm.roles = Roles.query();
  }

  function submitForm(role) {
      Roles.save({role: role}).$promise.then(function() {
        vm.role  = {};
        vm.roles = Roles.query();
    })
  }

  function deleteRecord(record) {

    Roles.remove({id: record.id}).$promise.then(function() {
      vm.roles = Roles.query();
      vm.roles.$promise.then(function() {
    
      });
    
  })
}
}