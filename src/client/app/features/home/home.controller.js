(function () {
    'use strict';

    angular
        .module('app.features.home')
        .controller('homeController', homeController);


    homeController.$inject = ['$scope'];

    function homeController ($scope) {
      console.log('home controller');

    }
})();