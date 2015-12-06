
(function() {
    'use strict';

    angular.module("app.components.menu-selection")
        .directive("menuSelection", menuSelectionDirective);

    function menuSelectionDirective() {
        return {
            restrict: 'E', 
            templateUrl: 'scr/client/app/components/menu-selection/menu-selection.html',
            scope: {},
            controller: menuSelectionController,
            controllerAs: 'vm',
            bindToController: true
        };
    }

    menuSelectionController.$inject = [ ];

    function menuSelectionController() {
        var vm = this;



    }

})();

