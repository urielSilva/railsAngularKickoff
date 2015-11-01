angular.module('sap')

.factory('Projects', Projects);

Projects.$inject = ['$resource'];

function Projects($resource) {
  return $resource('/projects/:id.json', {id: '@id'}, {
    'update': { method: 'PUT' }
  });

}