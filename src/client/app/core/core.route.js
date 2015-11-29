angular.module('routes', ['ui.router']);

angular.module('routes').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
  
  $stateProvider
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
    access: {restricted: false}
  })
  .state('dashboard',{
    url: '/dashboard',
    templateUrl: './src/client/app/features/dashboard/dashboard.html',
    controller: 'dashboardController',
    access: {restricted: false}
  }); 
}]);
