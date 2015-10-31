angular.module('sap')

.factory('Techs', Techs);

Techs.$inject = ['$resource'];

function Techs($resource) {
  return $resource('/technologies/:id.json', {id: '@id'}, {
    'update': { method: 'PUT' }
  });

}