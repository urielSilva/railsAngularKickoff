angular.module('sap')

.factory('Areas', Areas);

Areas.$inject = ['$resource'];

function Areas($resource) {
  return $resource('sectors/:sector_id/areas/:id.json', {id: '@id'}, {
    'update': { method: 'PUT' },
  });

}