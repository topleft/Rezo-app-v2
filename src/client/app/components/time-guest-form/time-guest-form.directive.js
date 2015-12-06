
(function() {
    'use strict';

    angular.module("app.components.time-guest-form")
        .directive("timeGuestForm", timeGuestFormDirective);

    function timeGuestFormDirective() {
        return {
            restrict: 'E', 
            templateUrl: 'src/client/app/components/time-guest-form/time-guest-form.html',
            scope: {},
            controller: timeGuestFormController,
            controllerAs: 'vm',
            bindToController: true
        };
    }

    timeGuestFormController.$inject = [ 'dashboardFactory' ];

    function timeGuestFormController(dashboardFactory) {
        var vm = this;
        console.log('form')

        vm.capacity = 60
        vm.times = ["1:00", "1:30", "2:00", "2:30"];

        vm.select = function() {
            dashboardFactory.eventObject.time = vm.time
            dashboardFactory.eventObject.totalGuests = vm.totalGuests
            console.log(dashboardFactory.eventObject);
        }






    }

})();

