angular.module('sap')

.controller('SectorsController', SectorsController);

SectorsController.$inject = ['Sectors'];

function SectorsController(Sectors) {
  var vm = this;

  vm.sectors = [];
  vm.delete = deleteRecord;

  activate();

  /////////////////////////////////////////////////////////

  function activate() {
    vm.sectors = Sectors.query();
  }

  function deleteRecord(record) {

    Sectors.remove({id: record.id}).$promise.then(function() {
      vm.sectors = Sectors.query();
      vm.sectors.$promise.then(function() {
    
      });
    
  })
}
}