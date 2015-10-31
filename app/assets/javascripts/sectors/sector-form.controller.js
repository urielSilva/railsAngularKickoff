angular.module('sap')

.controller('SectorFormController', SectorFormController);

SectorFormController.$inject = ['$scope', 'CurrentSector', 'Sectors', '$state', '$http'];

function SectorFormController($scope, CurrentSector, Sectors, $state, $http) {
  var vm = this;


  
  vm.submitForm = submitForm;
  vm.areas = [];  
  vm.area = {};
  activate();

  vm.addArea = addArea;
  vm.deleteArea = deleteArea;
  /////////////////////////////////////////////////////////

  function addArea() {
    vm.sector.areas_attributes.push(vm.area);
    vm.area = {};
  }

  function deleteArea(area) {
    angular.forEach(vm.sector.areas_attributes, function(key, value) {
      if (value.id == area.id) {
        vm.sector.areas_attributes.splice(value,1)
      }
    })
    
   
  }

  function activate() {
    vm.sector = CurrentSector;
  }

  function submitForm(sector) {
    if (sector.id) {
      console.log(sector.areas_attributes);
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