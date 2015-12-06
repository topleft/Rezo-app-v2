
(function() {
    'use strict';

    angular.module("app.components.space-selection")
        .directive("spaceSelection", spaceSelectionDirective);

    function spaceSelectionDirective() {
        return {
            restrict: 'E', 
            templateUrl: 'src/client/app/components/space-selection/space-selection.html',
            scope: {},
            controller: spaceSelectionController,
            controllerAs: 'vm',
            bindToController: true
        };
    }

    spaceSelectionController.$inject = [ 'eventFactory', '$window' ];

    function spaceSelectionController(eventFactory, $window) {
        var vm = this;

        vm.selectSpace = function () {
            var user = JSON.parse($window.localStorage.currentUser);
            eventFactory.eventObject.SpaceId = 1;
            eventFactory.eventObject.UserId = user.id;
            console.log(eventFactory.eventObject)
        }   



    }

})();

