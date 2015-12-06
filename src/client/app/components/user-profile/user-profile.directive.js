
(function() {
    'use strict';

    angular.module("app.components.user-profile")
        .directive("userProfile", userProfileDirective);

    function userProfileDirective() {
        return {
            restrict: 'E', 
            templateUrl: 'src/client/app/components/user-profile/user-profile.html',
            scope: {},
            controller: userProfileController,
            controllerAs: 'vm',
            bindToController: true
        };
    }

    userProfileController.$inject = ['dashboardFactory'];

    function userProfileController(dashboardFactory) {
        var vm = this;

        vm.user = dashboardFactory.user;


        vm.updateProfile = function () {
            dashboardFactory.user = vm.user
            dashboardFactory.nextPage();
        }



    }

})();

