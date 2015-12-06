
(function() {
    'use strict';

    angular.module("app.components.time-guest-form")
        .directive("timeGuestForm", timeGuestFormDirective);

    function timeGuestFormDirective() {
        return {
            restrict: 'E', 
            templateUrl: 'scr/client/app/components/time-guest-form/time-guest-form.html',
            scope: {},
            controller: timeGuestFormController,
            controllerAs: 'vm',
            bindToController: true
        };
    }

    timeGuestFormController.$inject = [ ];

    function timeGuestFormController() {
        var vm = this;



    }

})();

