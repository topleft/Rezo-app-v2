
(function() {
    'use strict';

    angular.module("app.components.event-details")
        .directive("eventDetails", eventDetailsDirective);

    function eventDetailsDirective() {
        return {
            restrict: 'E', 
            templateUrl: 'src/client/app/components/event-details/event-details.html',
            scope: {},
            controller: eventDetailsController,
            controllerAs: 'vm',
            bindToController: true
        };
    }

    eventDetailsController.$inject = [ 'dashboardFactory'];

    function eventDetailsController(dashboardFactory) {
        var vm = this;
        vm.user = dashboardFactory.user.current
        vm.event = dashboardFactory.eventObject
        vm.selectedMenus = vm.event.eventMenuObjects;

        vm.confirmDetails = function () {
            dashboardFactory.submitEvent();
            // next page called in dashBoard for async reasons                
        };

    }

})();

