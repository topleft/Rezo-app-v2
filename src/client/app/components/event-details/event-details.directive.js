
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
        vm.menus = dashboardFactory.space.menus;
        vm.selectedMenus = vm.event.eventMenuObjects;
        vm.displayMenus = [];
        displayMenus();
        
        function displayMenus () {
            vm.menus.forEach(function(menu){
                return vm.selectedMenus.forEach(function(selected){
                    if (menu.id === selected.MenuId) {
                        menu.qty = selected.quantity;
                        console.log(menu)
                        vm.displayMenus.push(menu);
                    }
                })
            })
        }

        vm.confirmDetails = function () {
            var userPhone = vm.user.phoneNumber; 
            var spacePhone = vm.space.contactCellNumber;
            var contactPerson = vm.space.contactFirstName;
            var spaceName = vm.space.name;
            var userMsg = "Hey "+vm.user.username+", "+contactPerson+" from "+spaceName+" will be in touch shortly to lock in your event booking. THANKS for using Rezo!";
            var spaceMsg = "Hey "+contactPerson+", "+vm.user.username+" just booked and event at "+spaceName+"! Their contact number is "+userPhone+". Give 'em a call to finalize the booking and make some $$$ :) THANKS for using Rezo!"

            dashboardFactory.submitEvent();
            // next page called in dashBoard for async reasons                
            
            // ** uncomment for production **//
            dashboardFactory.sendText(userPhone, userMsg)
            dashboardFactory.sendText(spacePhone, spaceMsg)
        };

    }

})();

