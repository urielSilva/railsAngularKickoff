angular.module('sap')

.controller('AreasController', AreasController);

AreasController.$inject = ['Areas', '$state', '$stateParams'];

function AreasController(Areas, $state, $stateParams) {
  var vm = this;

  vm.areas = [];
  vm.delete = deleteRecord;
  vm.submitForm = submitForm;
  activate();
  vm.area = {};

  /////////////////////////////////////////////////////////
  function activate() {
    vm.areas = Areas.query({sector_id: $stateParams.sector_id});
  }


  function submitForm(area) {

      area.sector_id = $stateParams.sector_id
      console.log(area);
      Areas.save({sector_id: $stateParams.sector_id},{area: area}).$promise.then(function() {
        vm.area = {};
        vm.areas = Areas.query({sector_id: $stateParams.sector_id});
    })
  }

  function deleteRecord(record) {

    Areas.remove({id: record.id, sector_id: $stateParams.sector_id}).$promise.then(function() {
      vm.areas = Areas.query({sector_id: $stateParams.sector_id});
      vm.areas.$promise.then(function() {
    
      });
    
  })
}
}