
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

        vm.selectSpace = function () {
            console.log("select")
            var user = JSON.parse($window.localStorage.currentUser);
            dashboardFactory.eventObject.SpaceId = 1;
            dashboardFactory.eventObject.UserId = user.id;
            dashboardFactory.nextPage();
            console.log(dashboardFactory.currentPage)
        }   



    }

})();

