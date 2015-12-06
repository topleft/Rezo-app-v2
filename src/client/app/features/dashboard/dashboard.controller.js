(function () {
    'use strict';

    angular
        .module('app.features.dashboard')
        .controller('dashboardController', dashboardController);


    dashboardController.$inject = ['$scope', 'eventFactory'];

    function dashboardController ($scope, eventFactory) {
      console.log("dashboard");

      $scope.form = {}

      $scope.form.page = eventFactory.currentPage;

      $scope.nextPage = function () {
        $scope.form.page++
        eventFactory.currentPage = $scope.form.page;
        console.log("==========")
        console.log("Controller Page",$scope.form.page)
        console.log("Factory Page",eventFactory.currentPage)
        console.log("==========")
        }

      $scope.prevPage = function () {
        $scope.form.page--
        eventFactory.currentPage  = $scope.form.page;
        console.log("==========")
        console.log("Controller Page",$scope.form.page)
        console.log("Factory Page",eventFactory.currentPage)
        console.log("==========")
      }


    }
})();