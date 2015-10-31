angular.module('sap')

.controller('ActivityTypeFormController', ActivityTypeFormController);

ActivityTypeFormController.$inject = ['$scope', 'CurrentActivityType', 'ActivityTypes', '$state', '$http'];

function ActivityTypeFormController($scope, CurrentActivityType, ActivityTypes, $state, $http) {
  var vm = this;

  vm.activityType = {};
  vm.submitForm = submitForm;

  activate();

  /////////////////////////////////////////////////////////

  function activate() {
    vm.activityType = CurrentActivityType;
  }

  function submitForm(activityType) {
    

    if (activityType.id) {
      ActivityTypes.update({id: activityType.id}, {activityType: activityType}).$promise.then(function() {
        $state.go('activityTypes');
      });
    } else {
      ActivityTypes.save({activityType: activityType}).$promise.then(function() {
        $state.go('activityTypes');
      }, function(error) {
        
      });
    }
  }

}