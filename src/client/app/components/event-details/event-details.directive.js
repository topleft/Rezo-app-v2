
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
        vm.space = dashboardFactory.space.current
        vm.event = dashboardFactory.eventObject
        vm.selectedMenus = vm.event.eventMenuObjects;

        vm.confirmDetails = function () {
            var userPhone = vm.user.phoneNumber; 
            var spacePhone = vm.space.contactCellNumber;
            var contactPerson = vm.space.contactFirstName;
            var spaceName = vm.space.name;
            var userMsg = "Hey "+vm.user.username+", "+contactPerson+" from "+spaceName+" will be in touch shortly to lock in your event booking. THANKS for using Rezo!";
            var spaceMsg = "Hey "+contactPerson+", "+vm.user.username+" just booked and event at "+spaceName+"! Their contact number is "+userPhone+". Give 'em a call to finalize the booking and make some $$$ :) THANKS for using Rezo!"

            dashboardFactory.submitEvent();
            dashboardFactory.sendText(userPhone, userMsg)
            dashboardFactory.sendText(spacePhone, spaceMsg)
            // next page called in dashBoard for async reasons                
        };

    }

})();

