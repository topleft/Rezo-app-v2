
(function() {
    'use strict';

    angular.module("app.components.rezo-confirmation")
        .directive("rezoConfirmation", rezoConfirmationDirective);

    function rezoConfirmationDirective() {
        return {
            restrict: 'E', 
            templateUrl: 'src/client/app/components/rezo-confirmation/rezo-confirmation.html',
            scope: {},
            controller: rezoConfirmationController,
            controllerAs: 'vm',
            bindToController: true
        };
    }

    rezoConfirmationController.$inject = [ 'dashboardFactory'];

    function rezoConfirmationController(dashboardFactory) {
        var vm = this;
        var event = dashboardFactory.bookedEvent;
        var space = dashboardFactory.space.current 

        if (event.id) {
            vm.message = "Success! Event booked."
            vm.details = space.name+" is super excited to host you! They will be in contact with you shortly to confirm your booking.";
        } else {
            vm.message = "Error. Event was not booked."
            vm.error = "There was a problem booking your event. :("
        }



    }

})();

