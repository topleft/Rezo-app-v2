(function () {
    'use strict';

    angular
        .module('app.features.home')
        .controller('homeController', homeController);


    homeController.$inject = ['$scope', "dashboardFactory"];

    function homeController ($scope, dashboardFactory) {

      $scope.nextPage = function () {
        dashboardFactory.setPage(1);
      }

    }
})();