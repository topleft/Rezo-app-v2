(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('layoutController', layoutController);


    layoutController.$inject = ['$scope', '$mdSidenav', '$timeout', '$log', '$mdUtil', '$location', '$auth', 'dashboardFactory', '$rootScope'];

    function layoutController ($scope, $mdSidenav, $timeout, $log, $mdUtil, $location, $auth, dashboardFactory, $rootScope) {      

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

      $scope.logout = function(){
        if (!$auth.isAuthenticated()) { return; }
        $auth.logout()
          .then(function() {
          $location.path('/');
        });
      };

    }
})();