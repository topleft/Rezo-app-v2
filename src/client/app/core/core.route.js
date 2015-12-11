angular.module('routes', ['ui.router', 'satellizer']);

angular.module('routes').config(['$stateProvider', '$urlRouterProvider', '$authProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $authProvider, $locationProvider){

  $authProvider
  .google({
    url: '/auth/google',
    clientId: '816554237691-5fhpjev32egi9lp6kgqr169tc9eoov45.apps.googleusercontent.com',
    redirectUri: 'https://rezo.herokuapp.com' // window.location.origin
  });
  
  $stateProvider
  .state('login',{
    url: '/',
    templateUrl: './src/client/app/features/login/login.html',
    controller: 'loginController',
    resolve: {skipIfLoggedIn: skipIfLoggedIn}
  })
  .state('home',{
    url: '/home',
    templateUrl: './src/client/app/features/home/home.html',
    controller: 'homeController',
  })
  .state('profile',{
    url: '/profile',
    templateUrl: './src/client/app/features/profile/profile.html',
    controller: 'profileController',
    resolve: {loginRequired: loginRequired}
  })
  .state('dashboard',{
    url: '/dashboard',
    templateUrl: './src/client/app/features/dashboard/dashboard.html',
    controller: 'dashboardController',
    resolve: {loginRequired: loginRequired}
  })
  .state('calendar',{
    url: '/calendar',
    templateUrl: './src/client/app/features/calendar/calendar.html',
    controller: 'calendarController',
    resolve: {loginRequired: loginRequired}
  });

  $urlRouterProvider.otherwise('/home');


  function skipIfLoggedIn($q, $auth) {
      var deferred = $q.defer();
      if ($auth.isAuthenticated()) {
        deferred.reject();
      } else {
        deferred.resolve();
      }
      return deferred.promise;
    }

  function loginRequired($q, $location, $auth) {
    var deferred = $q.defer();
    if ($auth.isAuthenticated()) {
      deferred.resolve();
    } else {
      $location.path('/login');
    }
    return deferred.promise;
  }

}]);
