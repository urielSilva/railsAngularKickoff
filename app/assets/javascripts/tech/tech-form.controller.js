angular.module('sap')

.controller('TechFormController', TechFormController);

TechFormController.$inject = ['$scope', 'CurrentTech', 'Techs', '$state', '$http'];

function TechFormController($scope, CurrentTech, Techs, $state, $http) {
  var vm = this;

  vm.tech = {};
  vm.submitForm = submitForm;

  activate();

  /////////////////////////////////////////////////////////

  function activate() {
    vm.tech = CurrentTech;
  }

  function submitForm(tech) {
    

    if (tech.id) {
      Techs.update({id: tech.id}, {tech: tech}).$promise.then(function() {
        $state.go('technologies');
      });
    } else {
      Techs.save({tech: tech}).$promise.then(function() {
        $state.go('technologies');
      }, function(error) {
        
      });
    }
  }

}