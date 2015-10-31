angular.module('sap')

.factory('Sectors', Sectors);

Sectors.$inject = ['$resource'];

function Sectors($resource) {
  return $resource('/sectors/:id.json', {id: '@id'}, {
    'update': { method: 'PUT' }
  });

}