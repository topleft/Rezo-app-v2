(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('layoutController', layoutController);


    layoutController.$inject = ['$scope', '$mdSidenav', '$timeout', '$log', '$mdUtil', '$location', '$auth'];

    function layoutController ($scope, $mdSidenav, $timeout, $log, $mdUtil, $location, $auth) {
      
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
          toastr.info('You have been logged out');
          $location.path('/');
        });
      };

    }
})();