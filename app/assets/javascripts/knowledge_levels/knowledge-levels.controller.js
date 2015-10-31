angular.module('sap')

.controller('KnowledgeLevelsController', KnowledgeLevelsController);

KnowledgeLevelsController.$inject = ['KnowledgeLevels'];

function KnowledgeLevelsController(KnowledgeLevels) {
  var vm = this;

  vm.knowledgeLevels = [];
  vm.delete = deleteRecord;

  activate();

  /////////////////////////////////////////////////////////

  function activate() {
    vm.knowledgeLevels = KnowledgeLevels.query();
  }

  function deleteRecord(record) {

    KnowledgeLevels.remove({id: record.id}).$promise.then(function() {
      vm.knowledgeLevels = KnowledgeLevels.query();
      vm.knowledgeLevels.$promise.then(function() {
    
      });
    
  })
}
}