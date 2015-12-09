
(function() {
    'use strict';

    angular.module("app.components.menu-selection")
        .directive("menuSelection", menuSelectionDirective);

    function menuSelectionDirective() {
        return {
            restrict: 'E', 
            templateUrl: 'src/client/app/components/menu-selection/menu-selection.html',
            scope: { },
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
        vm.selectToggle = []

        vm.event = dashboardFactory.eventObject;
        vm.selectedMenus = vm.event.eventMenuObjects;
        vm.menus = dashboardFactory.space.menus;

        vm.menuSelected = function (id){
            if (vm.selectToggle.indexOf(id) === -1){
                return false
            } else {
                return true;
            }
        }

        vm.selectMenu = function(menu, qty) {
            var costpp = parseInt(menu.costPerPerson);
            var cost = dashboardFactory.calculateFoodCost(qty, costpp);
            totalFoodCost += cost;
            vm.selectToggle.push(menu.id);
            dashboardFactory.createEventMenuObject( parseInt(menu.id), qty);
        }

        vm.setBarTab = function() {
            dashboardFactory.eventObject.barTab = vm.barTab;
            dashboardFactory.eventObject.cost = totalFoodCost || 0;
            dashboardFactory.eventObject.cost += vm.barTab || 0;
            dashboardFactory.nextPage();
        };



    }

})();

