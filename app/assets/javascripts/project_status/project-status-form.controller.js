angular.module('sap')

.controller('ProjectStatusFormController', ProjectStatusFormController);

ProjectStatusFormController.$inject = ['$scope', 'CurrentProjectStatus', 'ProjectStatus', '$state', '$http'];

function ProjectStatusFormController($scope, CurrentProjectStatus, ProjectStatus, $state, $http) {
  var vm = this;

  vm.projectStatus = {};
  vm.submitForm = submitForm;

  activate();

  /////////////////////////////////////////////////////////

  function activate() {
    vm.projectStatus = CurrentProjectStatus;
    console.log(vm.projectStatus);
  }

  function submitForm(projectStatus) {
    

    if (projectStatus.id) {
      ProjectStatus.update({id: projectStatus.id}, {projectStatus: projectStatus}).$promise.then(function() {
        $state.go('projectStatus');
      });
    } 
  }
}