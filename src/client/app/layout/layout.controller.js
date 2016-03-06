(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('layoutController', layoutController);


    layoutController.$inject = ['$scope', '$mdSidenav', '$timeout', '$log', '$mdUtil', '$location', '$auth', 'dashboardFactory', '$rootScope', '$window'];

    function layoutController ($scope, $mdSidenav, $timeout, $log, $mdUtil, $location, $auth, dashboardFactory, $rootScope, $window) {

      $scope.currentUser = $rootScope.currentUser;
      $scope.page = {}
      $scope.page = dashboardFactory.page;

      $scope.setPage = function (pageNumber) {
        $scope.page.current = pageNumber;
      };

      $scope.close = function () {
        $mdSidenav('left').toggle()
          .then(function () {
            $log.debug("close LEFT is done");
          });
      };

      $scope.login = function(provider){
        $auth.authenticate(provider)
          .then(function(response) {
            $window.localStorage.currentUser = JSON.stringify(response.data.user);
            $rootScope.currentUser = JSON.parse(localStorage.getItem('currentUser'));
            console.log(response.data.user);
            $location.path('/dashboard');
          })
          .catch(function(response) {
            console.log(response);
          });
      }

      $scope.logout = function(){
        if (!$auth.isAuthenticated()) { return; }
        $auth.logout()
          .then(function() {
          dashboardFactory.setPage(0);
          $location.path('/home');
        });
      };

    }
})();
