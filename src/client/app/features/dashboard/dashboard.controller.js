(function () {
    'use strict';

    angular
        .module('app.features.dashboard')
        .controller('dashboardController', dashboardController);


    dashboardController.$inject = ['$scope'];

    function dashboardController ($scope) {
      console.log('dashboard controller');

    }
})();