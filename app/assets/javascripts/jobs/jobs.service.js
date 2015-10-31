angular.module('sap')

.factory('Jobs', Jobs);

Jobs.$inject = ['$resource'];

function Jobs($resource) {
  return $resource('/jobs/:id.json', {id: '@id'}, {
    'update': { method: 'PUT' }
  });

}