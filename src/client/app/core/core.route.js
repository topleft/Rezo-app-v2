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
    access: {restricted: false}
  })
  .state('home',{
    url: '/',
    templateUrl: './src/client/app/features/home/home.html',
    controller: 'homeController',
    access: {restricted: false}
  })
  .state('profile',{
    url: '/profile',
    templateUrl: './src/client/app/features/profile/profile.html',
    controller: 'profileController',
    access: {restricted: true}
  })
  .state('dashboard',{
    url: '/dashboard',
    templateUrl: './src/client/app/features/dashboard/dashboard.html',
    controller: 'dashboardController',
    access: {restricted: true}
  }); 
}]);
