
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
        vm.menus;
        var totalFoodCost = 0;

        vm.event = dashboardFactory.eventObject;
        vm.selectedMenus = vm.event.eventMenuObjects;
        console.log("length: ", vm.selectedMenus.length)

        dashboardFactory.getMenusForSpace()
            .success(function (menus) {
                vm.menus = menus;
                console.log(vm.menus)
            })

        vm.selectMenu = function() {
            var menu = JSON.parse(vm.menu)
            var qty = parseInt(vm.quantity); 
            var costpp = parseInt(menu.costPerPerson);
            var cost = dashboardFactory.calculateFoodCost(qty, costpp);
            totalFoodCost += cost;
            dashboardFactory.createEventMenuObject( parseInt(menu.id), qty);
        }

        vm.setBarTab = function() {
            dashboardFactory.eventObject.barTab = vm.barTab;
            dashboardFactory.eventObject.cost = totalFoodCost || 0;
            dashboardFactory.eventObject.cost += vm.barTab || 0;
            console.log("With bartab",dashboardFactory.eventObject);
            dashboardFactory.nextPage();
        };



    }

})();

