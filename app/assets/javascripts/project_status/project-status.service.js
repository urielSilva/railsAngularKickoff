angular.module('sap')

.factory('ProjectStatus', ProjectStatus);

ProjectStatus.$inject = ['$resource'];

function ProjectStatus($resource) {
  return $resource('/project_status/:id.json', {id: '@id'}, {
    'update': { method: 'PUT' }
  });

}