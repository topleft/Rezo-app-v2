(function () {
    'use strict';

    angular
        .module('app.features.login')
        .controller('loginController', loginController);


    loginController.$inject = [ '$rootScope','$scope', '$auth', '$location', '$window'];

    function loginController ($rootScope, $scope, $auth, $location, $window) {
      
      $scope.authenticate = function(provider) {
        $auth.authenticate(provider)
          .then(function(response) {
            $window.localStorage.currentUser = JSON.stringify(response.data.user);
            $rootScope.currentUser = JSON.parse(localStorage.getItem('currentUser'));
            console.log(response.data.user);
            $location.path('/home');
          })
          .catch(function(response) {
            console.log(response);
          });
        };
  }
})();