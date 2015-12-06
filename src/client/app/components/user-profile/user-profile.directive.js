
(function() {
    'use strict';

    angular.module("app.components.user-profile")
        .directive("userProfile", userProfileDirective);

    function userProfileDirective() {
        return {
            restrict: 'E', 
            templateUrl: 'scr/client/app/components/user-profile/user-profile.html',
            scope: {},
            controller: userProfileController,
            controllerAs: 'vm',
            bindToController: true
        };
    }

    userProfileController.$inject = [ 'dataservice' ];

    function userProfileController(dataservice, frontEndDataService) {
        var vm = this;



    }

})();

