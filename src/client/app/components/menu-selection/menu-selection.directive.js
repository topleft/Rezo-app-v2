
(function() {
    'use strict';

    angular.module("app.components.menu-selection")
        .directive("menuSelection", menuSelectionDirective);

    function menuSelectionDirective() {
        return {
            restrict: 'E', 
            templateUrl: 'src/client/app/components/menu-selection/menu-selection.html',
            scope: {},
            controller: menuSelectionController,
            controllerAs: 'vm',
            bindToController: true
        };
    }

    menuSelectionController.$inject = ['dashboardFactory' ];

    function menuSelectionController(dashboardFactory) {
        var vm = this;
        vm.menu

        vm.event = dashboardFactory.eventObject;
        vm.selectedMenus = vm.event.eventMenuObjects;
        console.log("length: ", vm.selectedMenus.length)

        dashboardFactory.getMenusForSpace()
            .success(function (menus) {
                vm.menus = menus;
                console.log(vm.menus)
            })

        vm.selectMenu = function() {
            dashboardFactory.createEventMenuObject(
                parseInt(vm.menuId), 
                parseInt(vm.quantity));
        }

        vm.setBarTab = function() {
            dashboardFactory.eventObject.barTab = vm.barTab;
            console.log("With bartab",dashboardFactory.eventObject)
            dashboardFactory.nextPage();
        }



    }

})();

