angular.module('sap')

.controller('ActivityTypesController', ActivityTypesController);

ActivityTypesController.$inject = ['ActivityTypes'];

function ActivityTypesController(ActivityTypes) {
  var vm = this;

  vm.activityTypes = [];
  vm.delete = deleteRecord;

  activate();

  /////////////////////////////////////////////////////////

  function activate() {
    vm.activityTypes = ActivityTypes.query();
  }

  function deleteRecord(record) {

    ActivityTypes.remove({id: record.id}).$promise.then(function() {
      vm.activityTypes = ActivityTypes.query();
      vm.activityTypes.$promise.then(function() {
    
      });
    
  })
}
}