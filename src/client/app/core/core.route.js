angular.module('routes', ['ui.router', 'satellizer']);

angular.module('routes').config(['$stateProvider', '$urlRouterProvider', '$authProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $authProvider, $locationProvider){

  $authProvider
  .google({
    url: '/auth/google',
    clientId: '633292235461-i4544m3kiiis6qsltkpiiu314br179v5.apps.googleusercontent.com',
    redirectUri: window.location.origin
  });
  
  $stateProvider
  .state('login',{
    url: '/login',
    templateUrl: './src/client/app/features/login/login.html',
    controller: 'loginController',
    resolve: {skipIfLoggedIn: skipIfLoggedIn}
  })
  .state('home',{
    url: '/',
    templateUrl: './src/client/app/features/home/home.html',
    controller: 'homeController',
    resolve: {skipIfLoggedIn: skipIfLoggedIn}
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
  }); 



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
