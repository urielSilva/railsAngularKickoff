angular.module('sap')

.factory('Roles', Roles);

Roles.$inject = ['$resource'];

function Roles($resource) {
  return $resource('/roles/:id.json', {id: '@id'}, {
    'update': { method: 'PUT' }
  });

}