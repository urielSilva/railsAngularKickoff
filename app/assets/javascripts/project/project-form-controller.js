angular.module('sap')

.controller('ProjectFormController', ProjectFormController);

ProjectFormController.$inject = ['$scope', 'CurrentProject', 'Projects', 'ProjectStatus','$state', '$http'];

function ProjectFormController($scope, CurrentProject, Projects, ProjectStatus, $state, $http) {
  var vm = this;


  
  vm.submitForm = submitForm;
  vm.project = {};

  activate();

  /////////////////////////////////////////////////////////


  function activate() {
    vm.project = CurrentProject;
    vm.statusList = ProjectStatus.query();
  }

  function submitForm(project) {
    
    if (project.id) {
      Projects.update({id: project.id}, {project: project}).$promise.then(function() {
        $state.go('projects');
      });
    } else {
      Projects.save({project: project}).$promise.then(function() {
        $state.go('projects');
      }, function(error) {
        
      });
    }
  }

}