angular.module('sap')

.controller('JobsController', JobsController);

JobsController.$inject = ['Jobs'];

function JobsController(Jobs) {
  var vm = this;

  vm.jobs = [];
  vm.delete = deleteRecord;

  activate();

  /////////////////////////////////////////////////////////

  function activate() {
    vm.jobs = Jobs.query();
  }

  function deleteRecord(record) {

    Jobs.remove({id: record.id}).$promise.then(function() {
      vm.jobs = Jobs.query();
      vm.jobs.$promise.then(function() {
    
      });
    
  })
}
}