angular.module('sap')

.controller('ProjectStatusController', ProjectStatusController);

ProjectStatusController.$inject = ['ProjectStatus'];

function ProjectStatusController(ProjectStatus) {
  var vm = this;

  vm.projectStatusList = [];
  vm.delete = deleteRecord;
  vm.projectStatus = {}
  activate();
  vm.submitForm = submitForm;
  /////////////////////////////////////////////////////////

  function activate() {
    vm.projectStatusList = ProjectStatus.query();
  }

function submitForm(projectStatus) {
      console.log(projectStatus);
      ProjectStatus.save({projectStatus: projectStatus}).$promise.then(function() {
        vm.projectStatus = {};
        vm.projectStatusList = ProjectStatus.query();
    })
  }

  function deleteRecord(record) {

    ProjectStatus.remove({id: record.id}).$promise.then(function() {
      vm.projectStatusList = ProjectStatus.query();
      vm.projectStatusList.$promise.then(function() {
    
      });
    
  })
}
}