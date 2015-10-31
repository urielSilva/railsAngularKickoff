angular.module('sap')

.controller('TechsController', TechsController);

TechsController.$inject = ['Techs'];

function TechsController(Techs) {
  var vm = this;

  vm.techs = [];
  vm.delete = deleteRecord;
  vm.tech = {};
  vm.submitForm = submitForm;

  activate();


  /////////////////////////////////////////////////////////

  function activate() {
    vm.techs = Techs.query();
  }

  function submitForm(tech) {
      Techs.save({tech: tech}).$promise.then(function() {
        vm.tech  = {};
        vm.techs = Techs.query();
    })
  }


  function deleteRecord(record) {

    Techs.remove({id: record.id}).$promise.then(function() {
      vm.techs = Techs.query();
      vm.techs.$promise.then(function() {
    
      });
    
  })
}
}