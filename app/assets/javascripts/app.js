angular.module('flapperNews', ['templates','ui.router','Devise'])
.config(

['$stateProvider',
'$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'home/_home.html',
      controller: 'MainCtrl',
      controllerAs: 'ctrl',
      resolve: {
        postPromise: ['postsFactory', function(postsFactory){
          return postsFactory.getAll();
       }]
    }
    })
    .state('posts', {
      url: '/posts/{id}',
      templateUrl: 'posts/_posts.html',
      controller: 'PostsCtrl',
      controllerAs: 'ctrl',
      resolve: {
        post: ['$stateParams', 'postsFactory', function($stateParams, postsFactory) {
          return postsFactory.get($stateParams.id);
        }]
}
    })
    .state('login', {
      url: '/login',
      templateUrl: 'auth/_login.html',
      controller: 'AuthCtrl',
      controllerAs: 'ctrl',
      onEnter: ['$state', 'Auth', function($state, Auth) {
        Auth.currentUser().then(function (){
          
          $state.go('home');
        })
      }]
    })
    .state('register', {
      url: '/register',
      templateUrl: 'auth/_register.html',
      controller: 'AuthCtrl',
      controllerAs: 'ctrl',
      onEnter: ['$state', 'Auth', function($state, Auth) {
        Auth.currentUser().then(function (){
          
          $state.go('home');
        })
      }]
    });
    
    $urlRouterProvider.otherwise('home');
}])
