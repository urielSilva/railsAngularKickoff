angular.module('sap', ['templates','ui.router','ui.bootstrap','ngResource','Devise'])
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
    .state('roles', {
      url: '/roles',
      controller: 'RolesController',
      controllerAs: 'vm',
      templateUrl: 'roles/_roles.html',
    })
    .state('role-add', {
      url: '/roles/add',
      controller: 'RoleFormController',
      controllerAs: 'vm',
      templateUrl: 'roles/_role-form.html',
      resolve: {
        CurrentRole: function() {
          return {};
        }
      },
    })
    .state('role-edit', {
      url: '/role/edit/:id',
      controller: 'RoleFormController',
      controllerAs: 'vm',
      templateUrl: 'roles/_role-form.html',
      resolve: {
        CurrentRole: ['$stateParams', 'Roles', function($stateParams, Roles) {
          return Roles.get($stateParams);
        }]
      },
    })
    .state('sectors', {
      url: '/sectors',
      controller: 'SectorsController',
      controllerAs: 'vm',
      templateUrl: 'sectors/_sectors.html',
    })
    .state('sector-add', {
      url: '/sectors/add',
      controller: 'SectorFormController',
      controllerAs: 'vm',
      templateUrl: 'sectors/_sector-form.html',
      resolve: {
        CurrentSector: function() {
          return {};
        }
      },
    })
    .state('knowledgeLevels', {
      url: '/knowledge_levels',
      controller: 'KnowledgeLevelsController',
      controllerAs: 'vm',
      templateUrl: 'knowledge_levels/_knowledge-levels.html',
    })
    .state('knowledgeLevel-add', {
      url: '/knowledge_levels/add',
      controller: 'KnowledgeLevelFormController',
      controllerAs: 'vm',
      templateUrl: 'knowledge_levels/_knowledge-level-form.html',
      resolve: {
        CurrentKnowledgeLevel: function() {
          return {};
        }
      },
    })
    .state('knowledgeLevel-edit', {
      url: '/knowledge_levels/edit/:id',
      controller: 'KnowledgeLevelFormController',
      controllerAs: 'vm',
      templateUrl: 'knowledge_levels/_knowledge-level-form.html',
      resolve: {
        CurrentKnowledgeLevel: ['$stateParams', 'KnowledgeLevels', function($stateParams, KnowledgeLevels) {
          return KnowledgeLevels.get($stateParams);
        }]
      },
    })
    .state('sector-edit', {
      url: '/sector/edit/:id',
      controller: 'SectorFormController',
      controllerAs: 'vm',
      templateUrl: 'sectors/_sector-form.html',
      resolve: {
        CurrentSector: ['$stateParams', 'Sectors', function($stateParams, Sectors) {
          return Sectors.get($stateParams);
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
