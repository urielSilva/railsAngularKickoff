angular.module('sap')

.controller('ProjectsController', ProjectsController);

ProjectsController.$inject = ['Projects'];

function ProjectsController(Projects) {
  var vm = this;

  vm.projects = [];
  vm.delete = deleteRecord;
  vm.project = {}
  activate();
  /////////////////////////////////////////////////////////

  function activate() {
    vm.projects = Projects.query();
  }

  function deleteRecord(record) {

    Projects.remove({id: record.id}).$promise.then(function() {
      vm.projects = Projects.query();
      vm.projects.$promise.then(function() {
    
      });
    
  })
}
}