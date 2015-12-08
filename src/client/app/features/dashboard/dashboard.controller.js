(function () {
    'use strict';

    angular
        .module('app.features.dashboard')
        .controller('dashboardController', dashboardController);


    dashboardController.$inject = ['$scope', 'dashboardFactory'];

    function dashboardController ($scope, dashboardFactory) {
      console.log("dashboard");

      $scope.page = {}

      $scope.page = dashboardFactory.page;
      $scope.space = dashboardFactory.space;

      $scope.nextPage = function () {
        dashboardFactory.nextPage();
        }

      $scope.prevPage = function () {
        dashboardFactory.prevPage();
      }


    }
})();