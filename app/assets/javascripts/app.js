angular.module('sap', ['templates','ui.router','ngResource','Devise'])
.config(

['$stateProvider',
'$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'home/_home.html',
      controller: 'MainCtrl',
      controllerAs: 'ctrl',
      
    })
    .state('jobs', {
      url: '/jobs',
      controller: 'JobsController',
      controllerAs: 'vm',
      templateUrl: 'jobs/_jobs.html',
    })
    .state('job-add', {
      url: '/jobs/add',
      controller: 'JobFormController',
      controllerAs: 'vm',
      templateUrl: 'jobs/_job-form.html',
      resolve: {
        CurrentJob: function() {
          return {};
        }
      },
    })
    .state('job-edit', {
      url: '/job/edit/:id',
      controller: 'JobFormController',
      controllerAs: 'vm',
      templateUrl: 'jobs/_job-form.html',
      resolve: {
        CurrentJob: ['$stateParams', 'Jobs', function($stateParams, Jobs) {
          return Jobs.get($stateParams);
        }]
      },
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
