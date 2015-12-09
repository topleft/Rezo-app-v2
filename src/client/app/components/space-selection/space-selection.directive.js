
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

    spaceSelectionController.$inject = ['dashboardFactory', '$window' ];

    function spaceSelectionController(dashboardFactory, $window) {
        var vm = this;
        vm.spaces = dashboardFactory.spaces
        console.log(vm.spaces.spaces)

        vm.selectSpace = function (id) {
            var user = JSON.parse($window.localStorage.currentUser);
            dashboardFactory.setCurrentSpace(id);
            dashboardFactory.eventObject.SpaceId = id;
            dashboardFactory.eventObject.UserId = user.id;
            dashboardFactory.getMenusForSpace();
            dashboardFactory.nextPage();
        }   



    }

})();

