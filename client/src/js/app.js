
var run = function($rootScope, $http, $location, $window) {
  // keep user logged in after page refresh
  if ($window.localStorage.token) {
      $http.defaults.headers.common.Authorization = 'Token ' + $window.localStorage.token;
  }

  // redirect to login page if not logged in and trying to access a restricted page
  $rootScope.$on('$locationChangeStart', function (event, next, current) {
      var publicPages = ['/'];
      var restrictedPage = publicPages.indexOf($location.path()) === -1;
      if (restrictedPage && !$window.localStorage.token) {
          $location.path('/');
      }
  });
}


var appConfig = function ($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/');

  $stateProvider

  .state('sandbox', {
    url: '/',
    templateUrl: 'views/sandbox.html',
    controller: 'sandboxCtrl as vm'
  })
};

angular.module('app', ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', appConfig])
.run(['$rootScope', '$http', '$location', '$window', run]);
