(function () {
    'use strict';

    angular
        .module('app.features.profile')
        .controller('profileController', profileController);


    profileController.$inject = ['$scope'];

    function profileController ($scope) {
      console.log('profile controller');

    }
})();