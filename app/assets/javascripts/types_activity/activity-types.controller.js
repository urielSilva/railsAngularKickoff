angular.module('sap')

.controller('ActivityTypesController', ActivityTypesController);

ActivityTypesController.$inject = ['ActivityTypes'];

function ActivityTypesController(ActivityTypes) {
  var vm = this;

  vm.activityTypes = [];
  vm.delete = deleteRecord;
  vm.activityType = {};
  vm.submitForm = submitForm;

  activate();


  /////////////////////////////////////////////////////////

  function activate() {
    vm.activityTypes = ActivityTypes.query();
  }

  function submitForm(activityType) {
      ActivityTypes.save({activityType: activityType}).$promise.then(function() {
        vm.activityType  = {};
        vm.activityTypes = ActivityTypes.query();
    })
  }

  function deleteRecord(record) {

    ActivityTypes.remove({id: record.id}).$promise.then(function() {
      vm.activityTypes = ActivityTypes.query();
      vm.activityTypes.$promise.then(function() {
    
      });
    
  })
}
}