(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('layoutController', layoutController);


    layoutController.$inject = ['$scope', '$mdSidenav', '$timeout', '$log', '$mdUtil'];

    function layoutController ($scope, $mdSidenav, $timeout, $log, $mdUtil) {
      console.log('layout controller');
      $scope.isLeftOpen = true;
      $scope.close = function () {
        $mdSidenav('left').toggle()
          .then(function () {
            $scope.isLeftOpen = false;
            $log.debug("close LEFT is done");
          });
      };

    }
})();