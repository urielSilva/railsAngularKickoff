angular.module('sap')

.controller('JobsController', JobsController);

JobsController.$inject = ['Jobs'];

function JobsController(Jobs) {
  var vm = this;

  vm.jobs = [];
  vm.delete = deleteRecord;
  vm.job = {}
  activate();
  vm.submitForm = submitForm;
  /////////////////////////////////////////////////////////

  function activate() {
    vm.jobs = Jobs.query();
  }

function submitForm(job) {
      Jobs.save({job: job}).$promise.then(function() {
        vm.job = {};
        vm.jobs = Jobs.query();
    })
  }

  function deleteRecord(record) {

    Jobs.remove({id: record.id}).$promise.then(function() {
      vm.jobs = Jobs.query();
      vm.jobs.$promise.then(function() {
    
      });
    
  })
}
}