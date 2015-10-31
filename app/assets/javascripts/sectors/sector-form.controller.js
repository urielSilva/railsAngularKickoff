angular.module('sap')

.controller('SectorFormController', SectorFormController);

SectorFormController.$inject = ['$scope', 'CurrentSector', 'Sectors', '$state', '$http'];

function SectorFormController($scope, CurrentSector, Sectors, $state, $http) {
  var vm = this;

  vm.sector = {};
  vm.submitForm = submitForm;

  activate();

  /////////////////////////////////////////////////////////

  function activate() {
    vm.sector = CurrentSector;
  }

  function submitForm(sector) {
    

    if (sector.id) {
      Sectors.update({id: sector.id}, {sector: sector}).$promise.then(function() {
        $state.go('sectors');
      });
    } else {
      Sectors.save({sector: sector}).$promise.then(function() {
        $state.go('sectors');
      }, function(error) {
        
      });
    }
  }

}