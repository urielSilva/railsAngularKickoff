angular.module('sap')

.factory('KnowledgeLevels', KnowledgeLevels);

KnowledgeLevels.$inject = ['$resource'];

function KnowledgeLevels($resource) {
  return $resource('/knowledge_levels/:id.json', {id: '@id'}, {
    'update': { method: 'PUT' }
  });

}