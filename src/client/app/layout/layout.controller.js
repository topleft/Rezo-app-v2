(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('layoutController', layoutController);


    layoutController.$inject = ['$scope', '$mdSidenav', '$timeout', '$log', '$mdUtil'];

    function layoutController ($scope, $mdSidenav, $timeout, $log, $mdUtil) {
      console.log('layout controller');

    }
})();