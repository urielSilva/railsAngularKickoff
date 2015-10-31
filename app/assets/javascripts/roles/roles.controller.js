angular.module('sap')

.controller('RolesController', RolesController);

RolesController.$inject = ['Roles'];

function RolesController(Roles) {
  var vm = this;

  vm.roles = [];
  vm.delete = deleteRecord;

  activate();

  /////////////////////////////////////////////////////////

  function activate() {
    vm.roles = Roles.query();
  }

  function deleteRecord(record) {

    Roles.remove({id: record.id}).$promise.then(function() {
      vm.roles = Roles.query();
      vm.roles.$promise.then(function() {
    
      });
    
  })
}
}