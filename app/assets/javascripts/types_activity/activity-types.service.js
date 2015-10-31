angular.module('sap')

.factory('ActivityTypes', ActivityTypes);

ActivityTypes.$inject = ['$resource'];

function ActivityTypes($resource) {
  return $resource('/activity_types/:id.json', {id: '@id'}, {
    'update': { method: 'PUT' }
  });

}