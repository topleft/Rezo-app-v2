
(function() {
    'use strict';

    angular.module("app.components.event-details")
        .directive("eventDetails", eventDetailsDirective);

    function eventDetailsDirective() {
        return {
            restrict: 'E', 
            templateUrl: 'scr/client/app/components/event-details/event-details.html',
            scope: {},
            controller: eventDetailsController,
            controllerAs: 'vm',
            bindToController: true
        };
    }

    eventDetailsController.$inject = [ 'dataservice' ];

    function eventDetailsController(dataservice, frontEndDataService) {
        var vm = this;



    }

})();

