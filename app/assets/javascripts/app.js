angular.module('flapperNews', ['templates','ngRoute'])
.config(

function($routeProvider) {
  $routeProvider
    .when('/', {
        templateUrl: 'home/_home.html',
        controller: 'MainCtrl',
        controllerAs: 'ctrl',
        resolve: {
         postPromise: ['postsFactory', function(postsFactory){
            
            return postsFactory.getAll();
          }]
        }     
      })
    .when('/posts/:id', {
        templateUrl: 'posts/_posts.html',
        controller: 'PostsCtrl',
        controllerAs: 'ctrl',
        resolve: {
        post: ['$route', 'postsFactory', function($route, postsFactory) {
            return postsFactory.get($route.current.params.id);
          }]
        }
      })

     .otherwise({
        redirectTo: '/'
      });
})
