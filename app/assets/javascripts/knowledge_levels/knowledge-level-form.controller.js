angular.module('sap')

.controller('KnowledgeLevelFormController', KnowledgeLevelFormController);

KnowledgeLevelFormController.$inject = ['$scope', 'CurrentKnowledgeLevel', 'KnowledgeLevels', '$state', '$http'];

function KnowledgeLevelFormController($scope, CurrentKnowledgeLevel, KnowledgeLevels, $state, $http) {
  var vm = this;

  vm.knowledgeLevel = {};
  vm.submitForm = submitForm;

  activate();

  /////////////////////////////////////////////////////////

  function activate() {
    vm.knowledgeLevel = CurrentKnowledgeLevel;
  }

  function submitForm(knowledgeLevel) {
    

    if (knowledgeLevel.id) {
      KnowledgeLevels.update({id: knowledgeLevel.id}, {knowledgeLevel: knowledgeLevel}).$promise.then(function() {
        $state.go('knowledgeLevels');
      });
    } 
  }

}