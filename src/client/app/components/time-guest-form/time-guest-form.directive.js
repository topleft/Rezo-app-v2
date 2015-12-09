
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
        vm.times = ["11:00 am", "11:30 am", "12:00 pm", "12:30 pm", "1:00 pm", "1:30 pm", "2:00 pm", "2:30 pm", "3:00 pm", "3:30 pm", "4:30 pm", "5:00 pm", "5:30 pm", "6:00 pm", "6:30 pm", "7:00 pm", "7:30 pm", "8:00 pm"];

        vm.select = function() {
            dashboardFactory.eventObject.time = vm.time
            dashboardFactory.eventObject.totalGuests = vm.totalGuests
            dashboardFactory.nextPage();
            console.log(dashboardFactory.eventObject);
        }






    }

})();

